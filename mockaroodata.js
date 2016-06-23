var Mockaroo = require('mockaroo'); // npm install mockaroo

var client = new Mockaroo.Client({
    apiKey: '32e524b0'
})

var data;
client.generate({
    count: 10,
    schema: 'CliniReports'
  }).then(function(records) {
    // data = records
    exports.data = data
  }).catch(function(error) {
    if (error instanceof Mockaroo.errors.InvalidApiKeyError) {
      console.log('invalid api key');
    } else if (error instanceof Mockaroo.errors.UsageLimitExceededError) {
      console.log('usage limit exceeded');
    } else if (error instanceof Mockaroo.errors.ApiError) {
      console.log('api error: ' + error.message);
    } else {
      console.log('unknown error: ' + error);
    }
});
