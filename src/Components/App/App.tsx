import React, { useEffect, useState, useRef } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

import { throttle } from '../../Utilities/throttle';

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
  const [sizeCheck, setSizeCheck] = useState(5);
  /**
   * sizeCheck ensures the canvas always fills the full height of the screen
   * Specifically, it allows components rendered in the React-Router-DOM Outlet 
   * to correctly trigger the canvas resize.
   * 
   * Using a boolean instead fails as the resize finishes before the full scroll height is filled.
   * 
   * Testing confirmed that 3 sizeChecks was typically sufficient, 5 used for additional safety.
   */

  const appContainerRef: React.Ref<any> = useRef();

  const setDimensions = () => {
    setScrollHeight(appContainerRef.current.scrollHeight);
    setSizeCheck(5);
    const pageWidth = innerWidth;
    let pageHeight = innerHeight;

    if (scrollHeight > pageHeight) {
      pageHeight = scrollHeight;
    }
    setPageDimensions({ pageWidth, pageHeight });
  };

  useEffect(() => {
    addEventListener('resize', throttle(setDimensions, 750));
  }, []);

  useEffect(() => {
    if (sizeCheck > 0) {
      setScrollHeight(appContainerRef.current.scrollHeight);
      setDimensions();
      setSizeCheck(sizeCheck - 1);
    }
  }, [scrollHeight, sizeCheck, pageDimensions]);

  return (
    <div className="app-container" id="app-container" ref={appContainerRef}>
      <ParticleCanvas windowX={pageDimensions.pageWidth} windowY={pageDimensions.pageHeight} />
      <Menu />
      <Outlet context={{ setSizeCheck }}/>
      <Footer />
    </div>
  );
}

export const useSetSizeCheck = () => {
  return useOutletContext<AppOutletContext>();
};
