#p Rails.application.call(Rack::MockRequest.env_for('http://localhost:3000/api/audience/dashboard').merge('HTTP_HOST' => 'localhost'))
StackProf.run(out: "tmp/stackprof-#$$.dump", mode: :cpu, interval: 100, raw: true) do
  1000.times do
    a = Time.now

    #msg = Contest.leaderboard()

    #msg = Contest.leaderboard_etag()
    
    _a,_b,c=Rails.application.call(Rack::MockRequest.env_for('http://localhost:3000/api/audience/dashboard').merge('HTTP_HOST' => 'localhost'))
    c.each { |_| :nop }

    b = Time.now
    p [b-a]
  end
end
