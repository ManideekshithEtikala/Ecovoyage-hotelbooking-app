const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const user = require("../model/userdata.js");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const encemail = jwt.sign(email, "encodedemailtoken");
    const enpass = jwt.sign(password, "encodedpasstoken");
    const userdata = await user.findOne({ email: encemail });
    if (userdata) {
      const username = userdata.username;
      if (userdata.password === enpass) {
        res.send("logined sucessfully");
      } else {
        res.send("check password and try agiain");
      }
    } else {
      res.send("username or email is not correct");
    }
  } catch (err) {
    console.log("error in the posting of login information to the database");
    console.log(err);
  }
});
module.exports = router;
