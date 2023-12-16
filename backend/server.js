const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001; // Change this to your desired port

// SQLite database configuration
const dbPath = 'inventory.db'; // Replace with your actual SQLite database file path
const db = new sqlite3.Database(dbPath);

// Example route to run an SQLite query
app.get('/api/queryExample', (req, res) => {
  // Example SQLite query
  const query = 'SELECT * FROM your_table_name LIMIT 10';

  // Execute the query
  db.all(query, (error, results) => {
    if (error) {
      console.error('Error executing SQLite query:', error);
      res.status(500).json({ error: 'Error executing SQLite query' });
      return;
    }

    // Send the query results as JSON
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
