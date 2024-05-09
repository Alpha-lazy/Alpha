const express = require('express');
const app = express();
const port = 4000;


app.get("/" , (req,res)=>{
    res.send("We are in the server")
})


app.listen(port, ()=>{
    console.log("app listen at port 4000");
})
