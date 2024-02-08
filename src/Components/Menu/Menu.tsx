import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'about'}>About</Link>
        </li>
        <li>
          <Link to={'gallery'}>Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
