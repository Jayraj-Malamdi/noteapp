// Load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
 }

const mongoose = require("mongoose");

async function connectToDb() {                   // we used async because we are using await
   // console.log("hello");
   try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
   
}

module.exports = connectToDb;     // this will be imported in server.js