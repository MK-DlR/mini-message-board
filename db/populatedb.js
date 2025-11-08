require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function main() {
  console.log("Setting up database...");

  try {
    // Drop table if exists (fresh start)
    await pool.query("DROP TABLE IF EXISTS messages");
    console.log("Dropped existing table");

    // create messages table
    await pool.query(`
      CREATE TABLE messages (
        id SERIAL PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        text VARCHAR(500) NOT NULL,
        username VARCHAR(100) NOT NULL,
        added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Created messages table");

    // seed with initial data
    await pool.query(`
      INSERT INTO messages (title, text, username) VALUES 
        ('Project Deployment', 'All done! Deploying an Express project for the first time.', 'MK-DlR'),
        ('Project Time', 'Working on a project that uses Express.', 'MK-DlR'),
        ('Database Migration', 'Successfully migrated from array to PostgreSQL!', 'MK-DlR')
    `);
    console.log("Seeded initial data");

    console.log("Database setup complete!");
  } catch (err) {
    console.error("Error setting up database:", err);
  } finally {
    await pool.end();
  }
}

main();
