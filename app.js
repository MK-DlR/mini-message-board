// app.js

const express = require("express");
// use express as app
const app = express();
// import the router
const indexRouter = require("./routes/index");

// register view engine
app.set("view engine", "ejs");

// middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// use router for all routes
app.use("/", indexRouter);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

// listen for requests
app.listen(3000);
