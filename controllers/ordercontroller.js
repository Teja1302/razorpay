
const razorpayService = require('../services/razorpayService');

const createOrder = async (req, res) => {
    try {
        const orderData = req.body;
        console.log('Received order data:', orderData);

        const response = await razorpayService.createOrder(orderData);
        console.log('Razorpay API response:', response);

        res.status(200).json(response);
    } catch (error) {
        console.error('Error creating order:', error.message);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createOrder };
