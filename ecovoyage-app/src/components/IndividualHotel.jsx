import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { useParams } from "react-router-dom";
import info from "./styles/Hotelinfo.module.css"
import SimpleImageSlider from "react-simple-image-slider";
import axios from "axios";
const IndividualHotel = () => {
  const statedata = useLocation().state
  const [hotelinfo, setHotelinfo] = useState([]);
  const { hotelid } = useParams();
  const [slideshowimages, setSlideshowimages] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/hotelinfo/${hotelid}`)
      .then(async (res) => {
        const hinfo = await res.data;
        console.log(hinfo);
        setHotelinfo(hinfo);
        setSlideshowimages([
          hinfo.images.mainimage,
          ...hinfo.images.galleryimages,
        ]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
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
     {hotelinfo?(
      <main>
        <div className={info.divider}>
          <div className={info.imagedivider}>
          <SimpleImageSlider
            width={850}
            height={500}
            images={slideshowimages}
            showNavs={true} />

          </div>
         <div className={info.divider2}>
            <div className={info.pricetag}>
             <h2>Price per night /- </h2>
                {hotelinfo.price && (
                  <p className={info.price1}>{hotelinfo.price.discount}</p>
                )}
             <span>
              <li>Swimming</li>
              <li>wifi</li>
              <li>Transport</li>
              <li>Room Service</li>
             </span>
            </div>
            <div className={info.rating}>
             <p>rating</p>
             <span>{hotelinfo.rating}</span>
             <div>
             <Rating
                    initialValue={hotelinfo.rating}
                    readonly={true}
                    style={{display:"flex",
                    }}
                    allowFraction={true}
                    fillColor="#ffdf00" SVGstyle={{ display: "inline", justifyContent: "center" }}
                    size={25}
              />

             </div>
            </div>
            <Link to={`/hotel/booking/${hotelinfo._id}`} style={{width:"100%",height:"100%"}} state={{
              location: statedata.location,
              checkin : statedata.checkin,
              checkout:statedata.checkout,
              guests : statedata.guests,
              rooms: statedata.rooms,
              id:hotelid
            }}><button>Boon now</button></Link>
          </div>
          </div>
        <div className={info.details}>
        <h1>{hotelinfo.name}</h1>
        <p>{hotelinfo.location}</p>
        </div>
        {hotelinfo.description&&<p>{hotelinfo.description.long}</p>}

        <footer>
        <div className="section__container footer__container">
          <div className="footer__col">
            {/* Soon going to modify this  */}
            <h5>Eco-Voyage</h5>
            <p>
              Welcome to Eco-Voyage, our tour and travel website is your gateway
              to a world of Eco-Voyage-inducing experiences.
            </p>
          </div>
          <div className="footer__col">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#destination">Destinations</a>
            <a href="#subscribe">Write to Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer__col">
            <h4>Features</h4>
            <a href="#">Vacation Package</a>
            <a href="#">List of Tours</a>
            <a href="#">Gallery</a>
            <a href="#">Travel on a Budget</a>
          </div>
          <div className="footer__col">
            <h4>Follow Us</h4>
            <div className="footer__socials">
              <span>
                <a href="#">
                  <i className="ri-twitter-fill" />
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="ri-linkedin-fill" />
                </a>
              </span>
              <span>
                <a href="#">
                  <img src="/pictures/instagram" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="footer__bar"></div>
      </footer>
        </main>
      
      
      
      ):(<p>NO avilable data found</p>)}
    </>
  );
};

export default IndividualHotel;
