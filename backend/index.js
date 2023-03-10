require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const faqRoutes = require('./routes/FAQs');
const complaintRoutes = require('./routes/Complaints');
const appointmentRoutes = require('./routes/Appointments')
const marketplaceRoutes = require('./routes/Marketplace')
const userRoutes = require('./routes/user');
const adminAppointmentRoutes = require('./routes/AdminAppointments');
const adminComplaintRoutes = require('./routes/AdminComplaints');
const app = express();
mongoose.set('strictQuery', false);

var cors = require('cors');

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use(cors({ origin: '*' }));

app.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
});

app.use('/api/FAQs', faqRoutes);
app.use('/api/Complaints', complaintRoutes);
app.use('/api/Appointments', appointmentRoutes);
app.use('/api/Marketplace', marketplaceRoutes);
app.use('/api/user/', userRoutes);
app.use('/api/admin/Appointments', adminAppointmentRoutes);
app.use('/api/admin/Complaints', adminComplaintRoutes);


app.use('/debug', (req, res) => {
    res.send({ msg: "HI" })
})

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    })

process.env