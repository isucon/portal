class Api::Admin::ApplicationController < Api::ApplicationController
  before_action :require_staff
end
