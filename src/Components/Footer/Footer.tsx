import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCopyright } from '@fortawesome/free-regular-svg-icons'; 

import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
        <div className="footer-copyright">
          <FontAwesomeIcon icon={faCopyright} />
          <p>&nbsp;Scott Schroeder</p>
        </div>
    </div>
  );
};

export default Footer;
