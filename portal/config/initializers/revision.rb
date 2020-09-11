revision = Rails.root.join('REVISION')
Rails.application.config.x.revision = revision.exist? ? revision.read.chomp : Time.now.to_f.to_s
