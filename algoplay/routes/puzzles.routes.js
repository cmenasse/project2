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

router.get("/play/:id", async (req, res, next) => {
  try {
    const puzzle = await Puzzle.findById(req.params.id);
    const myfunctions = puzzle.functions.filter(f => f !== null).map((f) => {
      return Array.from({length: f})
    })
    res.render("puzzles/play", {puzzle, myfunctions});

  } catch {
    next();
  }
});

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
    const converted = convertFormToModel(req.body);
    console.log(converted);
    await Puzzle.create(converted);
    res.redirect('/puzzles');
  } catch(error) {
    res.redirect('/puzzles/create');
  }
})

module.exports = router;
