// routes/index.js
const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

// create database connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// home page - get all messages from database
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM messages ORDER BY added DESC"
    );
    res.render("index", { title: "Home", messages: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

// handle /new pointing to form template
router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// handle opening full message details
router.get("/message/:id", async (req, res) => {
  const messageID = parseInt(req.params.id);
  try {
    const result = await pool.query("SELECT * FROM messages WHERE id = $1", [
      messageID,
    ]);
    if (result.rows.length === 0) {
      res.redirect("/404");
    } else {
      res.render("msg-detail", {
        title: "Message Details",
        message: result.rows[0],
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

// handle new message form submission
router.post("/new", async (req, res) => {
  const { title, text, user } = req.body;

  // Server-side validation
  if (!title || !text || !user) {
    return res.status(400).send("All fields are required");
  }

  if (text.length > 500 || user.length > 100) {
    return res.status(400).send("Input too long");
  }

  try {
    await pool.query(
      "INSERT INTO messages (text, username, title) VALUES ($1, $2, $3)",
      [text, user, title]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

module.exports = router;
