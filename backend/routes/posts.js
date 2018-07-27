const express = require("express");
const router = express.Router();
const slug = require("slug");
const moment = require("moment");

const Post = require("../models/Post");

router.post("/submit", (req, res, next) => {
  // General Mockup for how data will be saved here.
  let data = new Post({
    title: req.body.data.title,
    slug: slug(req.body.data.title.toLowerCase()),
    date: moment(Date.now()).format("DD/MM/YYYY"),
    tags: {
      tag1: req.body.data.title,
      tag2: req.body.data.title,
      tag3: req.body.data.title
    },
    content: req.body.data.title,
    author: req.body.data.title,
    type: req.body.data.title,
    photosUrl: req.body.data.title,
    subcategory: req.body.data.title
  });

  data.save((err, result) => {
    if (!err) {
      console.log("Post is saved");
    }
  });
});

module.exports = router;
