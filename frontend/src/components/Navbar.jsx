import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({LinkArray}) => {
  return (
    <nav>
      <ul className="flex flex-row gap-10">
        {LinkArray.map((item) => (
          <li key={item.id}>
            <Link to={item.path}> {item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
