// app.js

const express = require("express");

// use express as app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

// home page
// with built in messages
app.get("/", (req, res) => {
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
  res.render("index", { title: "Home", messages: messages });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
