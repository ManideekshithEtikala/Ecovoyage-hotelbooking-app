const express=require("express")
const mongoose=require("mongoose")
const url="mongodb+srv://manideekshithgaming:Manidanger12@cluster0.40epbnu.mongodb.net/hotels"
const hoteldata=mongoose.createConnection(url)
const Hotel=new mongoose.Schema({
    name:String,
    place:String,
    location:String,
    totalrooms:Number,
    geocode:{
        lat:Number,
        lon:Number
    },
    dates:{
        checkin:String,
        checkout:String
    },
    contact:{
        phone:String,
        email:String,
        website:String,
    },
    description:{
        short:String,
        long:String
    },
    price:{
        original:Number,
        discount:Number
    },
    reserved:Boolean,
    detailsofuser:{
        noofrooms:Number,
        noofadults:Number,
        noofchildren:Number,
        noofpets:Number,
    },
    offers:{
        highoffers:{
            shortdesc:String,
            longdesc:String,
            ho:Boolean
        },
        luxury:{
            shortdesc:String,
            longdesc:String,
            lu:Boolean

        },
        ecosystem:{
            shortdesc:String,
            longdesc:String,
            ec:Boolean

        },
        family:{
            shortdesc:String,
            longdesc:String,
            fa:Boolean

        },
        wholepackage:{
            shortdesc:String,
            longdesc:String,
            wp:Boolean

        }
    },
    rating:Number,
    ammentities:{
        ac:Boolean,
        petcare:Boolean,
        parking:Boolean,
        wifi:Boolean,
        swimmingpool:Boolean,
        gym:Boolean,
        restaurant:Boolean,
        bar:Boolean,
        laundry:Boolean,
        roomservice:Boolean,
        conferencehall:Boolean,
        childrenplayarea:Boolean,
        airportpickup:Boolean,
        airportdrop:Boolean,
        laundryservice:Boolean,
    },
    images:{
        mainimage:String,
        galleryimages:[String] 
    }
})

const Hotels=hoteldata.model('hotels',Hotel)
module.exports=Hotels