import React, { useState, useEffect } from 'react';

import Divider from '../Divider/Divider';
import ContentApiService from '../../APIs/ContentApi/ContentApi';
import defaultContent from '../../defaultContent/defaultContent';

import config from '../../config';

import './About.css';

interface AboutObject {
  imgLink: string;
  header: string;
  body: string;
  currentlyReading: string;
  currentlyPlaying: Array<string>;
}

const About: React.FC = () => {
  const [aboutContent, setAboutContent] = useState({} as AboutObject);

  const fetchAboutData = async () => {
    if (!config.API_ENDPOINT) {
      setAboutContent(defaultContent.defaultAbout);
    } else {
      try {
        await ContentApiService.getAboutContent()
          .then((res) => {
            if (res) {
              setAboutContent(res);
            }
          });
      } catch (error) {
        setAboutContent(defaultContent.defaultAbout);
      }
    }
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  return (
    <div className="about-container">
      <div className="about-background"></div>
      <Divider
        angle='skew(-20deg)'
        width='100px'
        height='100vh'
        top='0%'
        left='45%'
        flexDirection='column'
        position='absolute'
        accentAngle='skew(20deg)'
      />
      <h1 className="about-h1">What sets me apart</h1>
      <div className="about-item">
        <h2 className="about-header">Unparalleled Communication</h2>
        <h3 className="about-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut ipsum ac odio scelerisque sagittis at a nisi.
        </h3>
      </div>
      <div className="about-item">
        <h2 className="about-header">Unparalleled Communication</h2>
        <h3 className="about-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut ipsum ac odio scelerisque sagittis at a nisi.
        </h3>
      </div>
      <div className="about-item">
        <h2 className="about-header">Unparalleled Communication</h2>
        <h3 className="about-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut ipsum ac odio scelerisque sagittis at a nisi.
        </h3>
      </div>
    </div>
  );
};

export default About;
