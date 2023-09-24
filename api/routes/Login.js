const express=require('express')
const User=require('../models/User')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const { json } = require('body-parser')
const router=express.Router()

const secret='as2as2xafc652a16csgs6g1x6ascg6cas6g1561gva'


router.post('/login',async (req,res)=>{

    const {username,password}=req.body
    const userDoc= await User.findOne({username})
    const passMatch=bcrypt.compareSync(password,userDoc.password)

    if(passMatch){
        jwt.sign({username,id:userDoc._id},secret,{},(err,token)=>{
            if(err) throw err
            res.cookie('token',token).json('ok')

        })

    }else{
        res.status(400).json("Invalid credentials")
    }

})

module.exports=router