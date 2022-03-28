const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const puzzleSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    level: Number,
    content: Object,
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    image: String
  },
  {
    timestamps: true,
  }
);

const Puzzle = model("Puzzle", puzzleSchema);

module.exports = Puzzle;
