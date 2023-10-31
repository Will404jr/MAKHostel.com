const mongoose = require('mongoose');
const collection = require('../models/login.model'); // Update the import path

async function signUppage(req, res) {
    try {
        const collection1 = await collection.create(req.body);
        res.status(200).json(collection1);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    signUppage,
}