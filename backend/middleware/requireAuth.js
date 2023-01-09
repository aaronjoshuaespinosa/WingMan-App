const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {
     //verify if a user is authenticated
     const { authorization } = req.headers;

     //if not authorized
    if (!authorization) {
        return res.status(401).json({error: 'Authorization token required.'});
    }

    //get token from authorization
    //'Bearer asdhiuiosa123.0isad89123sa.1283798aasd" (Bearer <token>)
    const token = authorization.split(' ')[1];

    try {
         //id gets token verification
        const {_id} = jwt.verify(token, process.env.SECRET);
        //verifying if user is in database
        req.user = await User.findOne({ _id }).select('_id');
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'Request is not authorized.'});
    }
};

module.exports = requireAuth;