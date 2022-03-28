const {Schema, model} = require("mongoose");

const solvedSchema = new Schema(
  {
    puzzle: {type: Schema.Types.ObjectId, ref: "Puzzle"},
    designer: {type: Schema.Types.ObjectId, ref: "User"},
    solution: {type: Number},
    steps: {type: Number}
  },
  {timestamps: true}
);

const Solved = model("Solved", solvedSchema);
module.exports = Solved;
