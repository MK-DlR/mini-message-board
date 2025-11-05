const express = require("express");
const router = express.Router();

const messages = [
  {
    title: "title",
    text: "text",
    user: "user",
    added: new Date().toLocaleDateString(),
  },
  {
    title: "title2",
    text: "text2",
    user: "user2",
    added: new Date().toLocaleDateString(),
  },
];

// home page
router.get("/", (req, res) => {
  res.render("index", { title: "Home", messages: messages });
});

// "/new" pointing to "form" template
router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// "/new" to handle form submission
router.post("/new", (req, res) => {
  console.log(req.body.title);
  console.log(req.body.text);
  console.log(req.body.user);

  // create a new message object
  const newMessage = {
    title: req.body.title,
    text: req.body.text,
    user: req.body.user,
    added: new Date().toLocaleDateString(),
  };

  // add to messages array
  messages.push(newMessage);

  res.redirect("/");
});

module.exports = router;
