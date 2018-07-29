const express = require("express");
const router = express.Router();
const slug = require("slug");
const moment = require("moment");

const Post = require("../models/Post");

router.get("/getAllPosts", (req, res, next) => {
  Post.find((err, post) => {
    res.json(post);
  });
});

router.get("/:slug", (req, res, next) => {
  Post.find({ slug: req.params.slug }, (err, post) => {
    res.json(post);
  });
});

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
      res.json({
        type: "success",
        text: "Your post has been saved successfully"
      });
    } else {
      console.log(err);
      res.json({
        type: "error",
        text: "Something went wrong. Please contact the developer."
      });
    }
  });
});

module.exports = router;
