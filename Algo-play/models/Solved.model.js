const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const solvedSchema = new Schema(
  {
    puzzle: { type: Schema.Types.ObjectId, ref: "Puzzle" },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    numberOfInstruction : Number 
  },
  {
    timestamps: true,
  }
);

const Solved = model("Solved", solvedSchema);

module.exports = Solved;
