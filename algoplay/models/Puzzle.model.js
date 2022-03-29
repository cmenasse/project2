const {Schema, model} = require("mongoose");

const puzzleSchema = new Schema(
  {
    name: {type: String, unique: true, required: true, maxLength: 40},
    comment: {type: String, maxLength: 140},
    designer: {type: Schema.Types.ObjectId, ref: "User"},
    nbCols: {type: Number, min: 1, max: 14},
    map: {type: [Number]},
    items: {type: [Number]},
    startIdx: {type: Number},
    startDir: {type: String, enum: ["up", "right", "down", "left"], default: "right"},
    controls: {type: [String]},
    functions: {type: [Number]}
  },
  {timestamps: true}
);

const Puzzle = model("Puzzle", puzzleSchema);
module.exports = Puzzle;