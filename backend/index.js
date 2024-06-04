// code for the main data fetchig 
const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
//url of the main database "Database"
const url="mongodb+srv://manideekshithgaming:Manidanger12@cluster0.40epbnu.mongodb.net/"
const Hotels = require("./model/hoteldata.js")


//routes 
const Loginroute=require('./routes/login.js')
const Registerroute=require('./routes/register.js')
const Hotellist=require('./routes/hotelsdata.js')
const Offeredhotel=require("./routes/Offeredhotel.js")
const Hotelinfo = require("./routes/hotelinfo.js")
//getting hotels data in the main page
app.get('/',async(req,res)=>{
   const data= await Hotels.find()
    res.send(data)
})



//router pages recognisation
app.use('/register',Registerroute)
app.use('/login',Loginroute)
app.use('/hotels/',Hotellist)
app.use('/hotel/offers/',Offeredhotel)
app.use("/hotelinfo/",Hotelinfo)


mongoose.connect(url).then(()=>{

    app.listen(4000,()=>{
        console.log('server is listening in port 4000')
    })
}).catch((err)=>console.log(err))

