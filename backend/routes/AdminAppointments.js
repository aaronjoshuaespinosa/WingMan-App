const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth')
const {
    adminGetAppointments
} = require('../controllers/adminAppointmentController')

router.use(requireAuth);

router.get('/', adminGetAppointments);

module.exports = router;