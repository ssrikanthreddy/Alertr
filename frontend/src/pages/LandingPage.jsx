import '../index.css';
import Alertrlogo from '../assets/logo';
import pills from '../assets/pills.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        id="hero"
        className=" w-[90%] flex flex-col justify-around px-4 pt-4 md:flex-row md:h-screen"
      >
        <div id="title" className="flex flex-col">
          {/* Navbar */}
          <nav className="flex justify-between mb-10 py-6 w-2/3">
            <div className="flex items-center">
              <a href="/">
                <Alertrlogo />
              </a>
              <p className="font-custom ml-1 text-3xl text-tertiary">Alertr</p>
            </div>
            <ul className="flex items-center justify-around m-0 bg-tertiary border-0 rounded-3xl p-3">
              <li className="font-custom ml-6 mr-4 text cursor-pointer font-medium text-primary">
                <a href="/">Home</a>
              </li>
              <li className="font-custom mx-4 cursor-pointer font-medium text-primary">
                <Link to="/dashboard/LiveInventory">Dashboard</Link>
              </li>
              <li className="font-custom mx-4 cursor-pointer font-medium text-primary">
                <a href="https://github.com/ssrikanthreddy/Alertr">GitHub</a>
              </li>
            </ul>
          </nav>
          {/* Hero */}
          <div className="flex flex-col h-full justify-around pb-8">
            <div>
              <h1 className="text-8xl text-dark font-custom font-semibold mb-10">
                Stay Informed, <br />
                Stay <span className="text-tertiary">Ahead</span>
              </h1>
              <p className="text-secondary font-custom mb-10 w-3/4">
                Keeping your shelves up-to-date and patients safe with timely
                notifications on expiring medicines.
              </p>

              <div>
                <Link to="/dashboard/LiveInventory">
                  <button className="bg-dark py-3 px-5 border-0 rounded-3xl text-white font-custom">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-1">
                <button className="bg-transparent mr-1 py-3 px-5 border-2 rounded-3xl border-dark text-dark font-custom">
                  Healthcare
                </button>
                <button className="bg-transparent mr-1 py-3 px-5 border-2 rounded-3xl border-dark text-dark font-custom">
                  Inventory
                </button>
                <button className="bg-transparent mr-1 py-3 px-5 border-2 rounded-3xl border-dark text-dark font-custom">
                  Analysis
                </button>
              </div>
              <div>
                <button className="bg-transparent py-3 px-5 border-2 rounded-3xl border-dark text-dark font-custom">
                  Expiry
                </button>
                <button className="bg-transparent py-3 px-5 border-2 rounded-3xl border-dark text-dark font-custom">
                  Pharmaceutical
                </button>
              </div>
            </div>
          </div>
        </div>

        <img className="" src={pills} />
      </div>
    </div>
  );
};

export default LandingPage;
