import React from 'react';
import SortSearch from '../SortViz/SortSelect/SortSelect';

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
    <div className="gallery-slide left">
      {
        imgLink === 'sort-viz'
          ? <SortSearch />
          : <img src={imgLink} className="slide-image" />
      }
      <section className="slide-details">
        <h4 className="slide-title">{title}</h4>
        <p className="slide-tagline">{tagline}</p>
        <p className="slide-description">{description}</p>
        <h4 className="slide-title">Tech Stack:</h4>
        <p>{techStack}</p>
      </section>
    </div>
    : <div className="gallery-slide right">
        <section className="slide-details">
          <h4 className="slide-title">{title}</h4>
          <p className="slide-tagline">{tagline}</p>
          <p className="slide-description">{description}</p>
          <h4 className="slide-title">Tech Stack:</h4>
          <p>{techStack}</p>
        </section>
      {
        imgLink === 'sort-viz'
          ? <SortSearch />
          : <img src={imgLink} className="slide-image" />
      }
    </div>;
};

export default GallerySlide;
