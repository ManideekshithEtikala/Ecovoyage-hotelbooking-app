const express = require("express");
const Hotels = require("../model/hoteldata");
const router = express.Router();
router.get("/highoffers", async (req, res) => {
  const data = await Hotels.find();
  const filterddata = data.filter((e) => e.offers.highoffers.ho == true&&e.reserved!=true);
  res.send(filterddata);
});
router.get("/luxury", async (req, res) => {
  const data = await Hotels.find();
  const filterddata = data.filter((e) => e.offers.luxury.lu== true&&e.reserved!=true);
  res.send(filterddata);
});
router.get("/ecofriendly", async (req, res) => {
  const data = await Hotels.find();
  const filterddata = data.filter((e) => e.offers.ecosystem.ec == true&&e.reserved!=true);
  res.send(filterddata);
});
module.exports = router;
