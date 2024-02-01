import React from 'react';
import './Bar.css';

interface Props {
  length: number;
  selected: string;
  hSize: number;
  wSize: number;
}

export default function Bar({ length, selected, hSize, wSize }: Props) {
  const style = {
    height: `${hSize}px`,
    width: `${wSize * length}px`,
  };

  let type = selected === 'selected' ? 'selected' : 'not-selected';

  return (
    <li style={style} className={type} />
  );
}