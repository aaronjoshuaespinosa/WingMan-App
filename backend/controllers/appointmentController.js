const Appointment = require('../models/appointmentModel');
const mongoose = require('mongoose');

//GET all appointments
const getAppointments = async (req, res) => {
    const appointments = await Appointment.find({}).sort({createdAt: 1});
    res.status(200).json(appointments);
};

//GET a single appointment
const getAppointment = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such appointment.'});
    }

    const appointment = await Appointment.findById(id);

     //if requested id does not exist
     if (!appointment) {
        return res.status(404).json({error: 'No such appointment.'});
    }

    res.status(200).json(appointment);
};

//POST a new appointment
const createAppointment = async (req, res) => {
    const {title, description, type, status} = req.body;
    try {
        const appointment = await Appointment.create({title, description, type, status});
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

//DELETE an appointment
const deleteAppointment = async (req, res) => {
    const { id } = req.params;
    //if requested id is not valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such appointment.'});
    }
    
    const appointment = await Appointment.findOneAndDelete({_id: id});

    //if requested id does not exist
    if (!appointment) {
        return res.status(404).json({error: 'No such appointment'});
    }

    res.status(200).json(appointment);
};

//UPDATE an appointment
const updateAppointment = async (req, res) => {
    const { id } = req.params;
    //if requested id is not valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such appointment.'});
    }

    const appointment = await Appointment.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    
    if (!appointment) {
        return res.status(404).json({error: 'No such appointment'});
    }

    res.status(200).json(appointment);
};

module.exports = {
    getAppointments,
    getAppointment,
    createAppointment,
    deleteAppointment,
    updateAppointment
}