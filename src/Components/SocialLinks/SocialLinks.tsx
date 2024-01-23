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
      <a href="https://www.linkedin.com/in/scott-schroeder/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/snschroeder">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="mailto:snschroeder@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href={`${process.env.PUBLIC_URL}/Scott Schroeder Resume.pdf`}>
        <FontAwesomeIcon icon={faFile} />
      </a>
    </section>
  );
};

export default SocialLinks;
