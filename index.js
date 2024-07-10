const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const jobroute = require("./route/jobRoute")

const app = express();

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("Error connecting to database", err));



//Midlleware
app.use(express.json())

//Routes
app.use(jobroute);

app.listen("11000",()=>{
    console.log("Server is running on port 11000");
})