const {Schema, model} = require("mongoose");

const createdSchema = new Schema(
  {
    puzzle: {type: Schema.Types.ObjectId, ref: "Puzzle"},
    designer: {type: Schema.Types.ObjectId, ref: "User"},
    solution: {type: Number},
    steps: {type: Number}
  },
  {timestamps: true}
);

const Created = model("Created", createdSchema);
module.exports = Created;
