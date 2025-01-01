const express = require("express")
const {ConnectMongoDB} = require("./connections")
const Userrouter = require("./routes/url")


//Connection 
ConnectMongoDB("mongodb://localhost:27017/Sam2").then(()=>{console.log("MongoDB Connected")})

//middle ware
const app = express();
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/url",Userrouter)
app.listen(8000,()=>{console.log("Server running...");})
