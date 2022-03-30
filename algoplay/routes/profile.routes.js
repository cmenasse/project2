const router = require("express").Router();
const User = require("../models/User.model");


/* GET profile */
router.get(`/:username/profile`, async(req, res, next) => {
  const username = req.params.username 
  const detailUser = await User.findOne({username: username})
  console.log(detailUser)
  res.render("users/profile",{detailUser})
});

module.exports = router;