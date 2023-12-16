import '../index.css';
import Alertrlogo from '../assets/logo';
import pills from '../assets/pills.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
      id="hero"
      className="flex flex-col justify-around px-4 pt-4 md:flex-row md:h-screen"
    >
      <div id="title" className="flex flex-col">
        {/* Navbar */}
        <nav className="flex justify-between mb-24 py-6 w-2/3">
          <div className="flex items-center">
            <a href="/">
              <Alertrlogo />
            </a>
            <p className="font-custom ml-1 text-3xl text-secondary">Alertr</p>
          </div>
          <ul className="flex items-center justify-around m-0">
            <li className="font-custom ml-6 mr-4 text cursor-pointer font-semibold">
              <a href="/">Home</a>
            </li>
            <li className="font-custom mx-4 cursor-pointer font-semibold">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="font-custom ml-4 cursor-pointer font-semibold">
              <a href="https://github.com/ssrikanthreddy/Alertr">Github</a>
            </li>
          </ul>
        </nav>
        {/* Hero */}
        <div className="flex flex-col flex-start">
          <h1 className="text-8xl text-dark font-custom font-semibold mb-10">
            Stay Informed, <br />
            Stay <span className="text-secondary">Ahead</span>
          </h1>
          <div className="text-tertiary font-custom mb-10 w-3/4">
            Keeping your shelves up-to-date and patients safe with timely
            notifications on expiring medicines.
          </div>
          <div>
            <button className="bg-dark py-4 px-5 border-0 rounded-3xl text-white font-custom">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <img className="" src={pills} />
    </div>
  );
};

export default LandingPage;
