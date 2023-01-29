const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const marketplaceSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    fbLink: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Marketplace', marketplaceSchema);