import React from 'react'

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

    <button onClick={handleButtonClick}>Trigger Action</button>

    </>
  )
}

export default Expiry