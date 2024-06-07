
const razorpayService = require('../services/razorpayservices');

const createLinkedAccount = async (req, res) => {
    try {
        const accountData = req.body;
        console.log('Received account data:', accountData);

        const response = await razorpayService.createLinkedAccount(accountData);
        console.log('Razorpay API response:', response);

        res.status(200).json(response);
    } catch (error) {
        console.error('Error creating linked account:', error.message);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createLinkedAccount };
