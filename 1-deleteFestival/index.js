const express = require('express');
const app = express();
const port = 3000;

let festivals = [
    {
        "id": "1",
        "festivname": "Sankranti",
        "Month": "Jan"
    },
    {
        "id": "2",
        "festivname": "Dewali",
        "Month": "Nov"
    }
];

//get the data
app.get("/", (req, res) => {
    res.send(festivals);
})

app.get("/deletefestival/:id", (req, res) => {

})

const deleteData = app.delete('/deletefestival/:id', (req, res) => {
    //getting the id from URL
    const getId = req.params.id;
    festivals = festivals.filter(x => { return x.id!=getId })
    res.send("Data deleted sucessfully")
})

app.listen(port, () => {
    console.log(`The app is runnig on ${port}`);
});