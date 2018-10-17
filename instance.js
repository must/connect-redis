const redis = require("redis");
const platform = require('connect-platform');

let options = platform.config.get('redis', {});
var client = {};

client = options ? redis.createClient(options) : redis.createClient();
client.on("error", function (err) {
    console.error(err);
});

module.exports = { redis, client };