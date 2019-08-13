
module Api
  class ImmediateSuperiorsController < ApplicationController
  	def index
      superiors = User.joins(:user_role).where(user_roles: { user_role_type_id: 1 })
                  .where.not(id: current_user.id)

      
      render json:  ActiveModel::Serializer::
              CollectionSerializer.new(superiors,
                                       each_serializer: ImmediateSuperiorSerializer).to_json,
             status: :ok
    end
  end
end
