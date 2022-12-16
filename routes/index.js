var express = require('express');
var router = express.Router();
const messages = require("../messages.json")

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: "Mini Message Board", messages: messages})
});

module.exports = router;
