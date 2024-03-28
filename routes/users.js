const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/visulHub")
  .then(console.log("database is connected succefully!"));

// Define user schema
const userSchema = new mongoose.Schema({
  username: { type: String },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  profileImages: String,
  contact: Number,
  boards: {
    type: Array,
    default: [],
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

// Apply Passport-Local Mongoose plugin
userSchema.plugin(plm);

// Export user model
module.exports = mongoose.model("User", userSchema);
