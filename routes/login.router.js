const express = require('express');
const { getAlllogins } = require('../controllers/login.controller'); // Import the getAlllogins function correctly

const loginRouter = express.Router();

loginRouter.get('/login', getAlllogins);

module.exports = loginRouter;