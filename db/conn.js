const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path : "./config.env"})
const DB = process.env.DB;

mongoose.connect(DB,{
    useNewUrlParser : true,
    
    useUnifiedTopology : true,
    
}).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
})