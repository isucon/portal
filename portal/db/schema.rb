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

ActiveRecord::Schema.define(version: 2020_09_11_011239) do

  create_table "benchmark_executions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "benchmark_jobs", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.integer "team_id", null: false
    t.integer "status", default: 0, null: false
    t.string "instance_name"
    t.string "handle"
    t.datetime "started_at", precision: 6
    t.datetime "finished_at", precision: 6
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "target_id"
    t.index ["instance_name", "id"], name: "index_benchmark_jobs_on_instance_name_and_id"
    t.index ["status", "team_id", "id"], name: "index_benchmark_jobs_on_status_and_team_id_and_id"
    t.index ["team_id", "id"], name: "index_benchmark_jobs_on_team_id_and_id"
  end

  create_table "benchmark_results", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.integer "team_id", null: false
    t.integer "benchmark_job_id", null: false
    t.integer "score", default: 0, null: false
    t.integer "score_raw", default: 0, null: false
    t.integer "score_deduction", default: 0, null: false
    t.boolean "finished", null: false
    t.boolean "passed"
    t.datetime "marked_at", precision: 6, null: false
    t.text "reason"
    t.text "stdout"
    t.text "stderr"
    t.integer "exit_status"
    t.integer "exit_signal"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["benchmark_job_id"], name: "index_benchmark_results_on_benchmark_job_id", unique: true
    t.index ["finished", "exit_status", "exit_signal", "marked_at", "team_id"], name: "idx_leaderboard"
    t.index ["team_id"], name: "index_benchmark_results_on_team_id"
    t.index ["updated_at"], name: "index_benchmark_results_on_updated_at"
  end

  create_table "clarifications", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.integer "team_id"
    t.boolean "disclosed"
    t.text "question"
    t.text "answer"
    t.text "original_question"
    t.datetime "answered_at", precision: 6
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "admin", default: false, null: false
    t.index ["disclosed", "created_at"], name: "index_clarifications_on_disclosed_and_created_at"
    t.index ["team_id", "created_at"], name: "index_clarifications_on_team_id_and_created_at"
  end

  create_table "contestant_instances", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.integer "team_id", null: false
    t.string "cloud_id", null: false
    t.integer "number", null: false
    t.integer "status", null: false
    t.string "private_ipv4_address", null: false
    t.string "public_ipv4_address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cloud_id"], name: "index_contestant_instances_on_cloud_id"
    t.index ["private_ipv4_address"], name: "index_contestant_instances_on_private_ipv4_address"
    t.index ["status"], name: "index_contestant_instances_on_status"
    t.index ["team_id", "number"], name: "index_contestant_instances_on_team_id_and_number"
  end

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
    t.index ["team_id"], name: "index_contestants_on_team_id"
  end

  create_table "notifications", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.integer "contestant_id", null: false
    t.boolean "read", default: false, null: false
    t.text "encoded_message", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contestant_id", "id"], name: "index_notifications_on_contestant_id_and_id"
    t.index ["contestant_id", "read", "id"], name: "index_notifications_on_contestant_id_and_read_and_id"
  end

  create_table "push_subscriptions", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.integer "contestant_id", null: false
    t.string "endpoint", null: false
    t.string "p256dh", null: false
    t.string "auth", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contestant_id", "endpoint"], name: "index_push_subscriptions_on_contestant_id_and_endpoint"
  end

  create_table "ssh_public_keys", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.integer "contestant_id", null: false
    t.text "public_key", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["contestant_id"], name: "index_ssh_public_keys_on_contestant_id"
  end

  create_table "survey_responses", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4", force: :cascade do |t|
    t.integer "team_id"
    t.integer "benchmark_job_id"
    t.string "language"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["benchmark_job_id"], name: "index_survey_responses_on_benchmark_job_id"
    t.index ["team_id"], name: "index_survey_responses_on_team_id"
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
    t.boolean "student", null: false
    t.index ["withdrawn", "disqualified", "final_participation"], name: "idx_active_final"
  end

end
