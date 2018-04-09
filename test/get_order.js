const { expect } = require('chai');

describe('GET /order/:orderId', () => {
  beforeEach(() => {
    this.orderId = '<some order ID>';
    this.orderURI = `${this.ordersBaseUri}/${encodeURIComponent(this.orderId)}`;
  });

  context('The order exists', () => {
    beforeEach(() => {
      console.log('beforeEach for will respond with 200');
      this.orderModel = {};
      this.orderSystem.display.withArgs(this.orderId).resolves(this.orderModel);
    });

    it('will respond with a 200 code', () => expect(this.GET(this.orderURI)).to.have.property('status', 200));

    describe('will respond with a HAL document for the order', () => {
    });
  });

  context('The order does not exist', () => {
    beforeEach(() => {
      this.orderModel = {};
      this.orderSystem.display.withArgs(this.orderId).resolves(null);
    });

    it('will respond with a 404 code');
  });

  context('The order subsystem is down', () => {
    beforeEach(() => {
      this.orderModel = {};
      this.orderSystem.display.withArgs(this.orderId).rejects(new Error('Expected error'));
    });

    it('will respond with a 500 code');
  });
});
