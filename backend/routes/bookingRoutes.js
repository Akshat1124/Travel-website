const express = require('express');
const router = express.Router();
const { addBookingItems, getMyBookings } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, addBookingItems).get(protect, getMyBookings);

module.exports = router;
