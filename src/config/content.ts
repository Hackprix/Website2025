const MARQUEE = [
  "Code. Create. Conquer -- Welcome to HackPrix!",
  "From Concept to Code -- HackPrix is the Launchpad!",
  "The Hack is On -- Let the Prix Begin!",
];

const ABOUT = {
  title: "About", 
  subtitle: "Build better, bring brighter",
  description: "HackPrix is a premier hackathon in Hyderabad, India, organized by CodeWave Hub to foster innovation and collaboration. This exclusive event brings together top students, developers, and tech visionaries to create cutting-edge solutions for real-world challenges. " +
    "Designed to push creative boundaries, HackPrix provides a platform for skill development through intense, solution-oriented teamwork. Participants conceptualize and build impactful projects, culminating in high-stakes pitches to industry leaders and potential investors. " +
    "Whether you're an experienced hacker or embarking on your first tech challenge, HackPrix offers unparalleled opportunities for growth, networking, and technological advancement."
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
      number: 2,
      isCurrency: true
}
];

const TitleSponser = {
  title: "Title Sponsor",
  subtitle: "Lords Institute of Engineering and Technology",
  description: "Lords Institute of Engineering and Technology proudly serves as the Title Sponsor for SanketikaFest, providing the venue, funding, and essential support to bring this event to life. As the host institution, they play a crucial role in facilitating a platform where students, professionals, and tech enthusiasts can engage in a wide range of technical and non-technical competitions, hands-on workshops, speaker sessions, and interactive activities.Their commitment to fostering innovation, creativity, and knowledge-sharing ensures that SanketikaFest is not just an event, but an experience that inspires learning and growth. By providing an ecosystem that encourages collaboration, networking, and skill-building, Lords Institute empowers students to explore cutting-edge technologies, develop solutions to real-world problems, and connect with industry leaders."
};

const DEPARTMENTS = [
  // Central Events
  {
    id: "sports",
    name: "Sports Mania",
    shortName: "Sports",
    marquee: "Sports Mania 🏐 🏀 🏓",
    logo: "/sports.png",
    eventPoster: "/posters/sports.jpeg",
    schedulePoster: "/schedule/sports.jpg",
    description: "Experience the thrill of competition at our Sports Fest! Featuring cricket, football, volleyball, and indoor games. Join us for two days of intense matches, team spirit, and athletic excellence. Open to all departments, this event promises to showcase the best sporting talent from across the campus.",
    events: [
      {
        name: "Volleyball Tournament",
        type: "Men",
      },
      {
        name: "Basketball Tournament",
        type: "Men",
      },
      {
        name: "Carrom Singles Tournament",
        type: "Men & Women",
      },
      {
        name: "Carrom Doubles Tournament",
        type: "Men & Women",
      },
      {
        name: "Table Tennis Singles",
        type: "Men & Women",
      },
      {
        name: "Table Tennis Doubles",
        type: "Men & Women",
      },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/sanketika2025",
    },
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc0FXakalvD-8WoOggt6XcHsAvrG-_BdrhQc2z1rzeuPijbJA/viewform",
  },
  {
    id: "cultural",
    name: "Cultural Fest",
    shortName: "Cultural",
    marquee: "Cultural Fest ✨ ",
    logo: "/cultural.png",
    eventPoster: "/posters/cultural.jpeg",
    schedulePoster: "/schedule/cultural.jpg",
    description: "Immerse yourself in our vibrant Cultural Fest! A celebration of art, music, dance, and creativity. From classical performances to modern entertainment, experience the rich diversity of talents. Features singing competitions, dance battles, fashion shows, and theatrical performances.",
    events: [
      {
        name: "Mimicry",
        type: "Solo/Group",
      },
      {
        name: "Singing",
        type: "Solo/Group",
      },
      {
        name: "Standup Comedy",
        type: "Solo/Group",
      },
      {
        name: "Instrument Playing",
        type: "Solo/Group",
      },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/sanketika2025",
    },
    registrationLink: "https://forms.gle/jfnomrH91gtLxiPV8",
  },
  {
    id: "project-expo",
    name: "Project Expo",
    shortName: "Projects",
    marquee: "Central Project Exhibition",
    logo: "/project.png",
    eventPoster: "/posters/projectexpo.png",
    schedulePoster: "/schedule/project.jpg",
    description: "Discover innovation at its finest in our Project Expo! A showcase of groundbreaking student projects across all engineering disciplines. From software solutions to hardware innovations, witness the future of technology. Features live demonstrations, expert evaluations, and networking opportunities with industry professionals.",
    events: [
      {
        name: "Software Projects",
        type: "Technical",
      },
      {
        name: "Hardware Projects",
        type: "Non-Technical/Technical",
      },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/sanketika2025",
    },
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdAH0nFebiA2q4mg6IMgYUcji1U2nKq-LL61FwLabIzHtE6qQ/viewform?usp=header",
  },
  {
    id: "auto-expo",
    name: "Auto Expo",
    shortName: "Auto",
    marquee: "Telangana's Biggest Auto Expo",
    logo: "/race.png",
    eventPoster: "/posters/auto.jpg",
    schedulePoster: "/schedule/auto.jpg",
    description: "TELANGANA'S BIGGEST AUTO FEST! 40+ exotic supercars to roaring superbikes on Display",
    details: "TELANGANA'S BIGGEST AUTO FEST IS HERE!🔥 Join us at Lords Institute of Engineering & Technology, Hyderabad for an unmatched automobile experience! 🚀",
    events: [
      {
        name: "Car Show",
        type: "Technical",
      },
      {
        name: "EV Innovation",
        type: "Technical",
      },
      {
        name: "Auto Design Challenge",
        type: "Technical",
      },
      {
        name: "Engine Workshop",
        type: "Workshop",
      },
      {
        name: "Racing Simulator",
        type: "Non-Technical",
      }
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/torquetalk.autofest",
    },
    registrationLink: "https://linktr.ee/telangana.autofest",
  },
  // Department Events (existing departments follow...)
  {
    id: "cse",
    name: "Computer Science Engineering",
    marquee:"Department of Computer Science",     
    shortName: "CSE",
    logo: "/cse.png",
    eventPoster: "/posters/cse.png",
    schedulePoster: "/schedule/cse.jpg",
    description: "Sanketika 2025, a prestigious national-level TechFest in collaboration with ACE and powered by CODESTORM. Scheduled for April 24-25, the event showcases cutting-edge technical competitions, workshops, and a Project Expo aligned with Sustainable Development Goals. Highlights include Static Web Design, AI-Driven Image Generation, Short Film Production, and an AR/VR/MR Workshop.",
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
    registrationLink: "https://forms.gle/cskvWahsLL2ZLWtb9",
  },
  {
    id: "it",
    name: "Information Technology",
    shortName: "IT",
    marquee:"Department of Information and Technology",
    logo: "/it.png",
    eventPoster: "/posters/it.jpeg",
    schedulePoster: "/schedule/it.jpg",
    description: "The IT Department showcases innovation through technical workshops, coding competitions, and project exhibitions focused on web technologies, cloud computing, and data analytics.",
    events: [
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
    schedulePoster: "/schedule/csd.jpg",
    description: "Data Sankova is an exclusive event by the Department of CSE - Data Science in association with DataNova at Sanketika 2025 for future engineers. It features a workshop, two technical competitions, and a non-technical competition, fostering innovation, problem-solving, and collaboration in data science, AI, and analytics through hands-on learning and engaging challenges.",
    events: [
        {
    name: "No-Code Development",
    type: "Workshop",
  },
  {
    name: "Mind Spark",
    type: "Technical",
    description: "Round - 1 : Data Science Detective, \n Round - 2 : Bugbusters, Round - 3 : Data War",
  },
  {
    name: "Code Combat",
    type: "Technical",
    description: "Round-1 : Styling Sprint, \n Round-2: SQL Showdown",
  },
  {
    name: "Visionary Vids",
    type: "Non-Technical",
  },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/datanova.lords?igsh=MWhrNWxkZ3pzeGQ2OA==",
    },
    registrationLink: "https://linktr.ee/datanova.lords",
  },
  {
    id: "csm",
    name: "CSE - Machine Learning",
    marquee: "Department of Computer Science in Machine Learning",
    shortName: "CSM",
    logo: "/csm.png",
    eventPoster: "/posters/csm.jpg",
    schedulePoster: "/schedule/csm.jpg",
    description: "The CSM Department offers events focused on machine learning, data analytics, and artificial intelligence, featuring workshops, competitions, and expert talks.",
    events: [
      {
        title: "Auto Fest",
        type: "Non-Technical"
      },
      {
        title: "Coding Faceoff",
        type: "Technical"
      },
      {
        title: "E-sports Tournament",
        type: "Non-Technical"
      },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/p/DHDzxA2hV2h/?igsh=MTVkM3YzNHBlaTY3ZA==",
    },
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSei6X-8EKXDnebS5JWdiG24EywyYRqtn4fXympKuo_zXzMMUg/viewform?usp=header",
  },
  {
    id:"mech",
    name: "Mechanical Engineering",
    marquee: "Department of Mechanical Engineering",
    shortName: "ME",
    logo: "/mech.png",
    eventPoster: "/posters/mech.jpeg",
    schedulePoster: "/schedule/mech.jpg",
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
    schedulePoster: "/schedule/civil.jpg",
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
    logo: "/mba.jpeg",
    eventPoster: "/posters/mba.jpeg",
    schedulePoster: "/schedule/mba.jpg",
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
    schedulePoster: "/schedule/ece.jpg",
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
