require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const faqRoutes = require('./routes/FAQs');
const complaintRoutes = require('./routes/Complaints');
const appointmentRoutes = require('./routes/Appointments')
const userRoutes = require('./routes/user');
const app = express();
mongoose.set('strictQuery', false);

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://wingman-app-api.vercel.app');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('https://wingman-app-api.vercel.app/api/FAQs', faqRoutes);
app.use('https://wingman-app-api.vercel.app/api/Complaints', complaintRoutes);
app.use('https://wingman-app-api.vercel.app/api/Appointments', appointmentRoutes);
app.use('https://wingman-app-api.vercel.app/api/user/', userRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT);
        });
    })
    .catch ((error) => {
        console.log(error);
    })

process.env