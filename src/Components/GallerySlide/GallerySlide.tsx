import React from 'react';
import SortViz from '../SortViz/SortViz';

import './GallerySlide.css';

interface Props {
  isLeftSlide: boolean,
  title: string;
  imgLink: string;
  tagline: string;
  description: string;
  techStack: string;
}

const GallerySlide: React.FC<Props> = ({ isLeftSlide, title, imgLink, description, techStack }: Props) => {
  return isLeftSlide ?
    <section className="gallery-slide left">
      {
        imgLink === 'sort-viz'
          ? <SortViz sortType={'quick-sort'} />
          : <img src={imgLink} className="slide-image" />
        }
        <section className="slide-details">
        <h4 className="slide-title">{title}</h4>
          <p className="slide-description">{description}</p>
          <h4 className="slide-title">Tech Stack:</h4>
          <p>{techStack}</p>
      </section>
    </section>
    : <section className="gallery-slide right">
      <section className="slide-details">
          <h4 className="slide-title">{title}</h4>
          <p className="slide-description">{description}</p>
          <h4 className="slide-title">Tech Stack:</h4>
          <p>{techStack}</p>
      </section>
      {
        imgLink === 'sort-viz'
          ? <SortViz sortType={'quick-sort'} />
          : <img src={imgLink} className="slide-image" />
        }
    </section>;
};

export default GallerySlide;
