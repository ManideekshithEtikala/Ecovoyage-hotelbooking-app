
import React from "react"
import { Route,Routes } from "react-router-dom"
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import Hotelslist from "./components/Hotelslist.jsx"
import Hoteloffers from "./components/Hoteloffers.jsx"
import IndividualHotel from "./components/IndividualHotel.jsx"
import Bookingpage from "./components/Bookingpage.jsx"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/register' element={<Register />}/>
      <Route path="/hotels/" element={<Hotelslist/>}/>
      <Route path="/hotel/offers/:offertype" element={<Hoteloffers />}/>
      <Route path="/hotelinfo/:hotelid" element={<IndividualHotel/>} />
      <Route path="/hotel/booking/:hotelid" element={<Bookingpage/>} />
    </Routes>
    </>
  )
}

export default App
