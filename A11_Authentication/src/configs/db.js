const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://shivaMVC:shivaMVC123@cluster0.bj60m.mongodb.net/Authentication?retryWrites=true&w=majority");
};