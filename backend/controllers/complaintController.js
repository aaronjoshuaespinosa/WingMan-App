const Complaint = require('../models/complaintModel');
const mongoose = require('mongoose');

//GET all complaints
const getComplaints = async (req, res) => {
    const complaints = await Complaint.find({ }).sort({createdAt: -1});

    res.status(200).json(complaints);
};

//GET single complaint
const getComplaint = async (req, res) => {
     const { id } = req.params;

     //if requested id is not valid
     if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such complaint.'});
     }

     const complaint = await Complaint.findById(id);

    //if requested id does not exist
    if (!complaint) {
        return res.status(404).json({error: 'No such complaint'});
    }

    res.status(200).json(complaint);
};

//POST new complaint
const createComplaint = async (req, res) => {
    //add doc to db
    const {subject, content, recipient, status} = req.body;


    try {
        const complaint = await Complaint.create({subject, content, recipient, status});
        res.status(200).json(complaint);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

//DELETE a complaint
const deleteComplaint = async (req, res) => {
    const { id } = req.params;
    //if requested id is not valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such complaint.'});
    }
    
    const complaint = await Complaint.findOneAndDelete({_id: id});

    //if requested id does not exist
    if (!complaint) {
        return res.status(404).json({error: 'No such complaint.'});
    }

    res.status(200).json(complaint);
};

//UPDATE a complaint
const updateComplaint = async (req, res) => {
    const { id } = req.params;
    //if requested id is not valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such complaint.'});
    }

    const complaint = await Complaint.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    
    if (!complaint) {
        return res.status(404).json({error: 'No such complaint.'});
    }

    res.status(200).json(complaint);
}

module.exports = {
    getComplaints,
    getComplaint,
    createComplaint,
    deleteComplaint,
    updateComplaint
}