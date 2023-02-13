//FAQ database and schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const faqSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    upvote: [{
        email: String,
    }],
    email: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    studentNumber: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    comments: [{
        username: String,
        email: String,
        description: String
    }]
}, {timestamps: true});

module.exports = mongoose.model('FAQs', faqSchema);