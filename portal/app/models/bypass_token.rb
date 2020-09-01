require 'openssl'
require 'isuxportal/misc/bypass_token_pb'

module BypassToken
  def self.verify(string)
    signature_b64, payload_b64 = string.split(?:,2)
    return nil unless signature_b64 && payload_b64

    signature_bin = signature_b64.tr('-_','+/').unpack1('m*')
    payload_bin = payload_b64.tr('-_','+/').unpack1('m*')

    unless Rack::Utils.secure_compare(signature_bin, sign(payload_bin))
      return nil
    end

    payload = decode_payload(payload_bin)
    if payload.expiry < Time.now.to_i
      return nil
    end

    payload
  rescue ArgumentError
    nil
  end

  def self.create(msg)
    payload_bin = encode_payload(msg)
    signature = sign(payload_bin)
    pack(signature, payload_bin)
  end

  def self.decode_payload(binary)
    Isuxportal::Proto::Misc::BypassTokenPayload.decode(binary)
  rescue ArgumentError
    nil
  end

  def self.encode_payload(msg)
    msg.filler = SecureRandom.base64(6)
    Isuxportal::Proto::Misc::BypassTokenPayload.encode(msg)
  end

  def self.pack(signature, content)
    "#{[signature].pack('m0')}:#{[content].pack('m0')}".tr('+/','-_').gsub(/=/,'')
  end

  def self.sign(data)
    OpenSSL::HMAC.digest("sha384", Rails.application.config.x.bypass_token.secret, data)
  end
end
