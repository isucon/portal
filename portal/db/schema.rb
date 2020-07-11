# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_11_054109) do

  create_table "contestants", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.integer "team_id", null: false
    t.string "name", null: false
    t.string "github_login", null: false
    t.string "discord_id", null: false
    t.string "avatar_url", null: false
    t.boolean "student", default: false, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "github_id", null: false
    t.string "discord_tag", null: false
    t.index ["discord_id"], name: "index_contestants_on_discord_id", unique: true
    t.index ["github_id"], name: "index_contestants_on_github_id", unique: true
  end

  create_table "ssh_public_keys", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.integer "contestant_id", null: false
    t.text "public_key", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contestant_id"], name: "index_ssh_public_keys_on_contestant_id"
  end

  create_table "teams", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.string "name", null: false
    t.integer "leader_id"
    t.boolean "is_hidden", default: false, null: false
    t.boolean "final_participation", default: false, null: false
    t.string "email_address", null: false
    t.string "invite_token", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "withdrawn", default: false, null: false
    t.boolean "disqualified", default: false, null: false
  end

end
