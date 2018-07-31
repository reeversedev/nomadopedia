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
  console.log(req.body.data);

  let data = new Post({
    title: req.body.data.title,
    slug: slug(req.body.data.title.toLowerCase()),
    date: moment(Date.now()).format("DD/MM/YYYY"),
    tags: req.body.data.tags,
    content: req.body.data.title,
    author: req.body.data.author,
    type: req.body.data.type,
    photosUrl: req.body.data.url,
    subcategory: req.body.data.subtitle
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
