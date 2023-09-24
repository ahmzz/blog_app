const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs');
const User = require("../models/User");

const salt=bcrypt.genSaltSync(10)

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const userDoc = await User.create({ username, password:bcrypt.hashSync(password,salt) });
      res.status(201).json(userDoc);
    } catch (error) {
      res.status(400).json(error)
  
    }
  });

  module.exports=router