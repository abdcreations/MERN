const express = require("express");
const router = express.Router();
// require("../db/conn");
const User = require("../models/userSchema");
require("../db/conn");

router.post('/register' , async (req , res) => {
    const {name , email , phone , work , password , cpassword} = req.body
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error : 'Plz fill require filled'})
    }
    try {
        const userExist = await User.findOne({email : email})
        if(userExist) return res.status(422).json({error : 'Email already Exist.'});
        const user = new User({name , email , phone , work , password , cpassword});
        const userRegister = await user.save();
        if(userRegister) {
            res.status(201).json({message: "user registerd successfully"})
        } 
    }
    catch(err) {
        console.log(err);
    }
})


// router.post("/register",(req,res)=> {


//     const {name,email,phone,work,password,cpassword} = req.body;
//     console.log(!name + email + phone + work + password + cpassword);
//     if (!name || !email || !phone || !work || !password || !cpassword){
//                 return res.status(422).json({error : 'Plz fill require filled'})
//     }
        
//     User.findOne({email : email})
//     .then((userExist) => {
//         console.log(name);
//         if (userExist){
//             return res.status(422).json({error : 'Email already Exist.'})
//         }

//         const user = new User({name , email , phone , work , password , cpassword})

//         user.save()
//         .then(() =>{
//             res.status(201).json({message: "user registerd successfully"})
//         })
//         .catch((err) => res.status(500).json({error : "Failed to register"}))
//     }).catch(err => {
//         console.log(error + " error")
//     })
// })

module.exports = router;



