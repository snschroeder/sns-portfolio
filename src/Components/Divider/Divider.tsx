import React, { useId } from 'react';

import './Divider.css';

export default function Divider() {
  const id = useId();
  return (
    <div className='divider'>
      <div className="accent circle alt"></div>
      <div className="accent circle"></div>
      <div className="accent circle alt"></div>
      <div className="accent circle"></div>
      <div className="accent circle alt"></div>
      <div className="accent circle"></div>
      <div className="accent circle alt"></div>
    </div>
  );
}