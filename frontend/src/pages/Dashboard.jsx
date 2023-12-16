import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const navs = [
    {
      id: 1,
      name: 'Live Inventory',
      path: '/dashboard/LiveInventory',
    },

    {
      id: 2,
      name: 'AI Analysis',
      path: '/dashboard/prediction',
    },

    {
      id: 3,
      name: 'Settings',
      path: '/dashboard/settings',
    },
  ];
  return (
    <div id="dashboard_page" className="bg-primary h-screen p-2">
      <div className="flex p-8 items-center">
        <h1 className="font-custom text-3xl mr-8">Dashboard</h1>
        <Navbar LinkArray={navs} />
      </div>
      <div className="flex mx-8 h-[80%] border-2 border-dashed border-secondary rounded-md p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
