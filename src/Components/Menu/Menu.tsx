import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

interface Props {
  requestResize: () => void;
}

const Menu: React.FC<Props> = ({ requestResize }: Props) => {
  const handleLinkClick = () => {
    requestResize();
  }

  return (
    <section className="menu-container">
        <nav className="menu">
          <ul className="menu-list">
              <li onClick={handleLinkClick}>
                <Link to={'/'}>Home</Link>
              </li>
              <li onClick={handleLinkClick}>
                <Link to={'about'}>About</Link>
              </li>
              <li onClick={handleLinkClick}>
                <Link to={'gallery'}>Gallery</Link>
              </li>
          </ul>
      </nav>
    </section>

  );
};

export default Menu;
