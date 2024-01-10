import React from 'react';

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
    <section className="gallery-slide">
        <img src={imgLink} className="slide-image" />
        <section className="slide-details">
            <h4 className="slide-title">{title}</h4>
            <p>{description}</p>
            <p>{techStack}</p>
        </section>
    </section>
    : <section className="gallery-slide">
        <section className="slide-details">
            <h4 className="slide-title">{title}</h4>
            <p>{description}</p>
            <p>{techStack}</p>
        </section>
        <img src={imgLink} className="slide-image" />
    </section>;
};

export default GallerySlide;
