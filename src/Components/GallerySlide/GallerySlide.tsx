import React from 'react';
import SortSearch from '../SortViz/SortSelect/SortSelect';
import Divider from '../Divider/Divider';

import './GallerySlide.css';

interface Props {
  isLeftSlide: boolean,
  title: string;
  imgLink: string;
  tagline: string;
  description: string;
  techStack: string;
}

const GallerySlide: React.FC<Props> = ({ isLeftSlide, title, imgLink, tagline, description, techStack }: Props) => {
  return isLeftSlide ?
    <>
      <div className="gallery-slide left">
        {
          imgLink === 'sort-viz'
            ? <SortSearch />
            : <img src={imgLink} className="slide-image" />
        }
        <div className="slide-details">
          <h4 className="slide-title">{title}</h4>
          <p className="slide-tagline">{tagline}</p>
          <p className="slide-description">{description}</p>
          <h4 className="slide-title">Tech Stack:</h4>
          <p>{techStack}</p>
        </div>
      </div>
      <Divider
        angle='skew(0deg, -6deg)'
        width='110%'
        height='80px'
        top=''
        left=''
        flexDirection='row'
        position='relative'
        accentAngle='skew(0deg, 10deg)'
      />
    </>
    : <>
      <div className="gallery-slide right">
        <div className="slide-details">
          <h4 className="slide-title">{title}</h4>
          <p className="slide-tagline">{tagline}</p>
          <p className="slide-description">{description}</p>
          <h4 className="slide-title">Tech Stack:</h4>
          <p>{techStack}</p>
        </div>
      {
        imgLink === 'sort-viz'
          ? <SortSearch />
          : <img src={imgLink} className="slide-image" />
      }
      </div>
      <Divider
        angle='skew(0deg, 6deg)'
        width='100vw'
        height='80px'
        top='50%'
        left='0%'
        flexDirection='row'
        position='relative'
        accentAngle='skew(0deg, -10deg)'
      />
    </>;
};

export default GallerySlide;
