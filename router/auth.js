const express = require("express");
const router = express.Router();

router.post("/register",(req,res)=> {
    console.log(req.body);
    res.json({message : req.body})
    // res.send("app is runnig from router")
})

module.exports = router;



