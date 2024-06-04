import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import hl from "./styles/Hotelslist.module.css";
import { Rating } from "react-simple-star-rating";
const Hotelslist = () => {
  const [fetchdata, setFetchdata] = useState([]);
  // the below are not used only for jav bar purpose
  const [amen, setAmen] = useState([]);
  const fetcheddata = useLocation().state;
  const checkin = fetcheddata.checkin;
  const checkout = fetcheddata.checkout;
  const location = fetcheddata.place;
  const guestscount = fetcheddata.guests;
  const roomscount = fetcheddata.rooms;
  useEffect(() => {
    axios
      .get(`http://localhost:4000/hotels/${location}/${checkin}/${checkout}`)
      .then(async (res) => {
        const fetchdata = await res.data;
        setFetchdata(fetchdata);
        console.log(fetchdata)
        if(fetchdata[0]&& fetchdata[0].ammentities){
          setAmen(Object.keys(fetchdata[0].ammentities))
        }
      });
  }, []);

  return (
    <>
      <div className="mainportion">
        <nav style={{display:"flex", justifyContent:"space-between",alignItems:"center",height:"30px"}}>
          <div>
            <h1 style={{fontSize:"2rem",fontWeight:"700"}}>Ecovoyage</h1>
          </div>
          <div>
            <ul style={{display:"flex", justifyContent:"space-between",alignItems:"center",margin:"5px"}}>
              <Link to={'/'} style={{margin:"5px"}}>Home</Link>
              <li style={{margin:"5px"}}>Offers</li>
              <li style={{margin:"5px"}}>About us</li>
              <li style={{margin:"5px"}}>Contact</li>
            </ul>
          </div>
        </nav>
        <div className={hl.secondptn}>
          <div className={hl.filter}>
            <h1> Select Filters </h1>
            <div className={hl.inputs}>
              {amen.map((e) => (
                <div className="" key={e}>
                  <input type="checkbox" value={e} id={e} />
                  <label htmlFor={e}>{e}</label>
                </div>
              ))}
            </div>
            <div className={hl.btn}>
            <button>Apply</button>

            </div>
          </div>
          <div>
          {fetchdata.map((hotel) => (
            <Link to={`/hotelinfo/${hotel._id}`} state={{
              location: location,
              checkin: checkin,
              checkout: checkout,
              guests: guestscount,
              rooms: roomscount,
            }} className={hl.datamapping} key={hotel._id}>
             
              <div className={hl.image}>
                <img src={hotel.images.mainimage} alt="mainimage" />
              </div>
              <div className={hl.info}>
                <h1>{hotel.name}</h1>
                <div className={hl.loc}>
                  <p>{hotel.location}</p>
                  <span>{hotel.place}</span>
                </div>
                <div className={hl.description}>
                  <p>{hotel.description.short}</p>
                </div>
                <div className={hl.rating}>
                  <p>Users Rating :</p>
                  <Rating
                    initialValue={hotel.rating}
                    style={{
                      display: "flex",
                    }}
                    readonly={true}
                    allowFraction={true}
                    fillColor="#ffdf00"
                    SVGstyle={{ display: "inline" }}
                    size={25}
                  />
                  <span>{hotel.rating}</span>
                </div>
              </div>
              <div className={hl.price}>
                <div>
                  <div className={hl.price_wrapper}>
                    <div className={hl.price1}>
                      <div>Price pernight -</div>
                      <p>
                        <span>&#8377;</span> {hotel.price.discount}
                      </p>
                    </div>
                    <div className={hl.price_slash}></div>
                    <div className={hl.price2}>
                      <span>&#8377;</span>
                      {hotel.price.original}
                    </div>
                  </div>
                </div>
                <div className={hl.booking}>
                <button >book now</button>
                </div>
              </div>
              </Link>
          ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default Hotelslist;
