// POST: `/api/question`
// GET: `/api/question/public`
// GET: `/api/question/private`

const PATH = '/api/question'

module.exports = [
  // POST: `/api/question`
  {
    request: {
      path: `${PATH}`,
      method: 'POST',
      // headers: { Cookie: 'sessionId=xxxxxxxxx' },
      body: {
        question: '{:question}'
      },
      values: {
        question: 'マシンの充電がもう0%なので急いで打っていm'
      }
    },
    response: {
      headers: {},
      body: {
        questionId: '{:id}'
      },
      values: {
        id: '1'
      }
    }
  },

  // GET: `/api/question/public`
  {
    request: {
      path: `${PATH}/public`,
      method: 'GET'
      // headers: { Cookie: 'sessionId=xxxxxxxxx' },
    },
    response: {
      headers: {},
      body: '{:questions}',
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: 'string',
            createdAt: 'string',
            teamId: 'string',
            question: 'string',
            answer: 'string',
            status: 'string',
            privacy: 'string'
          }
        }
      },
      values: {
        questions: [
          {
            id: '1',
            createdAt: '2020-02-01T03:15:45.000Z',
            updatedAt: '2020-02-01T03:25:45.000Z',
            teamId: 'someHashedString',
            question: 'いつまでが遠足ですか',
            answer: '家に帰るまでが遠足です',
            status: 'close',
            privacy: 'public'
          },
          {
            id: '2',
            createdAt: '2020-02-01T03:25:45.000Z',
            updatedAt: '2020-02-01T03:35:45.000Z',
            teamId: 'someHashedString',
            question: '八宝菜を作成した時、使用している具材の数だけ数字部分を増やしたり減らしたりした方がいいですか？',
            answer: '景品表示法違反行為になる可能性があります。具材の数によって料理名を変更した方が良いでしょう',
            status: 'close',
            privacy: 'public'
          }
        ]
      }
    }
  },

  // GET: `/api/question/private`
  {
    request: {
      path: `${PATH}/private`,
      method: 'GET'
      // headers: { Cookie: 'sessionId=xxxxxxxxx' },
    },
    response: {
      headers: {},
      body: '{:questions}',
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: 'string',
            createdAt: 'string',
            teamId: 'string',
            question: 'string',
            answer: 'string',
            status: 'string',
            privacy: 'string'
          }
        }
      },
      values: {
        questions: [
          {
            id: '1',
            createdAt: '2020-02-01T03:15:45.000Z',
            updatedAt: '2020-02-01T03:25:45.000Z',
            teamId: 'someHashedString',
            question: '胎児よ胎児よなぜ踊る、母親の心がわかっておそろしいのか',
            answer: 'はい',
            status: 'close',
            privacy: 'private'
          },
          {
            id: '2',
            createdAt: '2020-02-01T03:25:45.000Z',
            updatedAt: '2020-02-01T03:35:45.000Z',
            teamId: 'someHashedString',
            question: '香典をサンチュで包んだらめちゃくちゃ怒られました。どうしてですか？',
            answer: '',
            status: 'open',
            privacy: 'private'
          }
        ]
      }
    }
  }
]
