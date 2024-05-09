
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
  try {
    // .command({ ping: 1 })
    await client.connect();
  
   let collection =  await client.db("songs2").collection('books');

   let data = await collection.find({}).toArray()
   console.log(data);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
    await client.close();
  }
}

module.exports =run;

