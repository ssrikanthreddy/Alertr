import DB from './DB';

const LiveInventory = () => {
  return (
    <>
      <div id="data" className="w-full">
        <DB userQuery={'SELECT * FROM products'} />
      </div>
    </>
  );
};

export default LiveInventory;
