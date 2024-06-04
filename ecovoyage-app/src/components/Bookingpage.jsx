import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "./Spinner";
import Alert  from "@mui/material/Alert";
const Bookingpage = () => {
  const bookingdata = useLocation().state;
  const [spinner, setSpinner] = useState(true);
  const { checkin, checkout, guests, rooms, id } = bookingdata;
  const navigator = useNavigate();
  useEffect(() => {
    try {
      axios
        .put(`http://localhost:4000/hotelinfo/booking/${id}`, {
          dates: {
            checkin: checkin,
            checkout: checkout,
          },
          detailsofuser: {
            noofrooms: rooms,
            noofadults: guests,
          },
          reserved: true,
        })
        .then(() => {
          setSpinner(false);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }, []);
  function Navigate(){
    navigator('/')
  }
  return (
    <>
      {spinner ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>Waiting for Booking conformation</span>
          <Spinner
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          <alert>
          <Alert variant="filled" severity="success">
            You have successfully completed booking
            <button onClick={Navigate} style={{border:"2px solid blue",padding:"4px 2px",margin:"4px",backgroundColor:"linear-gradient(96deg, #53b2fe, #065af3);"}}>Navigate to home page</button>
          </Alert>
          </alert>
          </div>
        </>
      )}
    </>
  );
};
export default Bookingpage;
