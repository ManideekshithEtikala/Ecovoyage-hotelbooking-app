import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import dayjs from "dayjs";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  //location ,checkin,checkout,guests,rooms info of user
  const [loc, setLoc] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(0);
  const [rooms, setRooms] = useState(0);

  let highoffers = "highoffers";
  let Luxury = "luxury";
  let ecofrienldy = "ecosystem";

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then(async (res) => {
        const fetcheddata = await res.data;
        setData(fetcheddata);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterdates = (dates) => {
    setCheckin(dayjs(dates[0]).format("DD-MM-YYYY"));
    setCheckout(dayjs(dates[1]).format("DD-MM-YYYY"));
  };
  const [typeEffect] = useTypewriter({
    words: ["Adventerous", "Exploring", "Travelling", "Developing"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
    cursor: true,
    cursorStyle: "|",
  });
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="styles.css" />
      <title>Aniketh and team - Eco-Voyage</title>

      <header className="header">
        <nav>
          <div className="nav__logo">
            <a href="#">Eco-Voyage</a>
          </div>
          <ul className="nav__links">
            <li className="link">
              <a href="/">Home</a>
            </li>
            <li className="link">
              <a href="#trending">Trending</a>
            </li>
            <li className="link">
              <a href="#destination">Destinations</a>
            </li>
            <li className="link">
              <a href="#guide">Guide</a>
            </li>
            <li className="link">
              <Link to={"/login"}>Login/Signup</Link>
            </li>
          </ul>
        </nav>
        <div className="section__container header__container" id="home">
          <div className="Texts_amazing">
            <h1>Explore the beauty of nature </h1>
            <h1 className="typeffect">{typeEffect}</h1>
            <Cursor />
          </div>
          <div className="header__form">
            <form action="/">
              <div className="input__group">
                <label htmlFor="destination">Where do you want to go?</label>
                {/* input of locations */}
                <input
                  list="locations"
                  placeholder="Location to Travel"
                  name="location"
                  id="location"
                  onChange={(e) => setLoc(e.target.value)}
                />

                <datalist id="locations">
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Banglore">Banglore</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                </datalist>
              </div>
              <RangePicker format="DD-MM-YYYY" onChange={filterdates} />
              <div className="input__group">
                <label htmlFor="guests">Guests</label>
                <input
                  type="number"
                  placeholder="Number of guests"
                  onChange={(e) => setGuests(e.target.value)}
                />
                <label htmlFor="guests">No:of Rooms</label>
                <input
                  type="number"
                  placeholder="Number of "
                  onChange={(e) => setRooms(e.target.value)}
                />
              </div>
              <Link
                className="btn"
                to={"/hotels"}
                state={{
                  place: loc,
                  checkin: checkin,
                  checkout: checkout,
                  guests: guests,
                  rooms: rooms,
                }}
              >
                CHECK AVAILABILITY
              </Link>
            </form>
          </div>
        </div>
      </header>
      {/* Trending offers edits */}
      <section className="section__container trending__container" id="trending">
        <div className="section__header">
          <h2 className="section__title">Trending Offers 2024</h2>
          <div className="section__nav">
            <span>
              <i className="ri-arrow-left-s-line" />
            </span>
            <span>
              <i className="ri-arrow-right-s-line" />
            </span>
          </div>
        </div>
        <div className="trending__grid">
          <div className="wrapper">
            <div className="card">
              <img src="https://i.pinimg.com/564x/dd/68/f6/dd68f6defd05cb405ee360784d3028a3.jpg" />
              <div className="info">
                <h1>Exclusive offers avails </h1>
                <p>
                  Check out our latest offers on hotels that meets your
                  expectations
                </p>
                <Link to={`/hotel/offers/${highoffers}`} className="button">
                  CheckOut Hotels
                </Link>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bNNs3eZsfF1etMkA3YplJ2gsASUyaSXvFg&s" />
              <div className="info">
                <h1>Luxury hotels on fire with hot deals and offers</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                </p>
                <Link to={`hotel/offers/${Luxury}`} className="button">
                  CheckOut Hotels
                </Link>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="card">
              <img src="https://miro.medium.com/v2/resize:fit:1200/1*HoGCs1Ca-eCGZDjS1Cx7FA.jpeg" />
              <div className="info">
                <h1>Exclusive offers avails </h1>
                <p>
                  Check out our latest offers on hotels that meets your
                  expectations
                </p>
                <Link to={`/hotel/offers/${ecofrienldy}`} className="button">
                  CheckOut Hotels
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="trending__grid">
          <div className="trending__card">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/c0/17/2e/caption.jpg?w=500&h=400&s=1"
              alt="trending"
            />
            <h1>Agra and Bharatpur - Bird watching</h1>
            <p>Bird Watch | Forest Exploration</p>
            <div className="trending__details">
              <div className="price">
                <p>From</p>
                <h3>7K - 9K</h3>
                <p>*Price varies</p>
              </div>
              <div className="trending__ratings">
                <div>
                  <span>
                    <i className="ri-star-fill" />
                  </span>
                  <span>
                    <i className="ri-star-fill" />
                  </span>
                  <span>
                    <i className="ri-star-fill" />
                  </span>
                  <span>
                    <i className="ri-star-half-fill" />
                  </span>
                  <span>
                    <i className="ri-star-line" />
                  </span>
                </div>
                <p>4.8 (10)</p>
              </div>
            </div>
            <h5>
              <span>
                <i className="ri-time-line" />
              </span>{" "}
              1 days
            </h5>
            <p>
              <span>
                <i className="ri-check-line" />
              </span>{" "}
              Free Cancellation
            </p>
          </div>
          {/* Card Seperation*** */}
          <div className="trending__card">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/e3/c5/caption.jpg?w=500&h=400&s=1"
              alt="trending"
            />
            <h1>Excursion to Matheran Hills</h1>
            <p>Forest on forehead</p>
            <div className="trending__details">
              <div className="price">
                <p>From</p>
                {/* prices are to be updated */}
                <h3>18K to 19K</h3>
                <p>*Price varies</p>
              </div>
              <div className="trending__ratings">
                <div>
                  <span>
                    <i className="ri-star-fill" />
                  </span>
                  <span>
                    <i className="ri-star-fill" />
                  </span>
                  <span>
                    <i className="ri-star-fill" />
                  </span>
                  <span>
                    <i className="ri-star-half-fill" />
                  </span>
                  <span>
                    <i className="ri-star-line" />
                  </span>
                </div>
                <p>4.2 (25)</p>
              </div>
            </div>
            <h5>
              <span>
                <i className="ri-time-line" />
              </span>{" "}
              4 days
            </h5>
            <p>
              <span>
                <i className="ri-check-line" />
              </span>{" "}
              Free Cancellation
            </p>
          </div>
          <div className="trending__card">
            <img
              src="https://www.tripiwiki.com/images/places/uploads/Srisailam-Dam20882.jpg"
              alt="trending"
            />
            <h1>Day trip to Srisailam</h1>
            <p>Eco Tours | Dam Tour</p>
            <div className="trending__details">
              <div className="price">
                <p>From</p>
                <h3>4K to 5K</h3>
                <p>*Price varies</p>
              </div>
              <div className="trending__ratings">
                <div>
                  <span>
                    <i className="ri-star-fill" />
                  </span>
                  <span>
                    <i className="ri-star-fill" />
                  </span>
                  <span>
                    <i className="ri-star-fill" />
                  </span>
                  <span>
                    <i className="ri-star-half-fill" />
                  </span>
                  <span>
                    <i className="ri-star-line" />
                  </span>
                </div>
                <p>4.5 (15)</p>
              </div>
            </div>
            <h5>
              <span>
                <i className="ri-time-line" />
              </span>{" "}
              1 day
            </h5>
            <p>
              <span>
                <i className="ri-check-line" />
              </span>{" "}
              Free Cancellation
            </p>
          </div>
        </div>
      </section>
      {/* Charan is supposed to modify this tour section */}
      <section className="tour">
        <div className="section__container tour__container">
          <h4 style={{color:"black"}}>Watch Our Video Tour</h4>
          <div className="video__container">
            <video controls loop>
              <source src="/pictures/hotelsdata/video.mp4"  type="video/mp4"/>
            </video>
          </div>
        </div>
      </section>
      {/* Tour guide Section - Will change the Lorem ipsum static  */}
      <section className="section__container guide__container" id="guide">
        <div className="section__header">
          <h2 className="section__title">Tour Guide</h2>
          <div className="section__nav">
            <span>
              <i className="ri-arrow-left-s-line" />
            </span>
            <span>
              <i className="ri-arrow-right-s-line" />
            </span>
          </div>
        </div>
        <div className="guide__grid">
          <div className="guide__card">
            <div className="guide__image">
              <img src="assets/guide-1.jpg" alt="guide" />
              <div className="guide__socials">
                <div>
                  <span>
                    <a href="#">
                      <i className="ri-linkedin-fill" />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="ri-instagram-line" />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="ri-facebook-fill" />
                    </a>
                  </span>
                </div>
                <button className="btn">Follow me</button>
              </div>
            </div>
            <div className="guide__content">
              <div className="guide__details">
                <h4>Elias Hossain</h4>
                <p>Forest Guide</p>
              </div>
              <p>
                With a deep passion for forests, our experts are committed to
                craft immersive experiences to connect with the wilderness.
              </p>
            </div>
          </div>
          <div className="guide__card">
            <div className="guide__image">
              <img src="assets/guide-2.jpg" alt="guide" />
              <div className="guide__socials">
                <div>
                  <span>
                    <a href="#">
                      <i className="ri-linkedin-fill" />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="ri-instagram-line" />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="ri-facebook-fill" />
                    </a>
                  </span>
                </div>
                <button className="btn">Follow me</button>
              </div>
            </div>
            <div className="guide__content">
              <div className="guide__details">
                <h4>Ahmed Hamdy</h4>
                <p>Ocean Guide</p>
              </div>
              <p>
                Join us as we embark on a journey of inspiring encounters in the
                ocean's surface where secrets become your unforgettable
                memories.
              </p>
            </div>
          </div>
          <div className="guide__card">
            <div className="guide__image">
              <img src="assets/guide-3.jpg" alt="guide" />
              <div className="guide__socials">
                <div>
                  <span>
                    <a href="#">
                      <i className="ri-linkedin-fill" />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="ri-instagram-line" />
                    </a>
                  </span>
                  <span>
                    <a href="#">
                      <i className="ri-facebook-fill" />
                    </a>
                  </span>
                </div>
                <button className="btn">Follow me</button>
              </div>
            </div>
            <div className="guide__content">
              <div className="guide__details">
                <h4>Esiam Samir</h4>
                <p>City Guide</p>
              </div>
              <p>
                With a passion for travel and a commitment to excellence, we
                curate memorable experiences that go beyond the ordinary.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section__container client__container" id="client">
        <div className="section__header">
          <h2 className="section__title">Clients Feedback</h2>
          <div className="section__nav">
            <span>
              <i className="ri-arrow-left-s-line" />
            </span>
            <span>
              <i className="ri-arrow-right-s-line" />
            </span>
          </div>
        </div>
        <div className="client__grid">
          <div className="client__card">
            <div className="client__card__header">
              <span>
                <i className="ri-double-quotes-r" />
              </span>
              <div className="ratings">
                <span>
                  <i className="ri-star-fill" />
                </span>
                <span>
                  <i className="ri-star-fill" />
                </span>
                <span>
                  <i className="ri-star-fill" />
                </span>
                <span>
                  <i className="ri-star-half-fill" />
                </span>
                <span>
                  <i className="ri-star-line" />
                </span>
              </div>
            </div>
            {/* need to uodate */}
            <p>
              I had the most incredible experience using this tour and travel
              website. From booking my flights and accommodations to discovering
              unique local activities, everything was seamless and
              well-organized. It made my trip stress-free and unforgettable. I
              can't wait to plan my next adventure with them!
            </p>
            <div className="client__card__footer">
              <img src="assets/client-1.jpg" alt="client" />
              <div className="client__details">
                <h4>Mike Henderson</h4>
                <p>Business Manager &amp; CEO</p>
              </div>
            </div>
          </div>
          <div className="client__card">
            <div className="client__card__header">
              <span>
                <i className="ri-double-quotes-r" />
              </span>
              <div className="ratings">
                <span>
                  <i className="ri-star-fill" />
                </span>
                <span>
                  <i className="ri-star-fill" />
                </span>
                <span>
                  <i className="ri-star-fill" />
                </span>
                <span>
                  <i className="ri-star-fill" />
                </span>
                <span>
                  <i className="ri-star-fill" />
                </span>
              </div>
            </div>
            <p>
              {/* need to update  */}
              As a frequent traveler, I've used various tour and travel
              websites, but this one stands out for its attention to detail and
              personalized recommendations. The itineraries they offer are
              thoughtfully curated, and the insider tips on their blog were a
              game-changer for my recent trip. Highly recommended! Thanks to
              them.
            </p>
            <div className="client__card__footer">
              <img src="assets/client-2.jpg" alt="client" />
              <div className="client__details">
                <h4>Paul Harrison</h4>
                <p>Director</p>
              </div>
            </div>
          </div>
          <div className="client__card">
            <div className="client__card__header">
              <span>
                <i className="ri-double-quotes-r" />
              </span>
              <div className="ratings">
                <span>
                  <i className="ri-star-fill" />
                </span>
                <span>
                  <i className="ri-star-fill" />
                </span>
                <span>
                  <i className="ri-star-fill" />
                </span>
                <span>
                  <i className="ri-star-fill" />
                </span>
                <span>
                  <i className="ri-star-line" />
                </span>
              </div>
            </div>
            <p>
              {/* need to update soon  */}
              I'm not an experienced traveler, but this website made me feel
              like a pro. The customer support team was incredibly helpful in
              guiding me through the planning process, and their city guides
              provided valuable insights. Thanks to them, I had a fantastic time
              exploring a new city with confidence. I can't thank them enough!
            </p>
            <div className="client__card__footer">
              <img src="assets/client-3.jpg" alt="client" />
              <div className="client__details">
                <h4>John Williams</h4>
                <p>Content Writer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <div className="section__container subscribe__container">
          <h4>Subscribe and be Updated</h4>
          <form action="/">
            <input type="text" placeholder="Please enter your email address" />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </section>
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
    </>
  );
};

export default Home;
