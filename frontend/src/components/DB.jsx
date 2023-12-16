import React, { useState, useEffect } from 'react';

const DB = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the SQL query you want to execute
    const userQuery = 'SELECT * FROM products';

    // Make the API call
    fetch(`http://localhost:3001/pull/${encodeURIComponent(userQuery)}`)
      .then(response => response.json())
      .then(result => {
        // Update the state with the data
        setData(result.data);
      })
      .catch(err => {
        // Handle errors
        setError(err.message || 'An error occurred while fetching data.');
      });
  }, []); // Empty dependency array ensures the effect runs only once

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <h2>Inventory Content</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}, Price: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DB;
