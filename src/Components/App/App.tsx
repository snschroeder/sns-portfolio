import React from 'react';
import { Outlet } from 'react-router-dom';

import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import Menu from '../Menu/Menu';

import './App.css';

const App: React.FC = () => {
  return (
    <section className="app-container">
        <ParticleCanvas />
        <Menu />
        <Outlet />
    </section>
  );
};

export default App;