const defaultContent = {
  defaultHomePageContent: {
    homePageHeader: 'Hi there! My name is Scott.',
    homePageCta: 'Welcome to my portfolio. Please feel free to look around if you would like to see what I\'ve been working on.',
    homePageDust: 'Oh, and please don\'t mind the dust, it seems I left a window open while I was away.',
    homePageDustJoke: 'Don\'t worry, though! Our tests have confirmed it is 73% asbestos free!',
  },

  defaultAbout: {
    imgLink: 'http://placekitten.com/g/300/400',
    header: 'About me',
    body: `I have been working professionally as a full stack developer since 2019, with a focus on React, TypeScript, Node.js, Express.js, and both PostgreSQL and MySQL. 

    Most recently at PS Audio, I had many opportunities unique to a small company. I was often responsible for owning the entirety of projects I worked rather than just a portion of it. It was up to me to meet with stakeholders, define the requirements for the project, and determine the right tech stack and tools for the job. 
    
    Plus, I got to write so much code.
    
    The projects I worked fulfilled several important roles, ranging from driving sales to improving product reliability and connecting users and our engineering team to diagnostics and product data. 
    
    PS Audio also gave me the chance to expand my knowledge base rapidly. Initially, this meant learning WooCommerce and PHP, which I used to create a subscription app for PS Audio’s recording studio Octave Records. Later, we moved the site to Shopify, giving me the chance to pick up both Shopify and Liquid.
    
    Prior to working at PS Audio, I attended Thinkful’s full time coding boot camp, working closely with peers and mentors to to learn modern best practices for developing with React, Node, and JavaScript.
    
    In my free time, you’ll likely find me learning Godot, hiking with my dog, gaming, or reading.`,
    currentlyReading: 'The Dispossessed by Ursula K Le Guin',
    currentlyPlaying: ['Path of Exile', 'Bloodstained: Ritual of the Night', 'Palworld'],
  },

  defaultGallery: [
    {
      title: 'PS Audio Burn-in',
      imgLink: 'http://placekitten.com/g/400/400',
      tagline: 'The final gatekeeper certifying each and every PowerPlant produced',
      description: 'In the realm of high-end audio, power matters - so much so that some people install dedicated power lines just for their stereos. At PS Audio, we had a different approach - rebuild the sine wave right when we needed it using our PowerPlants. The Burn-in system was our final checkpoint. After the techs assembled each PowerPlant, the Burn-in system would monitor each unit under load to certify it was ready before it left our warehouse.',
      techStack: 'React, TypeScript, PostgreSQL, Node.js, Express.js, JWT',
    },
    {
      title: 'PS Audio PowerPlay API',
      imgLink: 'http://placekitten.com/g/400/400',
      tagline: 'Connecting users to their data',
      description: 'PowerPlay is feature built-in to most power products produced by PS Audio that allows them to report power data to our servers. One of the first projects for me at PS Audio was to build a new PowerPlay API to connect our users with their data. This presented several unique challenges. The first was configuring the code to accommodate the wide array of standards our power products used over the 20 years they\'ve had access to the internet. This was done by shaping all data received into a standardized format, and also structuring the code to correctly handle some of the more... interesting design choices of decades past. For instance, a GET request from a power product might be it asking what it should be reporting, or a GET request might be that unit reporting its power data. It was also imperative that the API handle a high static load from all power products we sold as well as the spikes from users viewing their power data.',
      techStack: 'JavaScript, PostgreSQL, Node.js, Express.js',
    },
    {
      title: 'Sort Viz',
      imgLink: 'http://placekitten.com/g/400/400',
      tagline: 'Building to understanding',
      description: 'This application is here because it is sheds light on who I am. It\'s a simple app built in a weekend that uses React to animate several different sorting algorithms. ',
      techStack: 'React, JavaScript',
    },
  ]
}

export default defaultContent;
