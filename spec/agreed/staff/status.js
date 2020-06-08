const PATH = '/staff/status'

module.exports = [
  // - GET: `/staff/status/ranking`
  {
    request: {
      path: `${PATH}/ranking`,
      method: 'GET',
      // headers: { Cookie: 'sessionId=xxxxxxxxx' },
      query: {},
      values: {}
    },
    response: {
      headers: {},
      body: '{:ranking}',
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            rank: 'number',
            latestScore: 'number',
            teamName: 'string'
          }
        }
      },
      values: {
        ranking: [
          {
            rank: 1,
            latestScore: 35801,
            teamName: '白金動物園'
          },
          {
            rank: 2,
            latestScore: 29704,
            teamName: 'nil'
          },
          {
            rank: 3,
            latestScore: 13996,
            teamName: 'はしもとせいこ'
          },
          {
            rank: 4,
            latestScore: 13016,
            teamName: 'しゃかラン'
          },
          {
            rank: 5,
            latestScore: 12507,
            teamName: '株式会社イーグルジャンプ秋葉原ラボ'
          },
          {
            rank: 6,
            latestScore: 10894,
            teamName: 'ふんばり温泉チーム'
          },
          {
            rank: 7,
            latestScore: 10401,
            teamName: '百万円ドリブン'
          },
          {
            rank: 8,
            latestScore: 10391,
            teamName: 'ソレイユ'
          },
          {
            rank: 9,
            latestScore: 9628,
            teamName: '流れ弾'
          },
          {
            rank: 10,
            latestScore: 9255,
            teamName: 'tmp'
          },
          {
            rank: 11,
            latestScore: 8995,
            teamName: 'いんふらえんじにあー'
          },
          {
            rank: 12,
            latestScore: 7462,
            teamName: '失敗から学ぶISUCONの正しい歩き方'
          },
          {
            rank: 13,
            latestScore: 7251,
            teamName: 'yarunee'
          },
          {
            rank: 14,
            latestScore: 7208,
            teamName: '京都スイーツ(b・ω・)b'
          },
          {
            rank: 15,
            latestScore: 4160,
            teamName: '計算機科学実験及演習3.5'
          },
          {
            rank: 16,
            latestScore: 4031,
            teamName: 'luminous'
          },
          {
            rank: 17,
            latestScore: 2525,
            teamName: 'CatBoy'
          }
        ]
      }
    }
  },

  // - GET: `/staff/status/benchmarker`
  {
    request: {
      path: `${PATH}/benchmarker`,
      method: 'GET',
      // headers: { Cookie: 'sessionId=xxxxxxxxx' },
      query: {},
      values: {}
    },
    response: {
      headers: {},
      body: '{:benchmarkerStatuses}',
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: 'string',
            runningJobId: 'string',
            startedAt: 'string'
          }
        }
      },
      values: {
        benchmarkerStatuses: [
          {
            id: '1',
            runningJobId: '1',
            startedAt: '2020-01-01T00:01:00.000Z'
          },
          {
            id: '2',
            runningJobId: '2',
            startedAt: '2020-01-01T00:02:00.000Z'
          },
          {
            id: '3',
            runningJobId: '3',
            startedAt: '2020-01-01T00:03:00.000Z'
          }
        ]
      }
    }
  },

  // - GET: `/staff/status/job`
  {
    request: {
      path: `${PATH}/job`,
      method: 'GET',
      // headers: { Cookie: 'sessionId=xxxxxxxxx' },
      query: {},
      values: {}
    },
    response: {
      headers: {},
      body: '{:jobStatuses}',
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: 'string',
            status: 'string',
            createdAt: 'string',
            updatedAt: 'string',
            finishedAt: 'string',
            teamId: 'string',
            targetServerId: 'string',
            score: 'number',
            stdout: 'string',
            stderr: 'string'
          }
        }
      },
      values: {
        jobStatuses: [
          {
            id: '1',
            status: 'running',
            createdAt: '2020-01-01T00:01:00.000Z',
            updatedAt: '2020-01-01T00:01:00.000Z',
            finishedAt: '',
            teamId: '1',
            targetServerId: '1',
            score: 0,
            stdout: '',
            stderr: ''
          },
          {
            id: '2',
            status: 'pending',
            createdAt: '2020-01-01T00:02:00.000Z',
            updatedAt: '2020-01-01T00:02:00.000Z',
            finishedAt: '',
            teamId: '2',
            targetServerId: '2',
            score: 0,
            stdout: '',
            stderr: ''
          },
          {
            id: '3',
            status: 'success',
            createdAt: '2020-01-01T00:03:00.000Z',
            updatedAt: '2020-01-01T00:03:50.000Z',
            finishedAt: '2020-01-01T00:03:50.000Z',
            teamId: 3,
            targetServerId: '3',
            score: '1000',
            stdout: '{"message":"hoge"}',
            stderr: ''
          },
          {
            id: '4',
            status: 'fail',
            createdAt: '2020-01-01T00:04:00.000Z',
            updatedAt: '2020-01-01T00:14:00.000Z',
            finishedAt: '2020-01-01T00:14:00.000Z',
            teamId: '4',
            targetServerId: '4',
            score: 0,
            stdout: '{"message":"Benchmarker Timeout"}',
            stderr: 'error log...'
          }
        ]
      }
    }
  }
]
