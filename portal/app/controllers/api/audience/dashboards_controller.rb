require 'isuxportal/services/audience/dashboard_pb'

class Api::Audience::DashboardsController < Api::Audience::ApplicationController
  pb :show, Isuxportal::Proto::Services::Audience::DashboardQuery
  def show
    expires_in 5.seconds, public: true, 's-maxage' => '10'
    round = Rails.application.config.x.contest.final ? "final" : "qualify"

    cache_sum, cache = Rails.cache.read("dashboard:#{round}:audience:public-summed")
    if cache && cache_sum
      if stale?(etag: cache_sum)
        return render protobuf: cache
      end
    else
      if stale?(etag: Contest.leaderboard_etag(admin: false, team: nil))
        render protobuf: Isuxportal::Proto::Services::Audience::DashboardResponse.new(
          leaderboard: Contest.leaderboard(admin: false, team: nil), # TODO: disable progresses
        )
      end
    end
  end
end
