const express = require('express');
const mongoose = require('mongoose');
const collection = require('./models/login.model');
const makhostel = require('./models/hostel.model');
const loginRouter = require('./routes/login.router');
const signupRouter = require('./routes/signup.router');

const app = express();

app.use(express.json())
app.set("view engine", "hbs")
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello');
})

mongoose.connect("mongodb://127.0.0.1:27017/MAKHostel")
    .then(() => {
        console.log("Database connected");
    })
    .catch((e) => {
        console.error("Database connection failed:", e);
    })

//login api
// app.get('/login', getAlllogins);

app.use(loginRouter);

app.use(signupRouter);

//hostel api

app.get('/hostels', async(req, res) => {
    try {
        const hostels = await makhostel.find({});
        res.status(200).json(hostels);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post('/hostel', async(req, res) => {

    try {
        const hostel = await makhostel.create(req.body)
        res.status(200).json(hostel);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

app.listen(5000, () => {
    console.log(`App running on port 5000`);
})



// console.log(req.body)
// res.send(req.body)