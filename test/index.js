const sinon = require('sinon');
const hapi = require('hapi');
const newRouteFor = require('../index');

let server;
const port = process.env.PORT || 3000;

before(async () => {
  server = hapi.server({ host: 'localhost', port });
  console.log('Created the server');
  return server;
});

beforeEach(async () => {
  const orderSystemDouble = { // eslint-disable-line no-unused-vars
    display: sinon.stub()
  };

  console.log('Setting up a route');
  return server.route(newRouteFor.order(orderSystemDouble, arguments));
});
