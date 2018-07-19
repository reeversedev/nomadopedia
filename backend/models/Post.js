const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  slug: String,
  date: String,
  tags: {
    tag1: String,
    tag2: String,
    tag3: String
  },
  content: Object,
  author: String,
  type: String,
  photosUrl: Object,
  subcategory: String
});

module.exports = mongoose.model("Post", postSchema);
