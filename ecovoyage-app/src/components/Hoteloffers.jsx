import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
const Hoteloffers = () => {
  const [data, setData] = useState([]);
  const { offertype } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/hotel/offers/${offertype}`)
      .then(async (res) => {
        const fetcheddata = await res.data;
        setData(fetcheddata);
      }).catch((err)=>console.log(err));
  },[]);
  return (
    <> 
      <div>Hle world is a good </div>
    </>
  );
};

export default Hoteloffers;
