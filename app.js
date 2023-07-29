const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({path : "./config.env"})

require("./db/conn.js");
const PORT = process.env.PORT;

app.get("/",(req,res)=> {
    res.send("app is up and runnnig")
})
app.listen(PORT,(req,res)=>{
    console.log(`PORT ${5000}`);
})