const user = require("../model/userdata");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const { username } = req.body;
    const encodedemail = jwt.sign(req.body.email, "encodedemailtoken");
    const encodedpassword = jwt.sign(req.body.password, "encodedpasstoken");
    const newuser = {
      username,
      email: encodedemail,
      password: encodedpassword,
    };
    const newuser1 = await user.create(newuser);
    res.send(newuser1);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
