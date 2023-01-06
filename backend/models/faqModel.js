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
    upvote: {
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('FAQs', faqSchema);