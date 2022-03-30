module.exports = (req, res, next) => {
    if (req.session.user) {
       res.locals.connectedUser = req.session.user
    }else{
        res.locals.connectedUser = undefined
    }
    next()
  };
  