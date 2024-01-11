import React, { useState, useEffect } from 'react';
import './About.css';
import ContentApiService from '../../APIs/ContentApi/ContentApi';

interface AboutObject {
  imgLink: string;
  header: string;
  body1: string;
  body2: string;
}

const About: React.FC = () => {
  const [aboutContent, setAboutContent] = useState({} as AboutObject);

  const defaultAbout = {
    imgLink: 'http://placekitten.com/g/300/400',
    header: 'About me',
    body1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    body2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };

  const fetchAboutData = async () => {
    try {
      await ContentApiService.getAboutContent()
        .then((res) => {
          if (res) {
            setAboutContent(res);
          }
        });
    } catch (error) {
      setAboutContent(defaultAbout);
    }
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  return (
        <section className="about-container">
            <img src={aboutContent.imgLink} className="about-image" />
            <h3 className="about-header">{aboutContent.header}</h3>
            <p>{aboutContent.body1}</p>
            <p>{aboutContent.body2}</p>
        </section>
  );
};

export default About;
