const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const Festival = require("./model/Festival");

let festivals = [
    {
        "id": "1",
        "festivname": "Republic Day",
        "Month": "Jan"
    },
    {
        "id": "2",
        "festivname": "Independence Day",
        "Month": "Aug"
    }
];


//rendering the index.html
app.get("/", (req, res) => {
    res.send(festivals)
})


app.post("/putReels", (req, res) => {
    const festival = {
        id:"3",
        festivname:"ABC",
        Month:"Sept"
    }
    festivals.push(festival);
    res.send("Data is added")
})


app.listen(port, () => {
    console.log(`The app is listening at ${port}`);
})