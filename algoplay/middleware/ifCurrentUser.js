module.exports = (req, res, next) => {
    // checks if the user is logged in when trying to access a specific page
    if (req.session.user.username !== req.params.username) {
      console.log('USERNAMES DO NOT MATCH, REDIRECTING')
      return res.redirect("/");
    }
    // req.user = req.session.user;
    next();
}