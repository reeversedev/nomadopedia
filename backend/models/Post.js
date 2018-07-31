const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  slug: {
    type: String,
    unique: true
  },
  date: String,
  tags: {
    type: Array
  },
  content: {
    type: Array
  },
  author: String,
  type: String,
  photosUrl: String,
  subtitle: String
});

module.exports = mongoose.model("Post", postSchema);
