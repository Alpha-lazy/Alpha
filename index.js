const express = require('express');
const app = express();
const port = 4000;
const connect = require('./connect')
const model = require('./Models/Schema')
// const creat = require('./songdb')
const ObjectId = require('mongodb').ObjectId;



const cors = require('cors');
const corsConfig = {
  origin:"*",
  credential:true,
  methods:["GET","POST","PUT","DELETE"],
}

app.options("", cors(corsConfig))
app.use(cors(corsConfig))
app.use('/uri' , express.static(__dirname +'/Music'))
console.log(__dirname);

app.get("/alpha/aulbums" , async(req,res)=>{

let db = await connect()
let collection = await db.collection('songs')
// let find = await req.query
let find = await req.query


let data = await collection.find(find).toArray()
// console.warn(data);
// console.log(req.query);
res.status(200).json(data)

    
})

app.get("/alpha/aulbums/id" , async(req,res)=>{
    let db = await connect()
let collection = await db.collection('songs')
let id = await req.query.id

const objectId =new ObjectId(id);

const query = { _id:  objectId };


let data = await collection.find(query).toArray()
// console.warn(data);
// console.log(req.query);
res.status(200).json(data)
})


app.listen(port, async()=>{
    try {
        await connect() 
        await model()
       
        console.log("app listen at port 4000");
    } catch (error) {
        console.log("app does not listen at port 4000");
        
    }
})
