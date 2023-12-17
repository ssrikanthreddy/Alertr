import DB from './DB';

const Expiry = () => {
  const handleButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/triggerAction');
      const data = await response.json();

      console.log(data); // Log the response from the server
    } catch (error) {
      console.error('Error triggering action:', error);
    }
  };

  return (
    <div className="w-full p-6 bg-tertiary border-0 rounded-md">
      <div className="flex justify-between mb-4">
        <h2 className="text-3xl text-primary">Expiring within 30 days</h2>
        <button
          className="bg-dark py-3 px-5 border-0 hover:bg-yellow-600 rounded-3xl text-white font-custom"
          onClick={handleButtonClick}
        >
          Ping Phone
        </button>
      </div>

      <div className="border-t-2 border-dark">
        <DB
          userQuery={
            "Select * from products where expiry_date < '2024-03-18' ;"
          }
        />
      </div>
    </div>
  );
};

export default Expiry;
