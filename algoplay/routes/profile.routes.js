const router = require("express").Router();
const ifCurrentUser = require("../middleware/ifCurrentUser");
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");


/* GET profile */
router.get(`/:username/profile`, isLoggedIn ,ifCurrentUser ,async(req, res, next) => {
  const username = req.params.username 
  const detailUser = await User.findOne({username: username})
  const connectedUser = req.session.user
  res.render("users/profile",{detailUser, connectedUser})
});

module.exports = router;