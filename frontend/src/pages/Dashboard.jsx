import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div id="dashboard_page" className="flex flex-col h-screen">
      <h1 className="font-custom">Dashboard</h1>
      <nav>
        <ul className="flex flex-row gap-10">
          <li>
            <Link to="/dashboard/LiveInventory">Live Inventory</Link>
          </li>
          <li>
            <Link to="/dashboard/Prediction">✨ Predictive AI </Link>
          </li>
          <li>
            <Link to="/dashboard/Settings"> Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
