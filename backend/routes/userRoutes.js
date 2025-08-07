const express = require('express');
const { registerUser, loginUser, getUsers } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// GET /api/users - Admin only
router.route('/').get(protect, admin, getUsers);

// POST /api/users/register
router.post('/register', registerUser);

// POST /api/users/login
router.post('/login', loginUser);

module.exports = router;
