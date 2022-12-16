var express = require("express");
var router = express.Router();
// const { _, messages} = require("./index")
const messages = require("../messages.json")

/* GET users listing. */
router.get("/", function (req, res) {
  res.render("form", { title: "Mini Message Board", messages: messages });
});

router.post("/", function (req, res) {
  const newMessage = req.body.textMessage;
  const newSender = req.body.sender;
  messages.push({ text: newMessage, user: newSender, added: new Date().toISOString().replace("T"," ").split('.')[0] });
  res.redirect('/')
});

module.exports = router;
