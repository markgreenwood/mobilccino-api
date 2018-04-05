const { expect } = require('chai');

describe('GET /order/:orderId', () => {
  context('The order exists', () => {
    beforeEach(() => {
      this.orderModel = {};
      this.orderSystem.display.withArgs(this.orderId).resolves(this.orderModel);
    });

    it('will respond with a 200 code', () => {
      expect(false).to.be.ok; // eslint-disable-line no-unused-expressions
    });

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
