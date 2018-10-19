module.exports.platform = {
  config : {
    nodes : {
      native : [
        'hmget',
        'hmset',
        'hget',
        'hset',
        'hgetall',
        'hkeys',
        'hvals',
      ]
    },
    aliases: {
    }
  },
  hints: {
    setup:
`No setup needed`
  }
};