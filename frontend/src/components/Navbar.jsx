import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ LinkArray }) => {
  const location = useLocation();
  return (
    <nav>
      <ul className="flex items-center gap-2 justify-around bg-tertiary border-0 rounded-3xl p-1">
        {LinkArray.map((item) => (
          <li
            key={item.id}
            className={`font-custom px-4 py-2 text cursor-pointer font-medium text-primary border-0 rounded-3xl transition-colors duration-300 ease-in-out ${
              location.pathname === item.path ? 'active' : ''
            }`}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
