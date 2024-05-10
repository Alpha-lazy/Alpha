



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Anish:Anish%402007@cluster0.6c1gzun.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
 
    // .command({ ping: 1 })
   let result= await client.connect();
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return   result.db("songs2");


   
  } 

module.exports =run;







