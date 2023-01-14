const Appointment = require('../models/appointmentModel');

//GET all appointments for admin
const adminGetAppointments = async (req, res) => {
    const appointments = await Appointment.find({}).sort({createdAt: -1});
    res.status(200).json(appointments);
};


module.exports = {
    adminGetAppointments
}