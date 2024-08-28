const express = require('express');
const { processOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/orders-info', processOrder);

module.exports = router;
