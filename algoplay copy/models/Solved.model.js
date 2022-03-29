const {Schema, model} = require("mongoose");

const solvedSchema = new Schema(
  {
    user: {type: Schema.Types.ObjectId, ref: "User"},
    puzzle: {type: Schema.Types.ObjectId, ref: "Puzzle"},
    steps: {type: Number},
    instructions: {type: Number},
    solution: {type: [[[Number]]]}
  },
  {timestamps: true}
);

const Solved = model("Solved", solvedSchema);
module.exports = Solved;
