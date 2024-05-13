const mongoose = require('mongoose');
//const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
   age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
})




const UserModel = mongoose.model('log_reg_form', UserSchema);

module.exports = UserModel;
