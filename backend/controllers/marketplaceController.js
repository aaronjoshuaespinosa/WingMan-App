const Marketplace = require('../models/marketplaceModel');
const mongoose = require('mongoose');

//GET all offers
const getMarkets = async (req, res) => {
    const market = await Marketplace.find({ }).sort({createdAt: -1});
    res.status(200).json(market);
};

//GET a single offer
const getMarket = async (req, res) => {
    const { id } = req.params;
    //if requested id is not valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such offer.'});
    }
    const market = await Marketplace.findById(id);
    //if requested id does not exist
    if (!market) {
        return res.status(404).json({error: 'No such offer.'});
    }
    res.status(200).json(market);
};

//POST (create) a new offer
const createMarket = async (req, res) => {
    //add doc to db
    const {fullName, title, type, description, price, fbLink, email, contactNumber} = req.body;
    try {
        const market = await Marketplace.create({fullName, title, type, description, price, fbLink, email, contactNumber});
        res.status(200).json(market);
    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

//DELETE an offer
const deleteMarket = async (req, res) => {
    const { id } = req.params;
    //if requested id is not valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such offer.'});
    }
    
    const market = await Marketplace.findOneAndDelete({_id: id});

    //if requested id does not exist
    if (!market) {
        return res.status(404).json({error: 'No such offer.'});
    }

    res.status(200).json(market);
};

//UPDATE an offer
const updateMarket = async (req, res) => {
    const { id } = req.params;
    //if requested id is not valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such offer.'});
    }
    const market = await Marketplace.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    if (!market) {
        return res.status(404).json({error: 'No such offer.'});
    }
    res.status(200).json(market);
};

module.exports = {
    getMarkets,
    getMarket,
    createMarket,
    deleteMarket,
    updateMarket
}