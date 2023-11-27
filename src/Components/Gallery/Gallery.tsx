import React from 'react';

import GallerySlide from '../GallerySlide/GallerySlide';

import './Gallery.css';

const Gallery: React.FC = () => {
  return (
        <section className="gallery-container">
          <GallerySlide 
            isLeftSlide={true}
            title='test'
            imgLink='http://placekitten.com/g/400/400'
            description='It is a thing!'
            techStack='cat'
          />
          <GallerySlide
            isLeftSlide={false}
            title='test two'
            imgLink='http://placekitten.com/g/400/400'
            description='It is another thing!'
            techStack='cat cat cat'         
          />
        </section>
  );
};

export default Gallery;
