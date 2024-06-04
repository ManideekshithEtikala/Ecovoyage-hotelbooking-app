const express = require("express");
const router = express.Router();
const Hotels = require("../model/hoteldata.js");
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const hotel = await Hotels.findById(id);
    if (hotel) {
      res.json(hotel);
    }
  } catch (err) {
    console.log(err);
  }
});
router.put("/booking/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hotels.findById(id);
    console.log(hotel);
    if (hotel) {
      await Hotels.updateOne({ _id: id }, req.body);
      res.send("booking information updated sucessfully");
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
