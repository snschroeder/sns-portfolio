const defaultContent = {
  defaultHomePageContent: {
    homePageHeader: 'Hi, I\'m Scott',
    homePageCta: 'I\'m a Full Stack Developer',
    homePageDust: 'I specialize in TypeScript, React, and Node.js with years of experience',
    homePageDustJoke: 'If you have any questions or would like to collaborate on a project, let me know!',
    // Old home page content
    homePageHeader3: 'Hi there! My name is Scott.',
    homePageCta3: 'Welcome to my portfolio. Please feel free to look around if you would like to see what I\'ve been working on.',
    homePageDust3: 'Oh, and please don\'t mind the dust, it seems I left a window open while I was away.',
    homePageDustJoke3: 'Don\'t worry, though! Our tests have confirmed it is 73% asbestos free!',
    // Home Page default content on subsequent visits during the session
    homePageHeader2: 'Howdy, welcome back!',
    homePageCta2: 'You can check out the code for this portfolio along with my other projects in my Github linked below.',
    homePageDust2: 'Or if you\'d like to chat, please feel free to reach out anytime on LinkedIn or via email.',
    homePageDustJoke2: 'Please let me know if you figured out where this dust is coming from...',
  },

  defaultAbout: {
    imgLink: `${process.env.PUBLIC_URL}/profile-pic-climbing.jpg`,
    header: 'About me',
    body: `I have been working professionally as a full stack developer since 2019, with a focus on React, TypeScript, Node.js, Express.js, and both PostgreSQL and MySQL. I'm also experienced with AWS, Wordpress and PHP, and Shopify and Liquid.
    
Most recently at PS Audio, I had many opportunities unique to a small company. I was often responsible for owning the entirety of projects I worked. It was up to me to meet with stakeholders, define the requirements for the project, and determine the right tech stack and tools for the job. 
    
Plus, I got to write a LOT of code.
    
The projects I worked fulfilled several important roles, ranging from driving sales to improving product reliability and connecting users and our engineering team to diagnostics and product data. 
    
PS Audio also gave me the chance to expand my knowledge base rapidly. Initially, this meant learning WooCommerce and PHP, which I used to create a subscription app for PS Audio’s recording studio Octave Records. Later, we moved our e-commerce site to Shopify, giving me the chance to pick up both Shopify and Liquid.
    
Prior to working at PS Audio, I attended Thinkful’s full time coding boot camp, working closely with peers and mentors to to learn modern best practices for developing with React, Node, and JavaScript.
    
In my free time, you’ll likely find me learning Godot, hiking with my dog, reading, or gaming.`,
    currentlyReading: '',
    currentlyPlaying: [],
  },

  defaultGallery: [
    {
      title: 'PS Audio Burn-in',
      imgLink: `${process.env.PUBLIC_URL}/Burnin-monitor.png`,
      tagline: 'The final gatekeeper certifying each and every PowerPlant produced',
      description: `In the realm of high-end audio, power matters - so much so that a select few enthusiasts install dedicated power lines just for their stereos.

At PS Audio, we had a different approach - rebuild the sine wave right when we needed it using our PowerPlants. The Burn-in system I created was our final system test for each and every Power Plant produced at PS Audio. 
      
After the techs assemble each PowerPlant, the Burn-in system monitors each unit under load to certify it was ready before it left our warehouse. If a unit fails, detailed troubleshooting steps are provided covering the failure and necessary fix. 
      
And for our engineering team, detailed diagnostics were provided from each test in an Excel format so that our Manufacturing Engineer could monitor the efficiency of our production process and make adjustments to the testing parameters if needed.
`,
      techStack: 'React, TypeScript, PostgreSQL, Node.js, Express.js, JWT',
    },
    {
      title: 'PS Audio PowerPlay API',
      imgLink: `${process.env.PUBLIC_URL}/PowerPlayAPI.png`,
      tagline: 'Connecting users to their data',
      description: `PowerPlay is feature built-in to most Power Plants produced by PS Audio that allows them to report power data to our servers. One of the first projects for me at PS Audio was to build a new PowerPlay API to connect our users with their data. 
      
This presented several unique challenges. 
      
The first was configuring the code to accommodate the wide array of standards our Power Plants used over the 20 years they've had access to the internet. This was done by shaping all data received into a standardized format, and also structuring the code to correctly handle some of the more... interesting design choices of decades past. 
      
For instance, a GET request from a Power Plant might be it asking what it should be reporting, or a GET request might be that unit reporting its power data. Some data would get reported in a human readable format, and some would come through in hexadecimal that needed to be converted.
      
It was also imperative that the API handle a high static load from the thousands of Power Plants we sold as well as the spikes from users interacting with their power data.`,
      techStack: 'JavaScript, PostgreSQL, Node.js, Express.js',
    },
    {
      title: 'Sort Viz',
      imgLink: 'sort-viz',
      tagline: 'Building a path to understanding',
      description: `This application is here primarily because it sheds light on who I am as a developer. 
      
Plus it's pretty to watch.

It's a simple app built in a weekend that uses React to animate several different sorting algorithms, built for the sole sake of learning how to animate something with React without using any libraries.
      
The solution ended up being straightforward, though still quite satisfying to implement. To do this, the sequence of moves a sort would make was determined and recorded. Then, using setTimeout and updating the state of the randomized array the sequence could be played out. 

Note, though, that the animation displays only the characteristics of the sort, not it's realtime speed. Selection sort appears the fastest in the animations, though it is of course massively inferior to quick sort in the real world.

At this point my original mission statement to animate something using only React was done, but I wasn't. I added an undo option to animate the sequence in reverse. I added handling for screen resizing, and I learned the importance of adding debounce when doing that resizing.
      
This, I feel, sums me up well as a developer - I love tackling interesting problems, pushing my own limits. However, even when building something for just myself accessibility and the user experience are core to my approach.
`,
      techStack: 'React, JavaScript',
    },
  ],
};

export default defaultContent;
