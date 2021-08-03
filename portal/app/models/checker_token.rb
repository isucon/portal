require 'openssl'
require 'json'

module CheckerToken
  def self.verify(string)
    signature_b64, payload_b64 = string.split(?:,2)
    return nil unless signature_b64 && payload_b64

    signature_bin = signature_b64.tr('-_','+/').unpack1('m*')
    payload_str = payload_b64.tr('-_','+/').unpack1('m*')

    unless Rack::Utils.secure_compare(signature_bin, sign(payload_str))
      return nil
    end

    payload = decode_payload(payload_str)
    if payload[:expiry] < Time.now.to_i
      return nil
    end

    payload
  rescue ArgumentError
    nil
  end

  def self.create(obj)
    json_str = encode_payload(obj)
    signature = sign(json_str)
    pack(signature, json_str)
  end

  def self.decode_payload(json_str)
    JSON.parse(json_str, symbolize_names: true)
  rescue ArgumentError
    nil
  end

  def self.encode_payload(msg)
    JSON.dump(msg)
  end

  def self.pack(signature, content)
    "#{[signature].pack('m0')}:#{[content].pack('m0')}".tr('+/','-_').gsub(/=/,'')
  end

  def self.sign(data)
    OpenSSL::HMAC.digest("sha384", Rails.application.config.x.checker_token.secret, data)
  end
end
