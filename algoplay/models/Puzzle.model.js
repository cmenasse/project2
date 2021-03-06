const {Schema, model} = require("mongoose");

const puzzleSchema = new Schema(
  {
    title: {type: String, unique: true, required: true, maxLength: 40},
    description: {type: String, maxLength: 140},
    author: {type: Schema.Types.ObjectId, ref: "User"},
    nbCols: {type: Number, min: 1, max: 14},
    colors: {type: [String]},
    items: {type: [String]},
    startRow: {type: Number},
    startCol: {type: Number},
    startDir: {type: Number, enum: [0 , 1, 2, 3], default: 0},
    controls: {type: [String]},
    functions: {type: [Number]}
  },
  {timestamps: true}
);

const Puzzle = model("Puzzle", puzzleSchema);
module.exports = Puzzle;