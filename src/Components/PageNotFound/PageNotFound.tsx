import React, { useEffect, useState } from 'react';
import { useRouteError } from 'react-router-dom';

import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';

import './PageNotFound.css';

interface PageDimensions {
  pageWidth: number;
  pageHeight: number;
}

const PageNotFound: React.FC = () => {
  const [pageDimensions, setPageDimensions] = useState({} as PageDimensions);
  const error: any = useRouteError();
  console.error(error);

  useEffect(() => {
    const pageWidth = innerWidth;
    const pageHeight = innerHeight;
    setPageDimensions({ pageWidth, pageHeight });
  }, []);

  return (
    <div className="page-not-found-container">
      <ParticleCanvas 
        windowX={pageDimensions.pageWidth}
        windowY={pageDimensions.pageHeight}
        zIndex={10}
      />
      <div>
        <h1 className="page-not-found-text">Uh-oh, looks like something went wrong.</h1>
        <p className="page-not-found-text">Please refresh your page and try again.</p>
      </div>
      <img className="page-not-found-window" src={`${process.env.PUBLIC_URL}/404.jpg`} />
    </div>
  );
};

export default PageNotFound;
