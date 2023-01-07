const jwt = require('jsonwebtoken');
const createToken = (_id) => {
    return jwt.sign({_id: _id}, process.env.SECRET, {expiresIn: '3d'})
} // "_id" is going to be the part of token payload, the user is logged in for 3 days and the token expires

const User = require('../models/userModel');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email,password);
        const token = createToken(user._id);
        res.status(200).json({email, password, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

const signupUser = async (req, res) => {
    const { firstName, lastName, studentNumber,  email, username, password } = req.body;
    try {
        const user = await User.signup(firstName, lastName, studentNumber,  email, username, password);

        const token = createToken(user._id);
        res.status(200).json({firstName, lastName, studentNumber,  email, username, password, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { signupUser, loginUser };