//faq controllers
const FAQ = require('../models/faqModel');
const mongoose = require('mongoose');

//GET all FAQs
const getFAQs = async (req, res) => {
    const faqs = await FAQ.find().sort({createdAt: -1});
    //uses mongodb command to get documents from 'FAQs' collection
    res.status(200).json(faqs);
}

//GET a single FAQ
const getFAQ = async (req, res) => {
    const { id } = req.params;

    //if requested id is not valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such FAQ'});
    }

    const faq = await FAQ.findById(id);
    
    //if requested id does not exist
    if (!faq) {
        return res.status(404).json({error: 'No such FAQ'});
    }
    //if id is valid
    res.status(200).json(faq);
}

//Create (POST) a new FAQ
const createFAQ = async (req, res) => {
    //add doc to db
    const { title, content, upvote, email, fullName, username, studentNumber, comments } = req.body;
    try {
        const user_id = req.user._id;
        const faq = await FAQ.create({title, content, upvote, email, fullName, username, studentNumber, user_id, comments});
        res.status(200).json(faq);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

//DELETE a FAQ
const deleteFAQ = async (req, res) => {
    const { id } = req.params;
    //if requested id is not valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such FAQ'});
    }

    const faq = await FAQ.findOneAndDelete({_id: id});
    //if requested id does not exist
    if (!faq) {
        return res.status(404).json({error: 'No such FAQ'});
    }

    //if id is valid
    res.status(200).json(faq);
}

//Update (PATCH) a FAQ
const updateFAQ = async (req, res) => {
    const { id } = req.params;
    const { comments } = req.body;
    /*const { upvote } = req.body;
    try {
        const faq = await FAQ.findOneAndUpdate({upvote});
        res.status(200).json(faq);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }*/
    //if requested id is not valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such FAQ'});
    }

    const faq = await FAQ.findOneAndUpdate({_id: id}, {
        $push: {comments: comments}
    });

    //if requested id does not exist
    if (!faq) {
        return res.status(404).json({error: 'No such FAQ'});
    }

    //if id is valid
    res.status(200).json(faq);
}

module.exports = {
    getFAQs,
    getFAQ,
    createFAQ,
    deleteFAQ,
    updateFAQ
}