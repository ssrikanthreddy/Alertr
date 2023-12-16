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
    <>
      <button
        className="bg-dark py-3 px-5 border-0 rounded-3xl text-white font-custom"
        onClick={handleButtonClick}
      >
        Ping Me
      </button>
    </>
  );
};

export default Expiry;
