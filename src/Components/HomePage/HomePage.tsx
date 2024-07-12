import React, { useState, useEffect } from 'react';

import SocialLinks from '../SocialLinks/SocialLinks';
import defaultContent from '../../defaultContent/defaultContent';
import ContentApiService from '../../APIs/ContentApi/ContentApi';

import { useAppState } from '../App/App';

import { throttle } from '../../Utilities/throttle';

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
  const [heroImg, setHeroImg] = useState(`${process.env.PUBLIC_URL}/sakura-hero.jpg`);
  const { state } = useAppState();

  const pickAndSetDefaultContent = () => {
    const defaultHomePageContent = defaultContent.defaultHomePageContent;
    // if (!val) {
    setHomePageContent({
      homePageHeader: defaultHomePageContent.homePageHeader,
      homePageCta: defaultHomePageContent.homePageCta,
      homePageDust: defaultHomePageContent.homePageDust,
      homePageDustJoke: defaultHomePageContent.homePageDustJoke,
    });
    // } else {
    //   setHomePageContent({
    //     homePageHeader: defaultHomePageContent.homePageHeader2,
    //     homePageCta: defaultHomePageContent.homePageCta2,
    //     homePageDust: defaultHomePageContent.homePageDust2,
    //     homePageDustJoke: defaultHomePageContent.homePageDustJoke2,
    //   });
    // }
  };

  const fetchHomePageContent = async () => {
    if (!config.API_ENDPOINT) {
      pickAndSetDefaultContent();
    } else {
      try {
        await ContentApiService.getHomePageContent()
          .then((res) => {
            setHomePageContent(res);
          });
      } catch (error) {
        pickAndSetDefaultContent();
      }
    }
  };

  useEffect(() => {
    fetchHomePageContent();
  }, []);

  useEffect(() => {
    if (state.pageWidth < 1200) {
      setHeroImg(`${process.env.PUBLIC_URL}/sakura-hero-mobile.jpg`);
    } else if (state.pageWidth > 1200) {
      setHeroImg(`${process.env.PUBLIC_URL}/sakura-hero.jpg`);
    }
  }, [state.pageWidth, state.pageHeight]);

  return (
    <>
      <img src={heroImg} className="hero-img"/>
      <div className="home-container" >
        <h1 className="home-h1">{homePageContent.homePageHeader}</h1>
        <h2 className="home-h2">{homePageContent.homePageCta}</h2>
        <h2 className="home-h2-dust">{homePageContent.homePageDust}</h2>
        <h3 className="home-h3">{homePageContent.homePageDustJoke}</h3>
        <SocialLinks isAnimated={false} />
      </div>
    </>
  );
};

export default HomePage;
