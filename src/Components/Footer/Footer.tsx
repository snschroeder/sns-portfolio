import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCopyright } from '@fortawesome/free-regular-svg-icons'; 

import './Footer.css';

const Footer: React.FC = () => {
  return (
    <section className="footer-container">
        <section className="footer-copyright">
            <FontAwesomeIcon icon={faCopyright} />
            <p> Scott Schroeder</p>
        </section>
    </section>
  );
};

export default Footer;
