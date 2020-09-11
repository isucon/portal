#!/usr/bin/env ruby
require_relative '../config/environment'
$stdout.sync = true

require 'webpush'
require 'json'

k = Webpush.generate_key
puts k.curve.to_pem.to_json
