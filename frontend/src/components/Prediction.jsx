const Prediction = () => {
  const trendingMedicines = [
    { id: 1, name: 'Medicine A', trendScore: 80, historicalDemand: 'High' },
    { id: 2, name: 'Medicine B', trendScore: 70, historicalDemand: 'Medium' },
    { id: 3, name: 'Medicine C', trendScore: 60, historicalDemand: 'Low' },
    { id: 4, name: 'Medicine D', trendScore: 50, historicalDemand: 'High' },
    { id: 5, name: 'Medicine E', trendScore: 40, historicalDemand: 'Medium' },
    { id: 6, name: 'Medicine F', trendScore: 20, historicalDemand: 'Low' },
  ];

  return (
    <div className=" bg-tertiary border-0 rounded-md w-full p-4">
      <h2 className="text-4xl text-primary font-semibold mb-8">
        Pharmaceutical Trend Analysis
      </h2>

      <div className="flex justify-between filter-options mb-8">
        <h3 className="text-xl font-semibold mb-4 text-primary">
          Trending Medicines
        </h3>
        <div className="flex">
          <div>
            <label className="mr-2 text-primary">Filter by</label>
            <select className="border p-1">
              <option className="text-primary">All</option>
            </select>
          </div>
          <div>
            <label className="ml-4 text-primary mr-1">Time Range</label>
            <input type="date" className="border-0 rounded-md p-1" />
          </div>
        </div>

        {/* Add more filter options based on your needs */}
      </div>

      <div className="trending-medicines">
        {trendingMedicines.length === 0 ? (
          <p className="  text-primary">No data available</p>
        ) : (
          <table className="table-auto w-full border">
            <thead>
              <tr>
                <th className="border p-2 text-primary">Medicine Name</th>
                <th className="border p-2 text-primary">Trend Score</th>
                <th className="border p-2 text-primary">Historical Demand</th>
                <th className="border p-2 text-primary">Action</th>
              </tr>
            </thead>
            <tbody>
              {trendingMedicines.map((medicine) => (
                <tr key={medicine.id}>
                  <td className="border p-2 text-primary">{medicine.name}</td>
                  <td className="border p-2 text-primary">
                    {medicine.trendScore}
                  </td>
                  <td className="border p-2 text-primary">
                    {medicine.historicalDemand}
                  </td>
                  <td className="border p-2 text-primary">
                    <button
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
                      onClick={() => alert(`Order ${medicine.name}`)}
                    >
                      Order Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Prediction;
