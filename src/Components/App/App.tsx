import React, { useEffect, useState, useRef, useReducer } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import Menu from '../Menu/Menu';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

import { throttle } from '../../Utilities/throttle';

import './App.css';

interface AppOutletContext {
  state: PageState;
}

interface PageState {
  pageWidth: number;
  pageHeight: number;
}

type AppAction = {
  type: 'resize';
  payload: PageState;
};

function pageSizeReducer(state: PageState, action: AppAction) {
  switch (action.type) {
    case 'resize':
      return { ...state, pageWidth: action.payload.pageWidth, pageHeight: action.payload.pageHeight };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(pageSizeReducer, { pageWidth: innerWidth, pageHeight: innerHeight });

  const resizeListener = () => {
    const payload = { pageWidth: innerWidth, pageHeight: innerHeight };
    dispatch({ type: 'resize', payload });
  };

  useEffect(() => {
    addEventListener('resize', resizeListener);
  }, []);

  return (
    <div className="app-container" id="app-container" >
      {/* <ParticleCanvas
        windowX={state.pageWidth}
        windowY={state.pageHeight} 
        zIndex={-1}
      /> */}
      <Menu />
      <Outlet context={{ state } satisfies AppOutletContext}/>
      <Footer />
    </div>
  );
}

export function useAppState() {
  return useOutletContext<AppOutletContext>();
}
