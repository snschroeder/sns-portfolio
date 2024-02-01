import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import './App.css';

interface AppOutletContext {
  setSizeCheck: (val: number) => void;
}

interface PageDimensions {
  pageWidth: number;
  pageHeight: number;
}

export default function App() {
  const [pageDimensions, setPageDimensions] = useState({} as PageDimensions);
  const [scrollHeight, setScrollHeight] = useState(0);
  
  /**
   * sizeCheck allows us to ensure the canvas always fills the full height of the screen
   * Specifically, it allows components rendered in the React-Router-DOM Outlet 
   * to correctly trigger the change.
   * 
   * Previous attempts were made by simply passing a boolean but the resize would finish 
   * prior to the full scroll height filling out. 
   * 
   * Testing confirmed that 3 sizeChecks was sufficient to have the canvas fill the full screen
   * Even on 2G/3G throttling. 
   * 
   * 5 was selected for additional safety
   */
  const [sizeCheck, setSizeCheck] = useState(5);

  const appContainerRef: React.Ref<any> = useRef();

  const setDimensions = () => {
    const pageWidth = innerWidth;
    let pageHeight = innerHeight;

    if (scrollHeight > pageHeight) {
      pageHeight = scrollHeight;
    }
    setPageDimensions({ pageWidth, pageHeight });
  }

  useEffect(() => {
    addEventListener('resize', setDimensions);
  }, []);

  useEffect(() => {
    if (sizeCheck > 0) {
      setScrollHeight(appContainerRef.current.scrollHeight);
      setDimensions();
      setSizeCheck(sizeCheck - 1);
    }
  }, [scrollHeight, sizeCheck, pageDimensions])

  return (
    <section className="app-container" id="app-container" ref={appContainerRef}>
        <ParticleCanvas windowX={pageDimensions.pageWidth} windowY={pageDimensions.pageHeight} />
        <Menu />
        <Outlet context={{ setSizeCheck }}/>
        <Footer />
    </section>
  );
};

export const useSetSizeCheck = () => {
  return useOutletContext<AppOutletContext>();
}
