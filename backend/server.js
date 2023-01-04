require('dotenv').config();

const express = require('express');
const faqRoutes = require('./routes/FAQs');
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
});

app.use('/api/FAQs', faqRoutes);


process.env

