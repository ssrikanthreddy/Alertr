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
      name: 'Expiry Radar',
      path: '/dashboard/expiry',
    },
  ];
  return (
    <div id="dashboard_page" className="bg-primary  p-2">
      <div className="flex flex-col p-8 items-center md:flex-row md:mt-0">
        <h1 className="font-custom text-dark text-3xl mr-8 font-bold">
          Dashboard
        </h1>
        <div className="mt-4 md:mt-0">
          <Navbar LinkArray={navs} />
        </div>
      </div>
      <div className="flex mx-8 min-h-screen  border-0 bg-[#a5a3a337]  border-secondary rounded-md mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
