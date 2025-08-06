const express = require('express');
const router = express.Router();
const { addBookingItems } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, addBookingItems);

module.exports = router;
