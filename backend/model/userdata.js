const mongoose=require('mongoose')
//creating connection of test databases
const url="mongodb+srv://manideekshithgaming:Manidanger12@cluster0.40epbnu.mongodb.net/test"
const usersdata=mongoose.createConnection(url)
//Schema and model creation
const User=new mongoose.Schema({
    username:String,
    email:String,
    password:String
})
const user=usersdata.model('users',User)
module.exports=user