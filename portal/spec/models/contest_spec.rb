require 'rails_helper'

RSpec.describe Contest, type: :model do
  describe ".leaderboard" do
    let!(:now) { Time.now }
    before { now; allow(Time).to receive(:now).and_return(now) }
    let!(:team1) { create(:team) }
    let!(:team2) { create(:team) }
    let!(:team3) { create(:team, :student) }

    def update_best_score
      Team.find_in_batches do |b|
        b.each do |t|
          MaintainBestBenchmarkResultOfTeamJob.perform_now(team: t)
        end
      end
    end

    before do
      Rails.application.config.x.contest.testxxx = true
      allow(Rails.application.config.x.contest).to receive(:contest_start).and_return(now - 3600)
      allow(Rails.application.config.x.contest).to receive(:contest_freeze).and_return(now + 60)
      allow(Rails.application.config.x.contest).to receive(:contest_end).and_return(now + 120)
    end

    subject { Contest.leaderboard(history: history) }

    [
      ["with history", true],
      ["without history", true],
    ].each do |(ctxname, history)|
      context ctxname do
        let(:history) { history }

        describe "simple ranking" do
          before do
            create(:benchmark_job, :passed, scored: 100, team: team3)
            create(:benchmark_job, :passed, scored: 150, team: team2)
            create(:benchmark_job, :passed, scored: 200, team: team1)
            update_best_score()
          end

          specify do
            expect(subject.progresses).to be_empty
            expect(subject.teams.map { |_| _.team&.id }).to eq([team1.id, team2.id, team3.id])

            expect(subject.teams.find{ |_| _.team&.id == team1.id }.best_score.score).to eq(200)
            expect(subject.teams.find{ |_| _.team&.id == team1.id }.latest_score.score).to eq(200)

            if history
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores.size).to eq(1)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].score).to eq(200)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].started_at&.seconds).to eq(team1.benchmark_jobs.first.created_at.to_i)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].marked_at&.seconds).to eq(team1.benchmark_jobs.first.benchmark_result.marked_at.to_i)
            end

            expect(subject.teams.find{ |_| _.team&.id == team2.id }.best_score.score).to eq(150)
            expect(subject.teams.find{ |_| _.team&.id == team2.id }.latest_score.score).to eq(150)
            if history
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores.size).to eq(1)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[0].score).to eq(150)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[0].started_at&.seconds).to eq(team2.benchmark_jobs.first.created_at.to_i)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[0].marked_at&.seconds).to eq(team2.benchmark_jobs.first.benchmark_result.marked_at.to_i)
            end

            expect(subject.teams.find{ |_| _.team&.id == team3.id }.best_score.score).to eq(100)
            expect(subject.teams.find{ |_| _.team&.id == team3.id }.latest_score.score).to eq(100)
            if history
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores.size).to eq(1)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[0].score).to eq(100)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[0].started_at&.seconds).to eq(team3.benchmark_jobs.first.created_at.to_i)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[0].marked_at&.seconds).to eq(team3.benchmark_jobs.first.benchmark_result.marked_at.to_i)
            end
          end
        end

        describe "score history" do
          before do
            create(:benchmark_job, :passed, scored: 200, team: team1, marked_at: now)
            create(:benchmark_job, :passed, scored: 800, team: team2, marked_at: now)
            create(:benchmark_job, :failed, scored: 800, team: team2, marked_at: now+1)
            create(:benchmark_job, :passed, scored: 100, team: team3, marked_at: now+1)
            create(:benchmark_job, :passed, scored: 10, team: team1, marked_at: now+2)
            create(:benchmark_job, :passed, scored: 500, team: team3, marked_at: now+3)
            update_best_score()
          end


          specify do
            expect(subject.progresses).to be_empty
            expect(subject.teams.map { |_| _.team&.id }).to eq([team3.id, team1.id, team2.id])

            expect(subject.teams.find{ |_| _.team&.id == team1.id }.best_score.score).to eq(200)
            expect(subject.teams.find{ |_| _.team&.id == team1.id }.latest_score.score).to eq(10)
            if history
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores.size).to eq(2)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].score).to eq(200)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[1].score).to eq(10)
            end

            expect(subject.teams.find{ |_| _.team&.id == team2.id }.best_score.score).to eq(800)
            expect(subject.teams.find{ |_| _.team&.id == team2.id }.latest_score.score).to eq(0)
            if history
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores.size).to eq(2)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[0].score).to eq(800)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[1].score).to eq(0)
            end

            expect(subject.teams.find{ |_| _.team&.id == team3.id }.best_score.score).to eq(500)
            expect(subject.teams.find{ |_| _.team&.id == team3.id }.latest_score.score).to eq(500)
            if history
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores.size).to eq(2)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[0].score).to eq(100)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[1].score).to eq(500)
            end
          end
        end

        context "with errored runs" do
          before do
            create(:benchmark_job, :passed, scored: 200, team: team1, marked_at: now)
            create(:benchmark_job, :errored, scored: 10, team: team1, marked_at: now+2)
            update_best_score()
          end


          specify do
            expect(subject.progresses).to be_empty

            expect(subject.teams.find{ |_| _.team&.id == team1.id }.best_score.score).to eq(200)
            expect(subject.teams.find{ |_| _.team&.id == team1.id }.latest_score.score).to eq(200)
            expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores.size).to eq(1)
            expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].score).to eq(200)
          end
        end

        context "with errored/failed runs and resume" do
          before do
            create(:benchmark_job, :passed, scored: 200, team: team1, marked_at: now)
            create(:benchmark_job, :errored, scored: 10, team: team1, marked_at: now+2)
            create(:benchmark_job, :passed, scored: 501, team: team1, marked_at: now+3)
            create(:benchmark_job, :failed, scored: 15, team: team1, marked_at: now+4)
            create(:benchmark_job, :passed, scored: 300, team: team1, marked_at: now+5)
            update_best_score()
          end


          specify do
            expect(subject.progresses).to be_empty

            expect(subject.teams.find{ |_| _.team&.id == team1.id }.best_score.score).to eq(501)
            expect(subject.teams.find{ |_| _.team&.id == team1.id }.latest_score.score).to eq(300)
            expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores.size).to eq(4)
            expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].score).to eq(200)
            expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[1].score).to eq(501)
            expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[2].score).to eq(0)
            expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[3].score).to eq(300)
          end
        end

        context "when more than 2 teams has the same score" do
          before do
            create(:benchmark_job, :passed, scored: 200, team: team1, marked_at: now+1)
            create(:benchmark_job, :passed, scored: 100, team: team2, marked_at: now+2)
            create(:benchmark_job, :passed, scored: 500, team: team2, marked_at: now+3)
            create(:benchmark_job, :passed, scored: 500, team: team1, marked_at: now+4)
            update_best_score()
          end

          specify 'team scored earlier wins' do
            expect(subject.progresses).to be_empty
            expect(subject.teams.map { |_| _.team&.id }).to eq([team2.id, team1.id, team3.id])
          end
        end

        context "with post-freeze results" do
          before do
            create(:benchmark_job, :passed, scored: 100, team: team1, marked_at: now)
            create(:benchmark_job, :passed, scored: 200, team: team2, marked_at: now)
            create(:benchmark_job, :passed, scored: 300, team: team3, marked_at: now)

            create(:benchmark_job, :failed, scored: 800, team: team2, marked_at: now+1)

            create(:benchmark_job, :passed, scored: 101, team: team1, marked_at: now+61)
            create(:benchmark_job, :passed, scored: 201, team: team2, marked_at: now+62)
            create(:benchmark_job, :passed, scored: 301, team: team3, marked_at: now+63)

            create(:benchmark_job, :passed, scored: 500, team: team1, marked_at: now+69)
            create(:benchmark_job, :passed, scored: 600, team: team2, marked_at: now+69)

            update_best_score()
          end

          context "when admin" do
            subject { Contest.leaderboard(admin: true, team: nil, history: history) }

            it "should include all results" do
              expect(subject.teams.map { |_| _.team&.id }).to eq([team2.id, team1.id, team3.id])

              expect(subject.teams.find{ |_| _.team&.id == team1.id }.best_score.score).to eq(500)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.latest_score.score).to eq(500)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores.size).to eq(3)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].score).to eq(100)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[1].score).to eq(101)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[2].score).to eq(500)
              end

              expect(subject.teams.find{ |_| _.team&.id == team2.id }.best_score.score).to eq(600)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.latest_score.score).to eq(600)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores.size).to eq(4)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[0].score).to eq(200)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[1].score).to eq(0)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[2].score).to eq(201)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[3].score).to eq(600)
              end

              expect(subject.teams.find{ |_| _.team&.id == team3.id }.best_score.score).to eq(301)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.latest_score.score).to eq(301)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores.size).to eq(2)
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[0].score).to eq(300)
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[1].score).to eq(301)
              end
            end
          end

          context "when anonymous" do
            subject { Contest.leaderboard(admin: false, team: nil, history: history) }

            it "should not include any post-freeze results" do
              expect(subject.teams.map { |_| _.team&.id }).to eq([team3.id, team1.id, team2.id])

              expect(subject.teams.find{ |_| _.team&.id == team1.id }.best_score.score).to eq(100)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.latest_score.score).to eq(100)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores.size).to eq(1)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].score).to eq(100)
              end

              expect(subject.teams.find{ |_| _.team&.id == team2.id }.best_score.score).to eq(200)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.latest_score.score).to eq(0)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores.size).to eq(2)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[0].score).to eq(200)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[1].score).to eq(0)
              end

              expect(subject.teams.find{ |_| _.team&.id == team3.id }.best_score.score).to eq(300)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.latest_score.score).to eq(300)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores.size).to eq(1)
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[0].score).to eq(300)
              end
            end
          end


          context "when team" do
            subject { Contest.leaderboard(admin: false, team: team1, history: history) }

            it "should not include post-freeze results of other teams" do
              expect(subject.teams.map { |_| _.team&.id }).to eq([team1.id, team3.id, team2.id])

              expect(subject.teams.find{ |_| _.team&.id == team1.id }.best_score.score).to eq(500)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.latest_score.score).to eq(500)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores.size).to eq(3)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].score).to eq(100)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[1].score).to eq(101)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[2].score).to eq(500)
              end

              expect(subject.teams.find{ |_| _.team&.id == team2.id }.best_score.score).to eq(200)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.latest_score.score).to eq(0)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores.size).to eq(2)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[0].score).to eq(200)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[1].score).to eq(0)
              end

              expect(subject.teams.find{ |_| _.team&.id == team3.id }.best_score.score).to eq(300)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.latest_score.score).to eq(300)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores.size).to eq(1)
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[0].score).to eq(300)
              end
            end
          end
        end

        context "with post-close results" do
          before do
            create(:benchmark_job, :passed, scored: 100, team: team1, marked_at: now)
            create(:benchmark_job, :passed, scored: 200, team: team2, marked_at: now)
            create(:benchmark_job, :passed, scored: 300, team: team3, marked_at: now)

            create(:benchmark_job, :failed, scored: 800, team: team2, marked_at: now+1)

            create(:benchmark_job, :passed, scored: 101, team: team1, marked_at: now+61)
            create(:benchmark_job, :passed, scored: 201, team: team2, marked_at: now+62)
            create(:benchmark_job, :passed, scored: 301, team: team3, marked_at: now+63)

            create(:benchmark_job, :passed, scored: 500, team: team1, marked_at: now+69)
            create(:benchmark_job, :passed, scored: 600, team: team2, marked_at: now+69)

            ##
            create(:benchmark_job, :passed, scored: 900, team: team3, marked_at: now+121)
            create(:benchmark_job, :passed, scored: 800, team: team2, marked_at: now+121)
            create(:benchmark_job, :failed, scored: 300, team: team1, marked_at: now+121)

            update_best_score()
          end

          context "when admin" do
            subject { Contest.leaderboard(admin: true, team: nil, history: history) }

            it "should include all results" do
              expect(subject.teams.map { |_| _.team&.id }).to eq([team3.id,team2.id,team1.id])

              expect(subject.teams.find{ |_| _.team&.id == team1.id }.best_score.score).to eq(500)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.latest_score.score).to eq(0)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores.size).to eq(4)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].score).to eq(100)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[1].score).to eq(101)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[2].score).to eq(500)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[3].score).to eq(0)
              end

              expect(subject.teams.find{ |_| _.team&.id == team2.id }.best_score.score).to eq(800)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.latest_score.score).to eq(800)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores.size).to eq(5)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[0].score).to eq(200)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[1].score).to eq(0)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[2].score).to eq(201)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[3].score).to eq(600)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[4].score).to eq(800)
              end

              expect(subject.teams.find{ |_| _.team&.id == team3.id }.best_score.score).to eq(900)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.latest_score.score).to eq(900)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores.size).to eq(3)
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[0].score).to eq(300)
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[1].score).to eq(301)
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[2].score).to eq(900)
              end
            end
          end

          context "when anonymous" do
            subject { Contest.leaderboard(admin: false, team: nil, history: history) }

            it "should not include post-freeze/close results of any teams" do
              expect(subject.teams.map { |_| _.team&.id }).to eq([team3.id, team1.id, team2.id])

              expect(subject.teams.find{ |_| _.team&.id == team1.id }.best_score.score).to eq(100)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.latest_score.score).to eq(100)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores.size).to eq(1)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].score).to eq(100)
              end

              expect(subject.teams.find{ |_| _.team&.id == team2.id }.best_score.score).to eq(200)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.latest_score.score).to eq(0)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores.size).to eq(2)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[0].score).to eq(200)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[1].score).to eq(0)
              end

              expect(subject.teams.find{ |_| _.team&.id == team3.id }.best_score.score).to eq(300)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.latest_score.score).to eq(300)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores.size).to eq(1)
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[0].score).to eq(300)
              end
            end
          end


          context "when team" do
            subject { Contest.leaderboard(admin: false, team: team1, history: history) }

            it "should not include post-freeze results of any teams, including theirselves" do
              expect(subject.teams.map { |_| _.team&.id }).to eq([team1.id, team3.id, team2.id])

              expect(subject.teams.find{ |_| _.team&.id == team1.id }.best_score.score).to eq(500)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.latest_score.score).to eq(500)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores.size).to eq(3)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].score).to eq(100)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[1].score).to eq(101)
                expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[2].score).to eq(500)
              end

              expect(subject.teams.find{ |_| _.team&.id == team2.id }.best_score.score).to eq(200)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.latest_score.score).to eq(0)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores.size).to eq(2)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[0].score).to eq(200)
                expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[1].score).to eq(0)
              end

              expect(subject.teams.find{ |_| _.team&.id == team3.id }.best_score.score).to eq(300)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.latest_score.score).to eq(300)
              if history
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores.size).to eq(1)
                expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[0].score).to eq(300)
              end
            end
          end
        end

        context "with in-progress records" do
          before do
            create(:benchmark_job, :passed, scored: 100, team: team3)
            create(:benchmark_job, :passed, scored: 150, team: team2)
            create(:benchmark_job, :passed, scored: 200, team: team1)

            create(:benchmark_job, :progress, scored: 20, team: team1, marked_at: now+10)
            create(:benchmark_job, :progress, scored: 20, team: team3, marked_at: now+10)
            update_best_score()
          end

          specify do
            expect(subject.progresses).to be_empty
            expect(subject.teams.map { |_| _.team&.id }.sort).to eq([team1.id, team2.id, team3.id].sort)

            expect(subject.teams.find{ |_| _.team&.id == team1.id }.best_score.score).to eq(200)
            expect(subject.teams.find{ |_| _.team&.id == team1.id }.latest_score.score).to eq(200)
            if history
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores.size).to eq(1)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].score).to eq(200)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].started_at&.seconds).to eq(team1.benchmark_jobs.first.created_at.to_i)
              expect(subject.teams.find{ |_| _.team&.id == team1.id }.score_history.scores[0].marked_at&.seconds).to eq(team1.benchmark_jobs.first.benchmark_result.marked_at.to_i)
            end

            expect(subject.teams.find{ |_| _.team&.id == team2.id }.best_score.score).to eq(150)
            expect(subject.teams.find{ |_| _.team&.id == team2.id }.latest_score.score).to eq(150)
            if history
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores.size).to eq(1)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[0].score).to eq(150)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[0].started_at&.seconds).to eq(team2.benchmark_jobs.first.created_at.to_i)
              expect(subject.teams.find{ |_| _.team&.id == team2.id }.score_history.scores[0].marked_at&.seconds).to eq(team2.benchmark_jobs.first.benchmark_result.marked_at.to_i)
            end

            expect(subject.teams.find{ |_| _.team&.id == team3.id }.best_score.score).to eq(100)
            expect(subject.teams.find{ |_| _.team&.id == team3.id }.latest_score.score).to eq(100)
            if history
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores.size).to eq(1)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[0].score).to eq(100)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[0].started_at&.seconds).to eq(team3.benchmark_jobs.first.created_at.to_i)
              expect(subject.teams.find{ |_| _.team&.id == team3.id }.score_history.scores[0].marked_at&.seconds).to eq(team3.benchmark_jobs.first.benchmark_result.marked_at.to_i)
            end

          end
        end
      end
    end
  end
end
