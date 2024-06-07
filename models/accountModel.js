const razorpayService = require('../services/razorpayservices');

exports.createLinkedAccount = async (accountData) => {
    return await razorpayService.createLinkedAccount(accountData);
};
