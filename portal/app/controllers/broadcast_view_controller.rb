class BroadcastViewController < ApplicationController
  skip_before_action :require_staff_when_always_required

  def index
  end
end
