const PATH = '/api/job'

module.exports = [
  // POST: `/job/enqueue`
  {
    request: {
      path: `${PATH}/enqueue`,
      method: 'POST',
      // headers: { Cookie: 'sessionId=xxxxxxxxx' },
      body: {
        targetServerId: '{:targetServerId}'
      },
      values: {
        targetServerId: '10'
      }
    },
    response: {
      headers: {},
      status: 201,
      body: 'Created',
      schema: {
        type: 'string'
      },
      values: {}
    }
  },

  // GET: `/job/dequeue`
  {
    request: {
      path: `${PATH}/dequeue`,
      method: 'GET',
      body: {
        benchmarkerInstanceId: '{:benchmarkerInstanceId}'
      },
      values: {
        benchmarkerInstanceId: '1'
      }
    },
    response: {
      headers: {},
      body: {
        id: '{:id}',
        targetServerIp: '{:targetServerIp}'
      },
      schema: {
        type: 'object',
        properties: {
          id: 'string',
          targetServerIp: 'string'
        }
      },
      values: {
        id: '10',
        targetServerIp: '192.10.10.10'
      }
    }
  },

  // POST: `/job/score`
  {
    request: {
      path: `${PATH}/score`,
      method: 'PATCH',
      // headers: { Cookie: 'sessionId=xxxxxxxxx' },
      body: {
        jobId: '{:jobId}',
        status: '{:status}',
        score: '{:score}',
        stdout: '{:stdout}',
        stderr: '{:stderr}'
      },
      values: {
        jobId: '10',
        status: 'success',
        score: 500000,
        stdout: '/api/buyへのリクエストが失敗しました',
        stderr: '[ISUUMO]/api/buy?rentId=400 [504] Gateway TimeOut'
      }
    },
    response: {
      headers: {},
      status: 200,
      body: 'OK',
      schema: {
        type: 'string'
      },
      values: {}
    }
  }
]
