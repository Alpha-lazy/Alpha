const express = require('express');
const app = express();
const port = 4000;
const connect = require('./connect')
const model = require('./Models/Schema')
const creat = require('./songdb')

app.use('/uri' , express.static(__dirname +'/Music'))


app.get("/alpha/aulbums" , async(req,res)=>{

let db = await connect()
let collection = await db.collection('songs')
let find = await req.query
let data = await collection.find(find).toArray()
console.warn(data);
console.log(req.query);
res.status(200).json(data)
    
})


app.listen(port, async()=>{
    try {
        await connect() 
        await model()
        await creat()
        console.log("app listen at port 4000");
    } catch (error) {
        console.log("app does not listen at port 4000");
        
    }
})
