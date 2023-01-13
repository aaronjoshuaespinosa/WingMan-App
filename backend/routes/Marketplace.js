const express = require('express');
const router = express.Router();

const Marketplace = require('../models/marketplaceModel');
const {
    getMarkets,
    getMarket,
    createMarket,
    updateMarket,
    deleteMarket
} = require('../controllers/marketplaceController')

//GET all offers
router.get('/', getMarkets);

//GET a single offer
router.get('/:id', getMarket);

router.post('/', createMarket);

router.delete('/:id', deleteMarket);

router.patch('/:id', updateMarket);

module.exports = router;