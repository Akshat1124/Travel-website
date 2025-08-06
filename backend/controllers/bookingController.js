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

// @desc    Get logged in user's bookings
// @route   GET /api/bookings
// @access  Private
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate('tour', 'name destination description price duration');
    res.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Failed to fetch bookings', error: error.message });
  }
};

module.exports = { addBookingItems, getMyBookings };
