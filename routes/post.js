const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String },
  description: { type: String },
  image: String,
});

module.exports = mongoose.model("Post", postSchema);
