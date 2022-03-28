const router = require("express").Router();
const async = require("hbs/lib/async");
const { findById } = require("../models/User.model");
const User = require("../models/User.model");


/* GET profile */
router.get(`/profile`, (req, res, next) => {
  res.render("user/profile")
});

// router.get(`/profile/:id`, async (req, res, next) => {
//     const id = await User.findById(req.params.id)
//       res.render("user/profile", id);
//     });

module.exports = router;