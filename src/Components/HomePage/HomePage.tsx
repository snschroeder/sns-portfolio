import React, { useState, useEffect } from 'react';

import './HomePage.css';
import ContentApiService from '../../APIs/ContentApi/ContentApi';

interface HomePageContent {
  homePageHeader: string;
  homePageCta: string;
  homePageDust: string;
  homePageDustJoke: string;
}

const HomePage: React.FC = () => {
  const [homePageContent, setHomePageContent] = useState({} as HomePageContent);

  const defaultHomePageContent = {
    homePageHeader: 'Hi there! My name is Scott.',
    homePageCta: 'Welcome to my portfolio. Please feel free to look around if you would like to see what I\'ve been working on.',
    homePageDust: 'Oh, and please don\'t mind the dust, I can\'t figure out how to get rid of it.',
    homePageDustJoke: 'Don\'t worry, though! Our tests have confirmed it is 73% asbestos free!',
  };

  const fetchHomePageContent = async () => {
    try {
      await ContentApiService.getHomePageContent()
        .then((res) => {
          setHomePageContent(res);
        });
    } catch (error) {
      setHomePageContent(defaultHomePageContent);
    }
  };

  useEffect(() => {
    fetchHomePageContent();
  }, []);

  return (
        <section className="home-container">
            <h1 className="home-h1">{homePageContent.homePageHeader}</h1>
            <h2 className="home-h2">{homePageContent.homePageCta}</h2>
            <h2 className="home-h2-dust">{homePageContent.homePageDust}</h2>
            <h3 className="home-h3">{homePageContent.homePageDustJoke}</h3>
        </section>
  );
};

export default HomePage;
