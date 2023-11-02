const mongoose = require('mongoose');

const Hostel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    information: {
        type: String,
        required: true
    },
})

const makhostel = new mongoose.model("hostel", Hostel)

module.exports = makhostel