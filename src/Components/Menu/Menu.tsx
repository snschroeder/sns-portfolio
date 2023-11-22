import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';

import './Menu.css';

const Menu: React.FC = () => {
  return (
    <section className="menu-container">
        <ParticleCanvas />
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
      <Outlet />
    </section>

  );
};

export default Menu;
