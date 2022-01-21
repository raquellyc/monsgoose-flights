const express = require('express');
const router = express.Router();
// Require the yet to be created reviews controller
const destinationsCtrl = require('../controllers/destinations');

// Define the Route to create a review
// POST /movies/:id/reviews
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;