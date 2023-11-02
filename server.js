const express = require('express');
const mongoose = require('mongoose');
const collection = require('./models/login.model');
const makhostel = require('./models/hostel.model');
const loginRouter = require('./routes/login.router');
const signupRouter = require('./routes/signup.router');
const hostelRouter = require('./routes/hostel.router');
const hostelsRouter = require('./routes/hostels.router');

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
app.use(loginRouter);
app.use(signupRouter);

//hostel api
app.use(hostelsRouter);
app.use(hostelRouter);

app.listen(5000, () => {
    console.log(`App running on port 5000`);
})



// console.log(req.body)
// res.send(req.body)