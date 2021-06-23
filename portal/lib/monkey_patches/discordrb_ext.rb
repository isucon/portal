require 'discordrb'
unless Discordrb::VERSION == '3.3.0'
  raise 'Consider removing this patch'
end

module APIServerMokeyPatch
  def resolve(token, server_id)
    Discordrb::API.request(
      :guilds_sid,
      server_id,
      :get,
      "#{Discordrb::API.api_base}/guilds/#{server_id}?with_counts=true",
      Authorization: token
    )
  end
end
Discordrb::API::Server.prepend(APIServerMokeyPatch)

module ServerMokeyPatch
  def initialize(data, bot)
    super(data, bot)

    @member_count = data['approximate_member_count']
  end
end
Discordrb::Server.prepend(ServerMokeyPatch)
