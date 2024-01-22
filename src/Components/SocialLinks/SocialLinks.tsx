import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import './SocialLinks.css';

interface Props {
  isAnimated: boolean;
}

const SocialLinks: React.FC<Props> = ({ isAnimated }: Props) => {
  const containerClass = isAnimated 
    ? 'social-link-container animated'
    : 'social-link-container'

  return (
        <section className={containerClass}>
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faFile} />
        </section>
  );
};

export default SocialLinks;
