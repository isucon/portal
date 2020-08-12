class Api::Contestant::ApplicationController < Api::ApplicationController
  before_action :require_contestant
end
