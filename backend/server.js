const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001;

// Enable CORS
app.use(cors());

app.get('/api/triggerAction', (req, res) => {
  // Perform some action on the server

  fetch('https://ntfy.sh/expiry', {
    method: 'POST',
    body: 'Paracetamol Expires this week!'
})


  console.log('Action triggered on the server');
  res.send('Action triggered successfully');
});

// Connect to the SQLite database
const db = new sqlite3.Database('inventory.db');

// Endpoint for the /pull route
app.get('/pull/:query', (req, res) => {
  const userQuery = req.params.query;

  db.all(userQuery, (err, rows) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ tableName: 'products', data: rows });
    }
  });
});

// Start the Express server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Close the database connection when the application is shutting down
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Express server is shutting down.');
    db.close((err) => {
      if (err) {
        return console.error('Error closing database connection:', err.message);
      }
      console.log('Database connection closed.');
      process.exit(0);
    });
  });
});
