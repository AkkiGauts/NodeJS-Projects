const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');

//get the current date
var currentDate = new Date();
var strDate = currentDate.getFullYear() + '-' + (currentDate.getMonth()+1) + '-' + currentDate.getDate();

//connecting to the database
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/putreels').then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log(err)
})

//export the models
console.log(__dirname)
const PutReel = require('./model/PutReels');

app.get("/",(req,res) => {
    res.send("Data is getting");
})

app.get("/putreels",async (req,res) => {
    try {
        const putreels = await PutReel.find();
        res.json(putreels)
    }
    catch(err) {
        res.send(err)
    }
});

app.post("/",(req,res) => {
    const putreels = new PutReel({
        id:"1",
        filename:"dance.mp4",
        creator:"iamABC",
        date:strDate
    })
    res.send(putreels.save());
    console.log(putreels)
})

//listen to the port
app.listen(port,() => {
    console.log(`The app is running at ${port}`);
})

