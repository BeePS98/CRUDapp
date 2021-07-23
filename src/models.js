const mongoose = require("mongoose");

const userSchema = require("./schema")

const User = mongoose.model("Users", userSchema);

module.exports = User;