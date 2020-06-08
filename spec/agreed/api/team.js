const PATH = '/api/team'

module.exports = [
  // POST: `/api/team/create`
  {
    request: {
      path: `${PATH}/create`,
      method: 'POST',
      body: {
        uid: '{:uid}',
        userName: '{:userName}',
        discordId: '{:discordId}',
        mail: '{:mail}',
        teamName: '{:teamName}'
      },
      values: {
        uid: '4NiODIeSvzZzbsmxBzh5',
        userName: 'progfay',
        discordId: 'progfay',
        mail: 'progfay@example.com',
        teamName: '強く気高く台東区'
      }
    },
    response: {
      headers: {
        'Set-Cookie': 'sessionId={:sessionId}'
      },
      body: {
        teamId: '{:teamId}'
      },
      schema: {
        type: 'object',
        properties: {
          teamId: 'string'
        }
      },
      values: {
        sessionId: 'xxxxxxxxxxx',
        teamId: '1'
      }
    }
  },

  // POST: `/api/team/join`
  {
    request: {
      path: `${PATH}/join`,
      method: 'POST',
      body: {
        uid: '{:uid}',
        userName: '{:userName}',
        discordId: '{:discordId}',
        token: '{:teamToken}'
      },
      values: {
        uid: 'jjVA6LQ0ika6xS1dr1Ia',
        userName: 'hatobus',
        discordId: 'hatobus',
        mail: 'hatobus@example.com',
        token: 'ecb666d778725ec97307044d642bf4d160aabb76f56c0069c71ea25b1e926825'
      }
    },
    response: {
      headers: {
        'Set-Cookie': 'sessionId={:sessionId}'
      },
      body: {
        teamId: '{:teamId}'
      },
      schema: {
        type: 'object',
        properties: {
          teamId: 'string'
        }
      },
      values: {
        sessionId: 'xxxxxxxxxxx',
        teamId: '1'
      }
    }
  },

  // GET: `/api/team/all`
  {
    request: {
      path: `${PATH}/all`,
      method: 'GET'
      // headers: { Cookie: 'sessionId=xxxxxxxxx' },
    },
    response: {
      headers: {},
      body: '{:teamList}',
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: 'string',
            name: 'string'
          }
        }
      },
      values: {
        teamList: [
          {
            id: '1',
            name: '強く気高く台東区'
          },
          {
            id: '2',
            name: '清く正しく江東区'
          }
        ]
      }
    }
  },

  // GET: `/api/team/:id`
  {
    request: {
      path: `${PATH}/:id`,
      method: 'GET'
      // headers: { Cookie: 'sessionId=xxxxxxxxx' },
    },
    response: {
      headers: {},
      body: {
        id: '{:id}',
        name: '{:name}',
        token: '{:token}',
        members: '{:members}'
      },
      schema: {
        type: 'object',
        properties: {
          id: 'string',
          name: 'string',
          token: 'string',
          members: {
            type: 'object',
            properties: {
              name: 'string',
              isTeamOwner: 'boolean'
            }
          },
          serverList: {
            type: 'object',
            properties: {
              id: 'string',
              ip: 'string'
            }
          }
        }
      },
      values: {
        id: '1',
        name: '強く気高く台東区',
        token: 'ecb666d778725ec97307044d642bf4d160aabb76f56c0069c71ea25b1e926825',
        members: [
          {
            name: 'progfay',
            isTeamOwner: true
          },
          {
            name: 'hatobus',
            isTeamOwner: false
          }
        ],
        serverList: [
          {
            id: '1',
            ip: '192.168.1.1'
          },
          {
            id: '2',
            ip: '192.168.1.2'
          },
          {
            id: '3',
            ip: '192.168.1.3'
          }
        ]
      }
    }
  }
]
