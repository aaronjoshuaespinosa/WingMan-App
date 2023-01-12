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

app.use('https://wingman-app-api.vercel.app//api/FAQs', faqRoutes);
app.use('https://wingman-app-api.vercel.app//api/Complaints', complaintRoutes);
app.use('https://wingman-app-api.vercel.app//api/Appointments', appointmentRoutes);
app.use('https://wingman-app-api.vercel.app//api/user/', userRoutes);

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