const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookie_parser=require('cookie-parser')
const mongoose = require("mongoose");

const app = express();
const register=require('./routes/Register.js')
const login=require('./routes/Login.js')
const profile=require('./routes/Profile.js')

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
mongoose.connect(
  "mongodb+srv://ahmedminhas247:mj7ilmaA0zlAJVYI@cluster0.katv9co.mongodb.net/?retryWrites=true&w=majority"
);
app.use(cookie_parser())

// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const userDoc = await User.create({ username, password:bcrypt.hashSync(password,salt) });
//     res.status(201).json(userDoc);
//   } catch (error) {
//     res.status(400).json(error)

//   }
// });

app.use(register)
app.use(login)
app.use(profile)
app.post('/logout',(req,res)=>{
  res.cookie('token','').json('ok')
})

app.listen(5000, () => {
  console.log("Server UP. ");
});
//ahmedminhas247
//mj7ilmaA0zlAJVYI
//
