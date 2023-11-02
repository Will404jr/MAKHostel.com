const hostelsModel = require('../models/hostel.model');

async function getAllhostels(req, res) {
    try {
        const hostels = await hostelsModel.find({});
        res.status(200).json(hostels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getAllhostels,
}