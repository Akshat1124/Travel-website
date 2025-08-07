const Tour = require('../models/tourModel');

// @desc    Fetch all tours
// @route   GET /api/tours
// @access  Public
const getTours = async (req, res) => {
  try {
    const tours = await Tour.find({});
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Fetch single tour
// @route   GET /api/tours/:id
// @access  Public
const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (tour) {
      res.json(tour);
    } else {
      res.status(404).json({ message: 'Tour not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a tour
// @route   POST /api/tours
// @access  Private/Admin (we'll add auth later)
const createTour = async (req, res) => {
  try {
    const { name, destination, description, price, duration, image } = req.body;

    const tour = new Tour({
      name,
      destination,
      description,
      price,
      duration,
      image,
    });

    const createdTour = await tour.save();
    res.status(201).json(createdTour);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a tour
// @route   DELETE /api/tours/:id
// @access  Private/Admin
const deleteTour = async (req, res) => {
  const tour = await Tour.findById(req.params.id);
  if (tour) {
    await Tour.deleteOne({ _id: tour._id });
    res.json({ message: 'Tour removed' });
  } else {
    res.status(404).json({ message: 'Tour not found' });
  }
};

// @desc    Update a tour
// @route   PUT /api/tours/:id
// @access  Private/Admin
const updateTour = async (req, res) => {
  try {
    const { name, destination, description, price, duration, image } = req.body;
    const tour = await Tour.findById(req.params.id);

    if (tour) {
      tour.name = name;
      tour.destination = destination;
      tour.description = description;
      tour.price = price;
      tour.duration = duration;
      tour.image = image;

      const updatedTour = await tour.save();
      res.json(updatedTour);
    } else {
      res.status(404).json({ message: 'Tour not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getTours, getTourById, createTour, deleteTour, updateTour };
