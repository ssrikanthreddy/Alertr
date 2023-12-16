const Dashboard = () => {

    
  return (
    <div id="dashboard_page" className="flex flex-col h-screen">
      <div>Dashboard</div>
      <nav>
        <ul className="flex flex-row gap-10">
            <li>Live Inventory</li>
            <li>✨ Predictive AI </li>
            <li> Settings</li>
        </ul>
      </nav>

    <div className='inventory_page'>
        Inventory Content
    </div>

    <div className='ai_page'>
        AI Content
    </div>

    <div className='settings_page'>
        Settings Content
    </div>
    </div>
  );
};

export default Dashboard;
