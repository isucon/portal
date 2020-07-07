class Api::Audience::ApplicationController < Api::ApplicationController
  after_action :cc_no_cookie
  
  private def cc_no_cookie
    request.session_options[:skip] = true
    response.cache_control[:extras] << 'no-cache="Set-Cookie"'
  end
end
