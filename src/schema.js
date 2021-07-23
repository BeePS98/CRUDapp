const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        minlenght: 2,
        required: true
    },
    email : {
        type: String,
        validate :[validator.isEmail,"Email is Invalid"],
        required: true
    }
})

module.exports = userSchema