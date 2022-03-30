const {Schema, model} = require("mongoose");

const userSchema = new Schema(
  {
    username: {type: String, unique: true},
    password: {type: String},
    isAdmin: {type: Boolean, default: false},
  },
  {timestamps: true}
);

const User = model("User", userSchema);
module.exports = User;
