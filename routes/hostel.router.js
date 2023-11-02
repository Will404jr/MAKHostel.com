const express = require('express');
const { registerHostel } = require('../controllers/hostel.controller'); // Import the getAlllogins function correctly

const hostelRouter = express.Router();

hostelRouter.post('/hostel', registerHostel);

module.exports = hostelRouter;