import config from '../../config';
// TODO: Add token service
// import TokenService from '../services/token-service';

const ContentApiService = {
  async getGalleryContent(): Promise<any> {
    return fetch(`${config.API_ENDPOINT}/v1/gallery-content`, {   
    })
      .then((res) => 
        (!res.ok)
          ? Response.error()
          : res.json());
  },

  async getAboutContent(): Promise<any> {
    return fetch(`${config.API_ENDPOINT}/v1/about-content`, {
    })
      .then((res) => 
        (!res.ok)
          ? Response.error()
          : res.json());
  },

  async getHomePageContent(): Promise<any> {
    return fetch(`${config.API_ENDPOINT}/v1/home-page-content`, {
    })
      .then((res) => 
        (!res.ok)
          ? Response.error()
          : res.json());
  },

  async getResumeLink(): Promise<string> {
    return fetch(`${config.API_ENDPOINT}/v1/resume-link`, {
    })
      .then((res) => 
        (!res.ok)
          ? Response.error()
          : res.json());
  },
};

export default ContentApiService;
