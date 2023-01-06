require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const faqRoutes = require('./routes/FAQs');
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT);
        });
    })
    .catch ((error) => {
        console.log(error);
    })

app.use('/api/FAQs', faqRoutes);

process.env

