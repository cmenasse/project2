const {Schema, model} = require("mongoose");

const puzzleSchema = new Schema(
  {
    name: {type: String, unique: true},
    comment: {type: String},
    designer: {type: Schema.Types.ObjectId, ref: "User"},
    nbCols: {type: Number, min: 1, max: 14},
    map: {type: [Number]},
    items: {type: [Number]},
    startIdx: {type: Number},
    startDir: {type: String}
  },
  {timestamps: true}
);

const Puzzle = model("Puzzle", puzzleSchema);
module.exports = Puzzle;
