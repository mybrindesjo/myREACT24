import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ links = [] }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {links.map((link, index) => (
          <li key={index}>
            <Link className="nav-link" to={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;