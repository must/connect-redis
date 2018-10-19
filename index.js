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
`Should work out of the box if you have a default redis installation running on the same server.<br>
Otherwise, check the sample configuration below and <a href="https://github.com/NodeRedis/node_redis#options-object-properties">this page</a> for a more detailled description on all the options.`,
  sampleConfig: {
      redis: {
        host: "127.0.0.1",
        port: "6379",
        parser: "node_redis",
        connect_timeout: "3600000",
        max_attempts: "max_attempts",
        password: "password"
      }
    }
  }
};