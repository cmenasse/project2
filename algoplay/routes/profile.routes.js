const router = require("express").Router();
const ifCurrentUser = require("../middleware/ifCurrentUser");
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");


/* GET profile */
router.get(`/:username/profile`, isLoggedIn ,ifCurrentUser ,async(req, res, next) => {
  const username = req.params.username 
  console.log("we got user page", username)
  const detailUser = await User.findOne({username: username})
  const connectedUser = req.session.user
  res.render("users/profile",{detailUser, connectedUser})
});

router.get(`/:username/profile/edit`, isLoggedIn ,ifCurrentUser ,async(req, res, next) => {

  res.render("users/edit")
});

router.post(`/:username/profile/edit`, isLoggedIn ,ifCurrentUser ,async(req, res, next) => {
  const { username, firstname, lastname, age } = req.body
  const profileToEdit = {
    username,
    firstname,
    lastname,
    age,
  }
  try {
    const user = await User.findOneAndUpdate({ username: req.params.username }, profileToEdit, { new: true })
    // user has updated, so we need to update the session
    console.log('USER UPDATED', user)
    req.session.user = user

    res.redirect(`/users/${username}/profile/`)
  } catch (error) {
    next(error)
  }
});

router.post('/delete', isLoggedIn, async  (req, res, next) => {
  
  try {
    console.log("await")
    await User.findByIdAndDelete(req.session.user._id)
    req.session.destroy()
    console.log('hollaaa')
    res.redirect("/")
  } catch (error) {
    next(error)
  }
})

module.exports = router;