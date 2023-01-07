const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose.set("strictQuery",false);
mongoose.connect('mongodb://localhost:27017/student').then(() => {
    console.log("connected to the database")
}).catch((err) => {
    console.log(err)
})

//import the model
const Student = require('./model/Student');

app.get("/",async (req,res) => {
    const getStudent = await Student.find();
    res.send(getStudent)
})

app.post("/",(req,res) => {
    const student = new Student({
        rollNo:"1",
        name:"Rohan",
        clgName:"Modern College",
        course:"Computer Science"
    })

    res.send(student.save())
})

app.listen(port,() => {
    console.log(`The port is running at ${port}`);
})