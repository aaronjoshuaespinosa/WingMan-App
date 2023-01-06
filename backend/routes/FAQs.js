const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: 'GET all FAQs'});
});

//getting single FAQ
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single FAQ'});
});

//posting a FAQ
router.post('/', async (req, res) => {
    res.json({mssg: 'POST a FAQ'});
});

//delete a FAQ
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a FAQ'});
});

//update a FAQ
router.patch('/:id', (req, res) => {
    res.json({mssg: 'FAQ updated'});
});

module.exports = router;