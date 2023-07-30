const express = require("express");
const app = express();
const dotenv = require("dotenv");
app.use(express.json());
app.use(require("./router/auth.js"))

// const user = require("./models/userSchema.js")

dotenv.config({path : "./config.env"})

require("./db/conn.js");

const PORT = process.env.PORT;

app.get("/",(req,res)=> {
    res.send("app is up and runnnig")
})

app.get("/home",(req,res) => {
    res.send("app is up and running in port 3000")
})
app.get("/about",(req,res) => {
    res.send("app is up and running in port about")
})
app.get("/contact",(req,res) => {
    res.send("app is up and running in port contact")
})
app.get("/login",(req,res) => {
    res.send("app is up and running in port login")
})
app.get("/register",(req,res) => {
    res.send("app is up and running in port register")
})

// app.post("/register",(req,res) => {
//     console.log(req.body);
//     res.json({message: req.body})
//     res.send("app is up and running in port register")
// })


app.listen(PORT,(req,res)=>{
    console.log(`PORT ${5000}`);
})