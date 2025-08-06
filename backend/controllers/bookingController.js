const Booking = require('../models/bookingModel');

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
const addBookingItems = async (req, res) => {
  const { tourId, price } = req.body;

  if (!tourId || !price) {
    return res.status(400).json({ message: 'Missing booking details' });
  } else {
    const booking = new Booking({
      tour: tourId,
      user: req.user._id,
      price,
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
  }
};

module.exports = { addBookingItems };
