import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li>
          <Link to={'/'} id="home-link" className="menu-item">Home</Link>
        </li>
        <li>
          <Link to={'about'} id="about-link" className="menu-item">About</Link>
        </li>
        <li>
          <Link to={'gallery'}  id="gallery-link" className="menu-item">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
