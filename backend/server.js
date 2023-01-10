require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const faqRoutes = require('./routes/FAQs');
const complaintRoutes = require('./routes/Complaints');
const userRoutes = require('./routes/user');
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/FAQs', faqRoutes);
app.use('/api/Complaints', complaintRoutes);
app.use('/api/user/', userRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT);
        });
    })
    .catch ((error) => {
        console.log(error);
    })

process.env

