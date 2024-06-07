
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/ordercontroller');

router.post('/createOrder', orderController.createOrder);



module.exports = router;
