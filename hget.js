const instance = require('./instance');
const redis = instance.redis;
const client = instance.client;
const platform = require('connect-platform');


platform.core.node({
  path: '/redis/hget',
  public: false,
  inputs: [
    'key',
    'field'
  ],
  outputs: [
    'value'
  ],
  controlOutputs: [
    'error'
  ],
  hints: {
    node: 'Returns the <span class="hl-blue">value</span> associated with field in the hash stored at <span class="hl-blue">key</span>.',
    inputs: {
      key: 'The has key to be used for the get operation.',
      field: 'The field(s) to be used for the set operation.'
    },
    outputs: {
      value: 'The returned value.'
    },
    controlOutputs: {
      error: 'An error was triggered during the send process.'
    },
  }
}, (inputs, output, control, error) => {
  if (!redis) error(new Error('Redis not configured properly.'));
  else {
    client.hget(inputs.key, inputs.field, function (err, res) {
      if(err) {
        control('error');
        console.error(err);
        return ;
      }

      output('value', res);
    });  
  }
});