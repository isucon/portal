class PushSubscription < ApplicationRecord
  belongs_to :contestant

  validates :endpoint, presence: true
  validates :p256dh, presence: true
  validates :auth, presence: true

  validate :validate_p256dh
  validate :validate_endpoint_is_url

  private def validate_p256dh
    _point = OpenSSL::PKey::EC::Point.new(OpenSSL::PKey::EC::Group.new('prime256v1'), OpenSSL::BN.new(Webpush.decode64(p256dh), 2))
  rescue ArgumentError, OpenSSL::PKey::EC::Point::Error
    errors.add :p256dh, "must be valid"
  end

  private def validate_auth
    Webpush.decode64(auth)
  rescue ArgumentError
    errors.add :auth, "must be valid"
  end

  private def validate_endpoint_is_url
    u = Addressable::URI.parse(endpoint)
    if !u.ip_based? || !%w(http https).include?(u.scheme) || u.host.match?(/localhost$|\.localdomain$|\.local$/) || u.host.match?(/:|^[0-9.]+$/)
      errors.add :endpoint, "must be a valid URI"
    end
  rescue Addressable::URI::InvalidURIError
    errors.add :endpoint, "must be a valid URI"
  end
end
