const express = require('express');
const app = express();
const port = 4000;
const connect = require('./connect')

app.get("/" , async(req,res)=>{
    try {
        await connect()  
        res.send("We are in the server")
    } catch (error) {
        res.send("We are not in the server")
        
    }
    
})


app.listen(port, async()=>{
    try {
        
        console.log("app listen at port 4000");
    } catch (error) {
        console.log("app does not listen at port 4000");
        
    }
})
