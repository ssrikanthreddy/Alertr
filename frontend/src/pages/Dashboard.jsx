import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const navs = [

    {
      id:1,
      name:"Live Inventory",
      path:"/dashboard/LiveInventory",
    },

    {
      id:2,
      name:"AI Analysis",
      path:"/dashboard/prediction",
    },

    {
      id:3,
      name:"Settings",
      path:"/dashboard/settings",
    }
  ]
  return (
    
    <div id="dashboard_page" className="flex flex-col h-screen">
      <Navbar LinkArray={navs} />
      <h1 className="font-custom">Dashboard</h1>
     
      <Outlet />
    </div>
  );
};

export default Dashboard;
