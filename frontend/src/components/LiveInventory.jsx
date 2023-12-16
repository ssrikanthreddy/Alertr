import DB from './DB';

const LiveInventory = () => {
  
  return (
    <>
    
      <div id="data">
        <DB userQuery={'SELECT * FROM products'} />
      </div>
    </>
  );
};

export default LiveInventory;
