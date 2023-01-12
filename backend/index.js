require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

app.get("/aj", (req, res) => {
    res.send({msg: "HI"})
})

app.listen(3001, () => {
    console.log('listen')
})