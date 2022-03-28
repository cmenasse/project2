const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const createdSchema = new Schema(
  {
    puzzle: { type: Schema.Types.ObjectId, ref: "Puzzle" },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Created = model("Created", createdSchema);

module.exports = Created;
