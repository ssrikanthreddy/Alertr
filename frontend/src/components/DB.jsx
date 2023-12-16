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
          <tr className="border-b-2 ">
            <th className="py-4 px-4 text-2xl text-center">Name</th>
            <th className="py-4 px-4 text-2xl text-center">Quantity</th>
            <th className="py-4 px-4 text-2xl text-center">Price</th>
            <th className="py-4 px-4 text-2xl text-center">Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id} className="border-b border-gray-200  ">
                <td className="py-2 px-4 text-center ">{item.product_name}</td>
                <td className="py-2 px-4 text-center">{item.quantity}</td>
                <td className="py-2 px-4 text-center">{item.price}</td>
                <td className="py-2 px-4 text-center">{item.expiry_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DB;
