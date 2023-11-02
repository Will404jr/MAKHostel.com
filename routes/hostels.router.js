const express = require('express');
const { getAllhostels } = require('../controllers/hostels.controller'); // Import the getAlllogins function correctly

const hostelsRouter = express.Router();

hostelsRouter.get('/hostels', getAllhostels);

module.exports = hostelsRouter;