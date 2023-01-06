//user mdoel and schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt =  require('bcrypt');
const validator = require('validator');

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

userSchema.statics.signup = async function (firstName, lastName, username, email, password, studentNumber) {

    //if fields does not contain any value
    if(!firstName || !lastName || !username || !email || !password || !studentNumber) {
        throw Error('All fields must be filled');
    }
    //if email is not valid
    if (!validator.isEmail(email) || !(/@cvsu.edu.ph\s*$/.test(email))) {
        throw Error('Email is not valid.');
    }

    //if password is not strong enough
    if(!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough. It must contain more than 8 characters including 1 uppercase, 1 lowercase, 1 number, and 1 special characater. (@!# etc.)');
    } //strong password is greater than 8 strings, 1 uppercase, 1 lowercase, 1 numeric, 1 special char

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

    const user = await this.create({ firstName, lastName, username, email, password: hash, studentNumber });
    return user;
};

userSchema.statics.login = async function(email, password) {
    //if fields does not contain any value
    if(!email || !password) {
        throw Error('All fields must be filled');
    } 

    //if the user logging in exists
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