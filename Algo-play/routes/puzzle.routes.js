const router = require("express").Router();


router.get(`/all-puzzles`, (req, res, next) => {
    res.render("puzzles/all-puzzles")
  });
 
  
module.exports = router;