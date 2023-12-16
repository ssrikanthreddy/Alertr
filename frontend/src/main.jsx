import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import LiveInventory from './components/LiveInventory';
import Prediction from './components/Prediction';

import Expiry from './components/Expiry';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { path: '/dashboard/LiveInventory/', element: <LiveInventory /> },
      { path: '/dashboard/Prediction', element: <Prediction /> },

      { path: '/dashboard/Expiry', element: <Expiry /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
