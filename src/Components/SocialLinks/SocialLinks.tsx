import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import './SocialLinks.css';

const SocialLinks: React.FC = () => {
  return (
        <section className="social-link-container">
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faFile} />
        </section>
  );
};

export default SocialLinks;
