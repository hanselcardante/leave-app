# frozen_string_literal: true

# db/migrate/20180515074849_create_leave_comments.rb
class CreateLeaveComments < ActiveRecord::Migration[5.2]
  def change
    create_table :leave_comments do |t|
      t.text :comment_text

      t.timestamps
    end
  end
end
