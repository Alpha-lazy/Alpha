
const { Collection } = require('mongodb')
const aulbums = require('./aulbum.json')
const create = async() =>{
const connect = require("./connect")
    try {
        
      let db =  await connect()
   let Collections =  await db.collection('songs')
        Collections.insertMany(aulbums)
     console.log("success to ceate");
    
    } catch (error) {
        console.log(error);
    }
    
}
create()

