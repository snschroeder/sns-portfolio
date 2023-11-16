import React from 'react';
import './DarkSlider.css';

const DarkSlider: React.FC = () => {
  return (
        <>
            <input
                type="checkbox"
                id="dark-slider"
                value="false"
            />
        </>
  );
};

export default DarkSlider;
