const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const UserRoute = require("./routes/user");

dotenv.config();
const app = express();
const Port = process.env.PORT || 7001;
app.listen(Port, () => {
  console.log("Server Started!!");
});

//DB CONNECTION

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DataBase connected"));

app.get("/", (req, res) => {
  res.send("am listening BAb");
});

//middle ware

// Add middleware to handle CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", UserRoute);

//CORS SETUP

app.use(cors());
