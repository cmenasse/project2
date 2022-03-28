const router = require("express").Router();
const User = require("../models/User.model");


/* GET profile */
router.get(`/profile`, (req, res, next) => {
  res.render("users/profile")
});

// router.get(`/profile/:id`, async (req, res, next) => {
//     const id = await User.findById(req.params.id)
//       res.render("user/profile", id);
//     });

module.exports = router;