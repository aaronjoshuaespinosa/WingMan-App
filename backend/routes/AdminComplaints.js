const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth')
const {
    adminGetComplaints
} = require('../controllers/adminComplaintController')

router.use(requireAuth);

router.get('/', adminGetComplaints);

module.exports = router;