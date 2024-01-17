import React, { useState, useEffect } from 'react';
import './About.css';
import ContentApiService from '../../APIs/ContentApi/ContentApi';

interface AboutObject {
  imgLink: string;
  header: string;
  body: string;
  currentlyReading: string;
  currentlyPlaying: Array<string>;
}

const About: React.FC = () => {
  const [aboutContent, setAboutContent] = useState({} as AboutObject);

  const defaultAbout = {
    imgLink: 'http://placekitten.com/g/300/400',
    header: 'About me',
    body: `I have been working professionally as a full stack developer since 2019, with a focus on React, TypeScript, Node.js, Express.js, and both PostgreSQL and MySQL. 

    Most recently at PS Audio, I had many opportunities unique to a small company. I was often responsible for owning the entirety of projects I worked rather than just a portion of it. It was up to me to meet with stakeholders, define the requirements for the project, and determine the right tech stack and tools for the job. 
    
    Plus, I got to write so much code.
    
    The projects I worked fulfilled several important roles, ranging from driving sales to improving product reliability and connecting users and our engineering team to diagnostics and product data. 
    
    PS Audio also gave me the chance to expand my knowledge base rapidly. Initially, this meant learning WooCommerce and PHP, which I used to create a subscription app for PS Audio’s recording studio Octave Records. Later, we moved the site to Shopify, giving me the chance to pick up both Shopify and Liquid.
    
    Prior to working at PS Audio, I attended Thinkful’s full time coding boot camp, working closely with peers and mentors to to learn modern best practices for developing with React, Node, and JavaScript.
    
    In my free time, you’ll likely find me learning Godot, hiking with my dog, gaming, or reading.`,
    currentlyReading: 'The Dispossessed by Ursula K Le Guin',
    currentlyPlaying: ['Path of Exile', 'Bloodstained: Ritual of the Night'],
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
            <p>{aboutContent.body}</p>
            <h4>Currrently playing: </h4>
            <p>{aboutContent.currentlyReading}</p>
            <h4>Currently reading: </h4>
            {aboutContent.currentlyPlaying.map((val) => (
              <p>{val}</p>
            ))}

        </section>
  );
};

export default About;
