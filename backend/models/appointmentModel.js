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
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true});

module.exports = mongoose.model('Appointments', appointmentSchema);