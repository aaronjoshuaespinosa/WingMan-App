const Complaint = require('../models/complaintModel');

//GET all complaints for admin
const adminGetComplaints = async (req, res) => {
    const complaints = await Complaint.find({  }).sort({createdAt: -1});

    res.status(200).json(complaints);
};

module.exports = {
    adminGetComplaints
}