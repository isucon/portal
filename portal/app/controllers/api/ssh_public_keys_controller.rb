class Api::SshPublicKeysController < Api::ApplicationController
  skip_before_action :require_staff_when_always_required

  def index
    return render(plain: '400', status: 400) if params[:team_id].blank? || params[:signature].blank?
    team_id = params[:team_id].to_i

    expected_signature = OpenSSL::HMAC.hexdigest('sha384', Rails.application.config.x.ssh_key_api.secret, team_id.to_s)
    unless Rack::Utils.secure_compare(expected_signature, params[:signature])
      return render(plain: '401', status: 401)
    end

    result = []
    SshPublicKey.order(contestant_id: :asc, id: :asc).includes(:contestant).where(contestant: Contestant.where(team_id: team_id)).each do |key|
      result << "#{key.public_key} #{key.contestant.id}@#{key.contestant.github_login}"
    end

    render plain: "#{result.join(?\n)}\n", status: 200
  end
end
