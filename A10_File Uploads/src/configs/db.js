const mongoose = require("mongoose")

module.exports = () =>{

    return mongoose.connect("mongodb+srv://shivaMVC:shivaMVC123@cluster0.bj60m.mongodb.net/file-uploads?retryWrites=true&w=majority")
}