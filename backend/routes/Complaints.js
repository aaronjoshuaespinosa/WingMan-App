const express = require('express');


const {
    getComplaints,
    getComplaint,
    createComplaint,
    deleteComplaint,
    updateComplaint
} = require('../controllers/complaintController')

const router = express.Router();

//GET all complaints
router.get('/', getComplaints);

//GET single complaint
router.get('/:id', getComplaint);

//CREATE a complaint
router.post('/', createComplaint);

//DELETE a complaint
router.delete('/:id', deleteComplaint);

//PATCH a complaint
router.patch('/:id', updateComplaint);

module.exports = router;