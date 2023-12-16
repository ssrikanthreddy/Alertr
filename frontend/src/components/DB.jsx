import { useState, useEffect } from 'react';

const DB = ({ userQuery }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the SQL query you want to execute

    // Make the API call
    fetch(`http://localhost:3001/pull/${encodeURIComponent(userQuery)}`)
      .then((response) => response.json())
      .then((result) => {
        // Update the state with the data
        setData(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        // Handle errors
        setError(err.message || 'An error occurred while fetching data.');
      });
  }, []); // Empty dependency array ensures the effect runs only once

  if (error) {
    console.log(error);
  }

  return (
    <div className="w-full">
      <table className="bg-tertiary table-auto border-0 w-full rounded-md text-primary">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Quantity</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id} className="border-b border-gray-200  ">
                <td className="py-2 px-4">{item.product_name}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">{item.price}</td>
                <td className="py-2 px-4">{item.expiry_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DB;
