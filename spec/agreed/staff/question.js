const PATH = '/staff/question'

module.exports = [
  // - POST: `/staff/question`
  {
    request: {
      path: `${PATH}`,
      method: 'POST',
      // headers: { Cookie: 'sessionId=xxxxxxxxx' },
      query: {
        question: '{:question}'
      },
      values: {
        question: 'SQLのボトルネックを解消するために、この処理を簡単にすることは許されますか'
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

  // - GET: `/staff/question`
  {
    request: {
      path: `${PATH}`,
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
        questions: [{
          id: '1',
          createdAt: '2020-02-01T03:15:45.000Z',
          updatedAt: '2020-02-01T03:25:45.000Z',
          teamId: 'someHashedString',
          question: 'バナナはおやつに入りますか',
          answer: '入りません',
          status: 'close',
          privacy: 'private'
        },
        {
          id: '2',
          createdAt: '2020-02-01T03:15:45.000Z',
          updatedAt: '2020-02-01T03:25:45.000Z',
          teamId: 'someHashedString',
          question: 'いつまでが遠足ですか',
          answer: '家に帰るまでが遠足です',
          status: 'close',
          privacy: 'public'
        },
        {
          id: '3',
          createdAt: '2020-02-01T03:15:45.000Z',
          updatedAt: '2020-02-01T03:25:45.000Z',
          teamId: 'someHashedString',
          question: 'おやつはいくらまで持ってきていいですか',
          answer: '',
          status: 'open',
          privacy: 'private'
        }
        ]
      }
    }
  },

  // - POST: `/staff/question/:id`
  {
    request: {
      path: `${PATH}/:id`,
      method: 'POST',
      // headers: { Cookie: 'sessionId=xxxxxxxxx' },
      query: {},
      values: {
        answer: '入りません',
        status: 'open',
        privacy: 'private'
      }
    },
    response: {
      headers: {},
      body: {},
      values: {}
    }
  },

  // - PUT: `/staff/question/:id`
  {
    request: {
      path: `${PATH}/:id`,
      method: 'PUT',
      query: {},
      values: {
        answer: '入りません',
        status: 'open',
        privacy: 'private'
      }
    },
    response: {
      headers: {},
      body: {},
      values: {}
    }
  }
]
