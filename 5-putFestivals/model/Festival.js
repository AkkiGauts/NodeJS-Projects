const mongoose = require('mongoose');

const festivals = new mongoose.Schema({
    id:String,
    festivname:String,
    Month:String
})

module.exports = mongoose.model("Festival",festivals);