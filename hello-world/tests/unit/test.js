const AWS = require('aws-sdk');
const client = new AWS.Lambda({
  region: 'ap-southeast-2',
  endpoint: new AWS.Endpoint('http://127.0.0.1:3001'),
});

client
  .invoke({
    FunctionName: 'HelloWorldFunction',
  })
  .promise()
  .then(console.log);
