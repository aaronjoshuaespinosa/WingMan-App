const express = require('express');
const router = express.Router();
const {
    getAppointments,
    getAppointment,
    createAppointment,
    deleteAppointment,
    updateAppointment
} = require('../controllers/appointmentController')

//GET all appointments
router.get('/', getAppointments);

//GET a single appointment
router.get('/:id', getAppointment);

//POST a new appointment
router.post('/', createAppointment);

//DELETE an appointment
router.delete('/:id', deleteAppointment);

//UPDATE an appointment
router.patch('/:id', updateAppointment);

module.exports = router;