const mongoose = require("mongoose");

const userModels = new mongoose.Schema({
    

});

const User = mongoose.model("User", userModels);

module.exports = User;
