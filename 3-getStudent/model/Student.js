const mongoose = require('mongoose');

const students = new mongoose.Schema({
    rollNo:String,
    name:String,
    clgName:String,
    course:String
})

module.exports = mongoose.model("Student",students);
