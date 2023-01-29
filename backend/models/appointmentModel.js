const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
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
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    messages: [{
        username: String,
        email: String,
        content: String
    }]
}, { timestamps: true});

module.exports = mongoose.model('Appointments', appointmentSchema);