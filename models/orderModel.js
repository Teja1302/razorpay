
class Order {
    constructor(amount, paymentCapture, currency, transfers) {
      this.amount = amount;
      this.payment_capture = paymentCapture;
      this.currency = currency;
      this.transfers = transfers;
    }
  }
  
  module.exports = Order;
  