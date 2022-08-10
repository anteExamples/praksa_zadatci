import mongoose from "mongoose";
import { MONGODB_URI } from "../config";
import { MongoClient } from "mongodb";
// var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/test";
// connection to db
(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Db connectect to", db.connection.name);
    // var authColl = db.getCollection("products")
  } catch (error) {
    console.error(error);
  }
})();
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
  
 
  // dbo.createCollection("products", function(err, res) {
  //   if (err) throw err;
  //   console.log("Products created!");
  //   db.close();
  // });
//   dbo.listCollections().toArray(function(err, items) {
//     console.log(items)
//         //and u can loop over items to fetch the names
//         db.close();
// });
// var authColl = dbo.getCollection("products")
// console.log(authColl);

// var collectionExists = database.ListCollectionNames().ToList().Contains("products");
// if (collectionExists == false) {
//     Console.WriteLine("Create Collection");
//     // code to create the collection here...
// }
// else {
//     Console.WriteLine("Collection Already Exists!!");
// }
  // db.close();
// });