import React, { useEffect, useState } from 'react';
import ContentApiService from '../../APIs/ContentApi/ContentApi';

import GallerySlide from '../GallerySlide/GallerySlide';

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

  const defaultGallery = [
    {
      title: 'PS Audio Burn-in',
      imgLink: 'http://placekitten.com/g/400/400',
      tagline: 'The final gatekeeper certifying each and every PowerPlant produced',
      description: 'In the realm of high-end audio, power matters. So much so that people install dedicated power lines just for their stereos. At PS Audio, we had a different approach - rebuild the sine wave right when we needed it using our PowerPlants. The Burn-in system was our final checkpoint. After the techs assembled each PowerPlant, the Burn-in system would monitor each unit under load to certify it was ready before it left our warehouse.',
      techStack: 'React, TypeScript, PostgreSQL, Node.js, Express.js, JWT',
    },
    {
      title: 'PS Audio PowerPlay API',
      imgLink: 'http://placekitten.com/g/400/400',
      tagline: 'Connecting users to their data',
      description: 'blah blah blah',
      techStack: 'JavaScript, PostgreSQL, Node.js, Express.js',
    },
    {
      title: 'Sort Viz',
      imgLink: 'http://placekitten.com/g/400/400',
      tagline: 'Building to understanding',
      description: 'words so that we can say I exist cause I totally do and I am sure I will make it into the final site',
      techStack: 'React, JavaScript',
    },
  ];

  const fetchGalleryData = async () => {
    try {
      await ContentApiService.getGalleryContent()
        .then((res) => {
          if (res) {
            setGalleryContent(res);
          }
        });
    } catch (error) {
      setGalleryContent(defaultGallery);
    }
  };

  useEffect(() => {
    fetchGalleryData();
  }, []);

  return (
        <section className="gallery-container">
          {galleryContent.map((galleryItem: GalleryItem, index: number) => (
            <GallerySlide
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
