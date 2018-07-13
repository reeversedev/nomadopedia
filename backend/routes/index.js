var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/nomadopedia", function(req, res, next) {
  res.json({
    data: "Hello World"
  });
});

module.exports = router;
