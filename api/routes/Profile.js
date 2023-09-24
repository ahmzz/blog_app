const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const secret='as2as2xafc652a16csgs6g1x6ascg6cas6g1561gva'

router.get('/profile',(req,res)=>{
    const {token}=req.cookies
    jwt.verify(token,secret,{},(err,info)=>{
        if(err) throw err
        res.json(info)

    })
    

})


module.exports=router