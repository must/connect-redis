const instance = require('./instance');
const redis = instance.redis;
const client = instance.client;
const platform = require('connect-platform');


platform.core.node({
  path: '/redis/hmget',
  public: false,
  inputs: [
    'hash',
    'key'
  ],
  outputs: [
    'value'
  ],
  controlOutputs: [
    'error'
  ],
  hints: {
    node: 'Returns the <span class="hl-blue">value</span> associated with the specified field in the <span class="hl-blue">hash</span> stored at <span class="hl-blue">key</span>.',
    inputs: {
      hash: 'The hash to be used for search.',
      key: 'The key to be used for search.'
    },
    outputs: {
      value: 'The value of the key/hash provided.'
    },
    controlOutputs: {
      error: 'An error was triggered during the send process.'
    },
  }
}, (inputs, output, control, error) => {
  if (!redis) error(new Error('Mailjet not configured properly.'));
  else {
    client.hmget([inputs.hash, inputs.key], function (err, res) {
      output('value', res);

      if(err)
        control('error');
    });  
  }
});