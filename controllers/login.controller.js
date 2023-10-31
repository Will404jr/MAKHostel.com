const LoginModel = require('../models/login.model');

async function getAlllogins(req, res) {
    try {
        const collections = await LoginModel.find({});
        res.status(200).json(collections);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getAlllogins,
}