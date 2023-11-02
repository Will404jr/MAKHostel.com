const mongoose = require('mongoose');
const makhostel = require('../models/hostel.model'); // Update the import path

async function registerHostel(req, res) {
    try {
        const mhostel = await makhostel.create(req.body);
        res.status(200).json(mhostel);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    registerHostel,
}