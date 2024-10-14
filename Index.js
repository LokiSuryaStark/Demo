const express = require('express')
const cors = require("cors")
const app = express()
const database = require("./database")
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",async(req,resp)=>{
    const connect = await database();
    const collect = connect.collection("Toys");
    let data = await collect.find().toArray();
    resp.json(data);
})

//cors - cross-origin resource sharing
app.post("/user",async(req,resp)=>{
    const connect = await database();
    const coll = connect.collection("SignUp");
    let data = await coll.insertOne(req.body);
})

app.listen(5000)