const router = require("express").Router();
const Puzzle = require('../models/Puzzle.model');

router.get('/', async (req, res, next) => {
  try {
      const puzzles = await Puzzle.find();
      res.render('puzzles/puzzles', {puzzles});
    } catch (error) {
      console.error(error);
    }
})

router.get('/create', (req, res, next) => {
  res.render('puzzles/create');
})

router.post('/create', async (req, res, next) => {
  try {
    await Puzzle.create(req.body);
    res.redirect('/puzzles');
  } catch {
    res.redirect('/puzzles/create');
  }
})

module.exports = router;
