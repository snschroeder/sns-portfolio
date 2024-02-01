import React, { useEffect, useState } from 'react';

import ContentApiService from '../../APIs/ContentApi/ContentApi';
import defaultContent from '../../defaultContent/defaultContent';
import GallerySlide from '../GallerySlide/GallerySlide';
import { useSetSizeCheck } from '../App/App';

import config from '../../config';


import './Gallery.css';

interface GalleryItem {
  title: string;
  imgLink: string;
  tagline: string;
  description: string;
  techStack: string;
}

const Gallery: React.FC = () => {
  const [galleryContent, setGalleryContent] = useState(new Array<GalleryItem>);
  const { setSizeCheck } = useSetSizeCheck();


  const fetchGalleryData = async () => {
    if (!config.API_ENDPOINT) {
      setGalleryContent(defaultContent.defaultGallery);
    } else {
      try {
        await ContentApiService.getGalleryContent()
          .then((res) => {
            if (res) {
              setGalleryContent(res);
            }
          });
      } catch (error) {
        setGalleryContent(defaultContent.defaultGallery);
      }
    }
  };

  useEffect(() => {
    fetchGalleryData()
      .then(() => {
        setSizeCheck(5);
      })
  }, []);

  return (
    <section className="gallery-container">
      {galleryContent.map((galleryItem: GalleryItem, index: number) => (
        <GallerySlide
          key={index}
          isLeftSlide={index % 2 === 0}
          title={`${galleryItem.title}`}
          imgLink={`${galleryItem.imgLink}`}
          tagline={`${galleryItem.tagline}`}
          description={`${galleryItem.description}`}
          techStack={`${galleryItem.techStack}`}
        />
      ))}
    </section>
  );
};

export default Gallery;
