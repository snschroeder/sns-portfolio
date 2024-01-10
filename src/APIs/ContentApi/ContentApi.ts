import config from '../../config';
// TODO: Add token service
// import TokenService from '../services/token-service';

const ContentApiService = {
  async getGalleryContent(): Promise<any> {
    return fetch(`${config.API_ENDPOINT}/v1/gallery-content`, {   
    })
      .then((res) => 
        (!res.ok)
          ? res.json().then(() => '')
          : res.json());
  },
};

export default ContentApiService;
