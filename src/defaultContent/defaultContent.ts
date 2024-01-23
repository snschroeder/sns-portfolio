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
      ]
}

export default defaultContent;
