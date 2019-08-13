# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_07_18_094850) do

  create_table "employee_used_credits", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "value"
    t.float "dividing_factor"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "leave_type_id"
    t.index ["leave_type_id"], name: "index_employee_used_credits_on_leave_type_id"
    t.index ["user_id"], name: "index_employee_used_credits_on_user_id"
  end

  create_table "leave_comments", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.text "comment_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "leave_id"
    t.index ["leave_id"], name: "index_leave_comments_on_leave_id"
    t.index ["user_id"], name: "index_leave_comments_on_user_id"
  end

  create_table "leave_credits", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "value"
    t.date "last_increment"
    t.float "dividing_factor"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "leave_type_id"
    t.index ["leave_type_id"], name: "index_leave_credits_on_leave_type_id"
    t.index ["user_id"], name: "index_leave_credits_on_user_id"
  end

  create_table "leave_permissions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "leave_id"
    t.bigint "user_id"
    t.index ["leave_id"], name: "index_leave_permissions_on_leave_id"
    t.index ["user_id"], name: "index_leave_permissions_on_user_id"
  end

  create_table "leave_types", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "leaves", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.date "start_date"
    t.date "end_date"
    t.text "reason"
    t.integer "num_of_halfdays"
    t.boolean "immediate_relationship", default: false
    t.boolean "doctor_note", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "leave_type_id"
    t.index ["leave_type_id"], name: "index_leaves_on_leave_type_id"
    t.index ["user_id"], name: "index_leaves_on_user_id"
  end

  create_table "notifications", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.text "text"
    t.integer "trackable_id"
     t.string "trackable_type"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "recipient_id"
    t.bigint "sender_id"
    t.index ["recipient_id"], name: "index_notifications_on_recipient_id"
    t.index ["sender_id"], name: "fk_rails_8780923399"
  end

  create_table "user_role_types", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "role_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_roles", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "user_role_type_id"
    t.index ["user_id"], name: "index_user_roles_on_user_id"
    t.index ["user_role_type_id"], name: "index_user_roles_on_user_role_type_id"
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "sex"
    t.string "civil_status"
    t.date "employment_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "authentication_token", limit: 30
    t.index ["authentication_token"], name: "index_users_on_authentication_token", unique: true
  end

  add_foreign_key "employee_used_credits", "leave_types"
  add_foreign_key "employee_used_credits", "users"
  add_foreign_key "leave_comments", "leaves", on_update: :cascade, on_delete: :cascade
  add_foreign_key "leave_comments", "users", on_update: :cascade, on_delete: :cascade
  add_foreign_key "leave_credits", "leave_types"
  add_foreign_key "leave_credits", "users"
  add_foreign_key "leave_permissions", "leaves", on_update: :cascade, on_delete: :cascade
  add_foreign_key "leave_permissions", "users", on_update: :cascade, on_delete: :cascade
  add_foreign_key "leaves", "leave_types", on_update: :cascade, on_delete: :cascade
  add_foreign_key "leaves", "users", on_update: :cascade, on_delete: :cascade
  add_foreign_key "notifications", "users", column: "recipient_id", on_update: :cascade, on_delete: :cascade
  add_foreign_key "notifications", "users", column: "sender_id", on_update: :cascade, on_delete: :cascade
  add_foreign_key "user_roles", "user_role_types", on_update: :cascade, on_delete: :cascade
  add_foreign_key "user_roles", "users", on_update: :cascade, on_delete: :cascade
end
