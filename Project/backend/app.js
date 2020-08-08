const express = require("express");
const bodyParser= require("body-parser");
const mongoose =require("mongoose");

const userRoutes = require("./routes/user");
const app = express();

mongoose.connect("mongodb+srv://maxi:sqTz9oBJmuZ4CTjq@cluster0-fvrcd.mongodb.net/node-angular?retryWrites=true").
then(()=>{
  console.log('connected to database!')
})
.catch(()=>{
  console.log('connection fail!')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next)=> {
  res.setHeader("Access-Control-Allow-Origin",'*');
  res.setHeader("Access-Control-Allow-Headers",
  "Origin,X-Request-with, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST,PATCH,DELETE,OPTIONS"
  );
  next();
});


app.use("/api/user", userRoutes);

module.exports = app;
