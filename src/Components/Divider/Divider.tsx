import React, { CSSProperties } from 'react';

import './Divider.css';

interface DividerProps {
  angle: string;
  width: string;
  height: string;
  top: string;
  left: string;
  flexDirection: string;
  position: string;
  accentAngle: string;
}

export default function Divider({ angle, width, height, top, left, flexDirection, position, accentAngle }: DividerProps) {
  const dividerStyle = {
    transform: angle,
    width,
    height,
    top,
    left,
    position,
    flexDirection,
  };

  const accentStyle = {
    transform: accentAngle,
  };

  return (
    <div style={dividerStyle as CSSProperties} className='divider'>
      <div style={accentStyle} className="accent circle alt"></div>
      <div style={accentStyle} className="accent circle"></div>
      <div style={accentStyle} className="accent circle alt"></div>
      <div style={accentStyle} className="accent circle"></div>
      <div style={accentStyle} className="accent circle alt"></div>
      <div style={accentStyle} className="accent circle"></div>
      <div style={accentStyle} className="accent circle alt"></div>
    </div>
  );
}