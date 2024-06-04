const express = require("express");
const router = express.Router();
const Hotels = require("../model/hoteldata.js");
router.get("/:place/:checkedin/:checkedout", async (req, res) => {
  const location = req.params.place
  const place =location[0].toUpperCase() + location.slice(1)

  const {checkedin,checkedout} =req.params
  try {
    const hoteldata = await Hotels.find({
      place: place,
      reserved: false,
      $or: [
        { dates: { checkin: "null", checkout: "null" } },
        { dates: { checkin: { $lte: checkedin }, checkout: { $gte: checkedout } } }
      ]
    })
    res.send(hoteldata);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
