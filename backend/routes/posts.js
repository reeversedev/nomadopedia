const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.post("/submit", (req, res, next) => {
  // General Mockup for how data will be saved here.
  let data = new Post({
    title: req.body.data
  });
  data.save((err, result) => {
    console.log(result);
  });
});

module.exports = router;
