import React, { useState, useEffect } from 'react';
import defaultContent from '../../../defaultContent/defaultContent';
import ContentApiService from '../../../APIs/ContentApi/ContentApi';
import { useAppState } from '../../App/App';

import config from '../../../config';

import './HomeAbout.css';

interface HomePageContent {
  homePageHeader: string;
  homePageCta: string;
  homePageDust: string;
  homePageDustJoke: string;
}

export default function HomeAbout() {
  const [homePageContent, setHomePageContent] = useState({} as HomePageContent);
  const [heroImg, setHeroImg] = useState(`${process.env.PUBLIC_URL}/sakura-hero.jpg`);
  const { state } = useAppState();

  const pickAndSetDefaultContent = () => {
    const defaultHomePageContent = defaultContent.defaultHomePageContent;
    setHomePageContent({
      homePageHeader: defaultHomePageContent.homePageHeader,
      homePageCta: defaultHomePageContent.homePageCta,
      homePageDust: defaultHomePageContent.homePageDust,
      homePageDustJoke: defaultHomePageContent.homePageDustJoke,
    });
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
  return (
    <div className="content-container-left">
    <h1 className="home-h1">{homePageContent.homePageHeader}</h1>
    <h2 className="home-h2">{homePageContent.homePageCta}</h2>
    <h3 className="home-h3">{homePageContent.homePageDust}</h3>
    <h3 className="home-h3">{homePageContent.homePageDustJoke}</h3>
  </div>
  );
}