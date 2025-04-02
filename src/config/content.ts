const MARQUEE = [
  "Bringing Innovation across India!",
  "Experience 2 Days of Non-Stop Fun & Learning",
  "Workshops, Networking, and Exciting Prizes Await!",
];
const ABOUT = {
  title: "About", 
  subtitle: "Discover the Spirit of Innovation and Celebration!",
  description: "SanketikaFest is an exciting annual event organized by Lords Institute of Engineering and Technology, bringing together students, innovators, and enthusiasts from diverse backgrounds. It features a perfect blend of technical and non-technical competitions, interactive workshops, inspiring speaker sessions, and fun-filled activities. The fest serves as a platform to showcase talent, learn new skills, and engage with like-minded individuals, fostering creativity and collaboration. Whether you're here to compete, explore, or simply enjoy the experience, SanketikaFest promises an unforgettable journey of knowledge and entertainment!"
}

const METRICS = [
  {
      id: 1, 
      label: "Participants", 
      number: 4000
  }, 
  {
      id: 2, 
      label: "Workshops & Events", 
      number: 20
  },
  {
      id: 3,
      label: "Competitions", 
      number: 25
  },
  {
      id: 4,
      label: "Prize Pool", 
      number: 2,  // Keep it as a number
      isCurrency: true // Add a flag to handle special formatting
}
]
const TitleSponser = {
  title: "Title Sponsor",
  subtitle: "Lords Institute of Engineering and Technology",
  description: "Lords Institute of Engineering and Technology proudly serves as the Title Sponsor for SanketikaFest, providing the venue, funding, and essential support to bring this event to life. As the host institution, they play a crucial role in facilitating a platform where students, professionals, and tech enthusiasts can engage in a wide range of technical and non-technical competitions, hands-on workshops, speaker sessions, and interactive activities.Their commitment to fostering innovation, creativity, and knowledge-sharing ensures that SanketikaFest is not just an event, but an experience that inspires learning and growth. By providing an ecosystem that encourages collaboration, networking, and skill-building, Lords Institute empowers students to explore cutting-edge technologies, develop solutions to real-world problems, and connect with industry leaders."
};

const DEPARTMENTS = [
  {
    id: "cse",
    name: "Computer Science Engineering",
    marquee:"Department of Computer Science",     
    shortName: "CSE",
    logo: "/cse.png",
    description: "Sanketika 2025, a prestigious national-level TechFest in collaboration with ACE and powered by CODESTORM. Scheduled for April 24-25, the event showcases cutting-edge technical competitions, workshops, and a Project Expo aligned with Sustainable Development Goals. Highlights include Static Web Design, AI-Driven Image Generation, Short Film Production, and an AR/VR/MR Workshop.",
    eventPoster: "/posters/cse.jpg",
    events: [
      {
        name: "Static Web Page Designing",
        type: "Technical",
      },
      {
        name: "Image Generation using AI",
        type: "Technical",
      },
      {
        name: "Short Film Making",
        type: "Non-Technical",
      },    
   ],
    socialLinks: {
      instagram: "https://www.instagram.com/ace_.liet?igsh=MTFwN2t2czUxZ3Q2dA%3D%3D&utm_source=qr",
    },
    registrationLink: "https://qrco.de/bfqkjz",
  },
  {
    id: "it",
    name: "Information Technology",
    shortName: "IT",
    marquee:"Department of Information and Technology",
    logo: "/it.png",
    description: "The IT Department showcases innovation through technical workshops, coding competitions, and project exhibitions focused on web technologies, cloud computing, and data analytics.",
    eventPoster: "/posters/it.jpeg",
    events: [
      {
        name: "Project Expo",
        type: "Technical",
      },
      {
        name: "Technical Quiz",
        type: "Technical",
      },
      {
        name: "Bug Busters",
        type: "Technical",
      },
      {
        name: "Blind Coding",
        type: "Technical",
      },
      {
        name: "Treasure Hunt",
        type: "Non-Technical",
      },
      {
        name: "Power BI & Tableau",
        type: "Workshop",
      },
    ],
    socialLinks: {
      instagram: "https://linktr.ee/itsa_liet",
    },
    registrationLink: "https://linktr.ee/itsa_liet",
  },
  {
    id: "csd",
    name: "CSE - Data Science",
    marquee: "Department of Computer Science in Data Science",
    shortName: "CSD",
    logo: "/csd.png",
    eventPoster: "/posters/csd.png",
    description: "Data Sankova is an exclusive event by the Department of CSE - Data Science in association with DataNova at Sanketika 2025 for future engineers. It features a workshop, two technical competitions, and a non-technical competition, fostering innovation, problem-solving, and collaboration in data science, AI, and analytics through hands-on learning and engaging challenges.",
    events: [
        {
    name: "No-Code Development",
    type: "Workshop",
  },
  {
    name: "Mind Spark",
    type: "Technical",
  },
  {
    name: "Code Combat",
    type: "Technical",
  },
  {
    name: "Visionary Vids",
    type: "Non-Technical",
  },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/datanova.lords?igsh=MWhrNWxkZ3pzeGQ2OA==",
    },
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdzNFfP398OKZyt0-wfJdiQJt0vR9LIROGqfjM0zcJ5GPyqFQ/viewform",
  },
  {
    id: "csm",
    name: "CSE - Machine Learning",
    marquee: "Department of Computer Science in Machine Learning",
    shortName: "CSAI",
    logo: "/csm.png",
    description: "The Artificial Intelligence Department offers events focused on machine learning, data analytics, and artificial intelligence, featuring workshops, competitions, and expert talks.",
    events: [
      {
        title: "AI Workshop",
        description: "Hands-on artificial intelligence workshop",
        type: "Workshop"
      },
      {
        title: "AI Competition",
        description: "Artificial intelligence competition",
        type: "Competition"
      }
    ] 
  },
  {
    id:"mech",
    name: "Mechanical Engineering",
    marquee: "Department of Mechanical Engineering",
    shortName: "ME",
    logo: "/mech.png",
    eventPoster: "/posters/mech.jpeg",
    description: "The Mechanical Engineering Department offers events focused on mechanical design, automation, and manufacturing, featuring workshops, competitions, and expert talks.",
    events: [
      {
        title: "AutoCAD Challenge",
        type: "Technical"
      },
      {
        title: "Best Out of Waste",
        type: "Non-Technical"
      },
      {
        title: "Assembly & Disassembly of AutoMobile Engine",
        type: "Workshop"
      },
      {
        title: "Poster Presentation",
        type: "Non-Technical"
      },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/lordsinstitute",
    },
    registrationLink: "https://qrplanet.com/hwb7sd",
  },
  {
    id: "civil",
    name: "Civil Engineering",
    marquee: "Department of Civil Engineering",
    shortName: "CE",
    logo: "/civil.png",
    eventPoster: "/posters/civil.jpg",
    description: "The Department of Civil Engineering, in association with Tameer Association, is organizing ARCHINOVA 2025—an event to showcase skills, learn from professionals, network with like-minded people, and gain knowledge while having fun.",
    events: [
      {
        name: "Build on Spot",
        type: "Technical",
      },
      {
        name: "NDT (Non-Destructive Testing)",
        type: "Workshop",
      },
      {
        name: "Blue Print Battle",
        type: "Technical",
      },
      {
        name: "Quiz",
        type: "Non-Technical",
      },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/archinova.2025?igsh=YzljYTk1ODg3Zg==",
    },
    registrationLink: "https://linktr.ee/tameerassociation.liet",
  },
  {
    id:"mba",
    name: "Master of Business Administration",
    marquee: "Department of MBA",
    shortName: "MBA",
    logo: "/mba.png",
    eventPoster: "/posters/mba.jpeg",
    description: "The MBA Department offers events focused on business management, entrepreneurship, and leadership, featuring workshops, competitions, and expert talks.",
    events: [
      {
        title: "Case Crackers",
        type: "Formal"
      },
      {
        title: "Young Managers",
        type: "Formal"
      },
      {
        title: "HashTag Wars",
        type: "Informal"
      },
      {
        title: "IPL Bidding",
        type: "Informal"
      },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/mba_synergia",
    },
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfwsmpG2nj3RiuKJbdUUxjapH4ezbnAsH9ZjKnNjIdhX6QN2Q/viewform",
  },

  {
    id:"ece",
    name: "Electronics and Communication Engineering",
    marquee: "Department of Electronics and Communication Engineering",
    shortName: "ECE",
    logo: "/ece.png",
    eventPoster: "/posters/ece.jpg",
    description: "The Department of Electronics and Communication Engineering is organizing Sanketika-2K25, a significant step towards achieving this goal, providing a dynamic platform for knowledge exchange, skill enhancement, and industry-academia interaction.",
    events: [
      {
        name: "Circuit Debugging",
        type: "Technical",
      },
      {
        name: "Poster Presentation",
        type: "Technical",
      },
      {
        name: "Technical Quiz",
        type: "Technical",
      },
      {
        name: "PCB Design",
        type: "Workshop",
      },
      {
        name: "Talent Show",
        type: "Non-Technical",
      },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/anions_sanketika?igsh=MTNhZnlhYm0ycmVmdQ==",
    },
    registrationLink: "https://qrplanet.com/sanketikaece?ref=wa",
  }
];

export { MARQUEE, ABOUT, METRICS, TitleSponser, DEPARTMENTS };
