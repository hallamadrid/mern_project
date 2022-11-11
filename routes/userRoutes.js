const express = require('express')
const router = express.Router()
const user = require('../models/userSchema')

router.post('/adduser',(req,res)=>{
    const {fname,lname,address,phonenumber}=req.body
    const newuser = new user({fname,lname,address,phonenumber})
    newuser
    .save()
    .then((user)=>res.send(user))
    .catch((err)=>res.status(404).send({msg:"cannot add user"}))
})

router.get('/users',(req,res)=>{
    user.find()
    .then((data)=>{res.send(data)})
    .catch((err)=>res.status(500).send(err))
})
// router.put('/updateuser/:id',async(req,res)=>{
//     let userId = req.params.id
//     user.findById(userId)
//     .then
//     user.findByIdAndUpdate(userId,{$set:{...req.body}},(req,res)=>{
//         if(err) throw err
//         res.save()
//     }).then((user)=>res.send(user))
// })
router.put("/updateUser/:id", (req, res) => {
    const userID = req.params.id;
    user.findByIdAndUpdate(userID, { ...req.body })
      .then((user) => {
        if (!user) {
          return res.status(404).send({ msg: "User not found" });
        }
        res.send({ msg: "User updated", user });
      })
      .catch((err) => res.status(400).send({ msg: "ERROR UPDATING USER" }));
  });
  router.delete('/delete/:id',(req,res)=>{
    user.findByIdAndDelete(req.params.id)
    .then((data)=>{
        if(!data){
            res.status(404).json({msg:"error id not valid"})
        }
        else{
            res.status(200).json({msg:"user deleted"})
        }
    }).catch((err)=>{res.status(400).send(err)})
  })
module.exports = router