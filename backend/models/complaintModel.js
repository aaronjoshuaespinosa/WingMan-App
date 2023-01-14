const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const complaintSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    recipient: {
        type: String,
        required: true
    },
    status: {
        type: String,
        requried: true
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
    user_id : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Complaints', complaintSchema);