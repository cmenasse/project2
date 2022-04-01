module.exports = (req, res, next) => {
    if (req.session.user) {
       res.locals.connectedUser = req.session.user
       res.locals.connectedUser.createdAt = new Date(Date.parse(res.locals.connectedUser.createdAt))
       console.log("exposeUser", res.locals.connectedUser.createdAt, typeof res.locals.connectedUser.createdAt)
    }else{
        res.locals.connectedUser = undefined
    }
    next()
  };
  