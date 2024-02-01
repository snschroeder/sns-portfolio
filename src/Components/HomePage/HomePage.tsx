import React, { useState, useEffect } from 'react';

import SocialLinks from '../SocialLinks/SocialLinks';
import defaultContent from '../../defaultContent/defaultContent';
import ContentApiService from '../../APIs/ContentApi/ContentApi';
import { useSetSizeCheck } from '../App/App';

import config from '../../config';

import './HomePage.css';


interface HomePageContent {
  homePageHeader: string;
  homePageCta: string;
  homePageDust: string;
  homePageDustJoke: string;
}

const HomePage: React.FC = () => {
  const [homePageContent, setHomePageContent] = useState({} as HomePageContent);
  const { setSizeCheck } = useSetSizeCheck();

  const fetchHomePageContent = async () => {
    if (!config.API_ENDPOINT) {
      setHomePageContent(defaultContent.defaultHomePageContent);
    } else {
      try {
        await ContentApiService.getHomePageContent()
          .then((res) => {
            setHomePageContent(res);
          });
      } catch (error) {
        setHomePageContent(defaultContent.defaultHomePageContent);
      }
    }
  };

  useEffect(() => {
    fetchHomePageContent()
      .then(() => {
        setSizeCheck(5);
      });
  }, []);

  return (
    <section className="home-container" >
      <h1 className="home-h1">{homePageContent.homePageHeader}</h1>
      <h2 className="home-h2">{homePageContent.homePageCta}</h2>
      <h2 className="home-h2-dust">{homePageContent.homePageDust}</h2>
      <h3 className="home-h3">{homePageContent.homePageDustJoke}</h3>
      <SocialLinks 
        isAnimated={true}
      />
  </section>
  );
};

export default HomePage;
