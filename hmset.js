const instance = require('./instance');
const redis = instance.redis;
const client = instance.client;
const platform = require('connect-platform');


platform.core.node({
  path: '/redis/hmset',
  public: false,
  inputs: [
    'hash',
    'key',
    'value'
  ],
  outputs: [
  ],
  controlOutputs: [
    'done',
    'error'
  ],
  hints: {
    node: 'Inserts the <span class="hl-blue">value</span> associated with the specified field in the <span class="hl-blue">hash</span> stored at <span class="hl-blue">key</span>.',
    inputs: {
      hash: 'The hash to be used for inserting the value.',
      key: 'The key to be used for search.',
      value: 'The value of the key/hash provided.'
    },
    controlOutputs: {
      error: 'An error was triggered during the send process.'
    },
  }
}, (inputs, output, control, error) => {
  if (!redis) error(new Error('Mailjet not configured properly.'));
  else {
    client.hmset([inputs.hash, inputs.key, inputs.value], function (err, res) {
      if(err) {
        control('error');
        console.error(err);
        return ;
      }

      control('done');
    });  
  }
});