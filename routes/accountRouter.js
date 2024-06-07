
const express = require('express');
const router = express.Router();
const razorpayController = require('../controllers/accountController');

router.post('/createLinkedAccount', razorpayController.createLinkedAccount);

module.exports = router;
