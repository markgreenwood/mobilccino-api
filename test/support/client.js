const request = require('request');

module.exports = baseURL => ({
  GET: resourcePath => Promise.resolve(request({
    timeout: 500,
    uri: `${baseURL}${resourcePath}`,
    method: 'GET',
    headers: { Accept: 'application/hal+json' }
  }))
});
