# frozen_string_literal: true

# app/models/user.rb
class User < ApplicationRecord
  acts_as_token_authenticatable

  # has_many :regular, class_name: "userSuperior", foreign_key: "regularId", dependent: :destroy
  # has_many :superior, class_name: "userSuperior", foreign_key: "superiorId", dependent: :destroy
  has_one :user_role
  has_one :user_role_type, through: :user_role
  has_many :sender, class_name: 'notification', foreign_key: 'senderId', dependent: :destroy
  has_many :recipient, class_name: 'notification', foreign_key: 'recipientId', dependent: :destroy
  has_many :leave_permissions
  has_many :leave_comments
  has_many :leaves
  has_many :leave_credits

  validates :first_name, :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  #    :format => {:with => /@chromedia.com/i}
  validates :password, presence: true,
                       length: { minimum: 8,
                                 too_short: '%{count} characters is the minimum allowed' }
  #  validates_confirmation_of :password, :message => "should match confirmation"

  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable,
  # :registerable, :timeoutable and :omniauthable
  devise :database_authenticatable, :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  # attr_protected :email, :password, :password_confirmation, :remember_me

  def notificationCount
    notificationCount = Notification.where(recipient_id: id, status: 'unread').count
    notificationCount
  end

  after_create :create_leave_credits

  DEFAULT_DIVIDING_FACTOR_VL = 1
  DEFAULT_DIVIDING_FACTOR_SL = 1.5
  DEFAULT_DIVIDING_FACTOR_PL = 1

  private
    def create_leave_credits
      leave_types = LeaveType.where(code: [LeaveType::VACATION, LeaveType::SICK, LeaveType::PERSONAL])
      collection = []

      leave_types.each do | t |
        _dividing_factor = User.const_get("DEFAULT_DIVIDING_FACTOR_#{t.code}")
        collection.push({value: 0, dividing_factor: _dividing_factor, user_id: id, leave_type_id: t.id})
      end
      LeaveCredit.create!(collection)
    end
end
