const express= require("express");
require("./db/conn");
const Student = require("./models/students");


const app = express();
const port=process.env.PORT  || 8000

app.use(express.json());

app.get("/", (req,res)=>{
     res.send("hello man by bitthal verma blah");
})

app.post("/students", (req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {  // used for saving in database.
        res.status(201).send(user);
    }).catch((e) =>{
        res.status(400).send(e);
    })
})

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})