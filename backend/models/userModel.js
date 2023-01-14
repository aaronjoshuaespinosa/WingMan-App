//user mdoel and schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    studentNumber: {
        type: Number,
        required: true,
        unique: true
    }
})

userSchema.statics.signup = async function (firstName, lastName, studentNumber, email, username, password) {

    //if first name is invalid
    if (!(/^[a-zA-Z ]+$/.test(firstName))) {
        throw Error('First name must contain only letters.');
    }

    //if last name is invalid
    if (!(/^[a-zA-Z ]+$/.test(lastName))) {
        throw Error('Last name must contain only letters.');
    }

    //empty fields
    if (!firstName || !lastName || !studentNumber || !email || !username || !password) {
        throw Error('All fields must be filled.');
    }

    //if email is not valid
    if (!(/@cvsu.edu.ph\s*$/.test(email))) {
        throw Error('Email is not valid, must contain "@cvsu.edu.ph" at the end. (no spaces)');
    }

    //if student number is not valid /^\d+$/.test(studentNumber)
    if (!(/^[0-9]{9,}$/.test(studentNumber))) {
        throw Error('Invalid student number, must contain only 9 numbers.');
    }

    // if username has spaces
    if (!(/^[a-zA-Z-_.]+$/.test(username))) {
        throw Error('Username must not comtain spaces.');
    }

    //if username is already registered
    const username_exists = await this.findOne({ username });
    if (username_exists) {
        throw Error('Username already in use.');
    }//

    //if student number is already registered
    const studentID_exists = await this.findOne({ studentNumber });
    if (studentID_exists) {
        throw Error('Student Number already in use.');
    }//

    //if email is already registered
    const email_exists = await this.findOne({ email });
    if (email_exists) {
        throw Error('Email already in use.');
    }//

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ firstName, lastName, studentNumber, email, username, password: hash, });
    return user;
};

userSchema.statics.login = async function (email, password) {

    //if the user logging in exists but email is incorrect
    const user = await this.findOne({ email });
    if (!user) {
        throw Error('Incorrect email.');
    }

    //from bcrypt
    const match = await bcrypt.compare(password, user.password); //compares password and hash password
    //if not match
    if (!match) {
        throw Error('Incorrect password.');
    }
    return user;

}
module.exports = mongoose.model('User', userSchema);