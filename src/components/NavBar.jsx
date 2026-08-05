import React from 'react';
import { Link } from 'react-router-dom';

// Navigation Bar component using React Router Link elements
function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Krish's Portfolio</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
