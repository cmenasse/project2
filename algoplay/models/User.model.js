const {Schema, model} = require("mongoose");

const userSchema = new Schema(
  {
    username: {type: String, unique: true},
    password: {type: String},
    isAdmin: {type: Boolean, default: false},
    firstname: {type: String},
    lastname: {type: String},
    age: {type: Number},
    solved: {type: Number},
    created: {type: Number},
  },
  {timestamps: true}
);

const User = model("User", userSchema);
module.exports = User;
