
const run = require('../connect')



const main = async()=>{
    try {
        
    
    let db =  await run()


    db.createCollection("songs", {
        validator: {
           $jsonSchema: {  
              required: [ "name", "uri", "author" ],
              properties: {
                 name: {
                    bsonType: "string",
                    
                 },
                 uri: {
                    bsonType: "string",
                    
                 },
                 author: {
                    bsonType:"string" ,
                   
                 }
              }
           }
        }
     } )
   //   console.log("created");
    } catch (error) {
       console.log("fail to create"); 
    }
 }

  module.exports= main

