import React, { useState, useEffect } from 'react';
import ContentApiService from '../../APIs/ContentApi/ContentApi';
import defaultContent from '../../defaultContent/defaultContent';

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
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  return (
    <section className="about-container">
      <img src={aboutContent.imgLink} className="about-image" />
      <h3 className="about-header">{aboutContent.header}</h3>
      <p className="about-body">{aboutContent.body}</p>
      <section className="currently-list">
        <h4>Currrently reading: </h4>
        <p>{aboutContent.currentlyReading}</p>
        <h4>Currently playing: </h4>
        {
          aboutContent.currentlyPlaying 
            ? aboutContent.currentlyPlaying.map((val) => (
              <p>{val}</p>
            ))
            : <></>
        }
      </section>
    </section>
  );
};

export default About;
