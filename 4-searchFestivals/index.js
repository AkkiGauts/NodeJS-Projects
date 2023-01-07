const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

//getting the data from client
app.use(bodyParser.urlencoded({extended:true}));

let festivals = [
    {
        "id": "1",
        "festivname": "Gudi Padva",
        "Month": "Apr"
    },
    {
        "id": "2",
        "festivname": "Dewali",
        "Month": "Nov"
    }];

let updatedFestival = [];

//rendering the index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/getFestivals",(req,res) => {
    res.send(updatedFestival)
})

app.post("/", (req, res) => {
    var festivalName = req.body.festival;
    updatedFestival = festivals.filter(data => {
        return data.Month == festivalName
    })   
    res.redirect("/getFestivals") 
})


app.listen(port, () => {
    console.log(`The app is listening at ${port}`);
})