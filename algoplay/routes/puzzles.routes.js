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


function convertFormToModel(formData) {
  const colors = formData.colors.split(",");
  const items = formData.items.split(",");
  const functions = [formData.cmd1, formData.cmd2, formData.cmd3];
  return {...formData, colors, items, functions};
}

router.post('/create', async (req, res, next) => {
  try {
    const  converted = convertFormToModel(req.body);
    console.log(converted);
    await Puzzle.create(converted);
    res.redirect('/puzzles');
  } catch(error) {
    console.error(error);
    next(error);
    // res.redirect('/puzzles/create');
  }
})

module.exports = router;
