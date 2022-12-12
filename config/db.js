const mongoose = require("mongoose")
require('dotenv').config()

mongoose.set('strictQuery', true);

const connection = mongoose.connect("mongodb+srv://premkumar:prem@cluster0.tmvy6cz.mongodb.net/newtest?retryWrites=true&w=majority") 
console.log(process.env.MONGOCONNECT)
module.exports = connection