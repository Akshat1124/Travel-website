const express = require('express');
const router = express.Router();
const { getTours, getTourById, createTour, deleteTour, updateTour } = require('../controllers/tourController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getTours).post(protect, admin, createTour);
router.route('/:id').get(getTourById).delete(protect, admin, deleteTour).put(protect, admin, updateTour);

module.exports = router;
