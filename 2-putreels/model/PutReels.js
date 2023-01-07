const mongoose = require('mongoose');

//create the schema
const putreels = new mongoose.Schema({
    id:String,
    filename:String,
    creator:String,
    date:Date
}); 

//create model and export it
module.exports = mongoose.model("PutReel",putreels);
