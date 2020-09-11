FROM --platform=linux/amd64 node:12 as assets-builder

RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install && rm -rf /root/.cache/yarn
COPY webpack.config.js ./
COPY tsconfig.json ./
COPY types ./
COPY app/javascript ./app/javascript
COPY sw ./sw
RUN NODE_ENV=production node_modules/.bin/webpack

# https://github.com/sorah-rbpkg/dockerfiles
FROM sorah/ruby:2.7-dev as builder

RUN apt-get update \
    && apt-get install -y libmysqlclient-dev libsodium-dev git-core \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY Gemfile /app/
COPY Gemfile.lock /app/

ENV BUNDLE_FORCE_RUBY_PLATFORM 1
RUN bundle install --path /gems --jobs 2 --deployment --without development:test

FROM sorah/ruby:2.7

RUN apt-get update \
    && apt-get install -y libmysqlclient21 libsodium23 libsodium-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=builder /gems /gems
COPY --from=builder /app/.bundle /app/.bundle
COPY --from=assets-builder /app/public/packs ./public/packs
COPY --from=assets-builder /app/public/sw.js* ./public/
COPY . /app/

ENV RAILS_LOG_TO_STDOUT 1
ENV RAILS_SERVE_STATIC_FILES 1
ENV RAILS_SERVE_STATIC_FILES_CC public,max-age=31536000
ENV PORT 3000
CMD ["bundle", "exec", "puma", "-C", "/etc/puma.rb"]

