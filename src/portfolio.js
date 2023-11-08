/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
// waveAnimation.json
// import splashAnimation from "./assets/lottie/waveAnimation";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import projectJson from './projects.json';
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Annetta Zheng",
  title: "Hi all, I'm Annetta",
  subTitle: emoji([
    "A passionate Data Scientist and Full Stack Software Developer 🚀", <br />,
    // "having an experience of",<br />, 
    "\u2022 Machine Learning with PyTorch / TensorFlow / Scikit-Learn" , <br />,
    "\u2022 Web and Mobile applications with JavaScript / Nodejs / React" , <br />,
    // "\u2022 Data Engineering with Apache Hive / TensorFlow / Scikit-Learn" , <br />,
    // "some other cool libraries and frameworks."
  ]),
  resumeLink:
    "https://drive.google.com/drive/folders/1T1ykYxFtOPo0q71dhbejx-DpwSANvYXt?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/annetta-zheng",
  linkedin: "https://www.linkedin.com/in/annetta-zheng/",
  gmail: "annetta@berkeley.edu",
  // kaggle: "https://www.kaggle.com/annettazheng",
  // gitlab, facebook, medium, stackoverflow, 
  // Instagram, Twitter are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  // skills: [
  //   emoji(
  //     "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
  //   ),
  //   emoji("⚡ Natrual Language Processing and Machine Learning"),
  //   // emoji(
  //   //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
  //   // )
  // ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // languages
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    // {
    //   skillName: "R",
    //   fontAwesomeClassname: "fas fa-r"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // ds
    // {
    //   skillName: "data-science",
    //   fontAwesomeClassname: "fas fa-table"
    // },
    {
      skillName: "nlp",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "machine-learning",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "hive",
      fontAwesomeClassname: "fab fa-hive"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    
    // frontend
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cornell University",
      logo: require("./assets/images/cornellLogo.png"),
      subHeader: "Master of Engineering in Computer Science",
      duration: "August 2023 - May 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "University of California, Berkeley",
      logo: require("./assets/images/UCBerkeleyLogo.png"),
      subHeader: "Bachelor of Arts in Data Science with domain in Economics",
      duration: "August 2019 - August 2022",
      desc: "Courses: Statistics, Deep Learning, Machine Learning, Econometrics, Database Management, Data Structures, Algorithms",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

/* Open Source Section to View Your Github Pinned Projects */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects and Hackathons 🏆",
  subtitle: ["An NGO that I helped to create the tech.",<br/>,'Hackathons, Certifications, Award Letters and Some Cool Stuff that I have done!'],
  projects: 
  [
    {
      image: require("./assets/images/LavenderLogo.jpeg"),
      projectName: "Lavender Alliance @ Berkeley",
      projectDesc: "Web Development for the LGBTQ+ organization.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.calavender.org"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/muyu.jpg"),
      projectName: "ETHGlobal - Web3 Development with React (JavaScript), HardHat (Solidity)",
      projectDesc: "Web3 Muyu (Wooden Fish) Meditation DApp allows users accumulate Gongde (virtue) by clicking on the icon. Users can mint NFTs with acquired gongde representing their spiritual journey and cultural engagement.",
      footerLink: [
        {
          name: "Project Demo",
          url: "https://annetta-zheng.github.io/blog/software%20engineering/hackthon/challenge/javascript/eth"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/AmexLogo.png"),
      projectName: "Kaggle - American Express Credict Card Default Prediction",
      projectDesc: "Predict the customer churn will default in the future with different classifiers including random forest, xgboost, and lightgbm.",
      footerLink: [
        {
          name: "Project Demo",
          url: "https://annetta-zheng.github.io/blog/data%20science/hackthon/challenge/amex"
        }
      ]
    },
    {
      image: require("./assets/images/EYdsLogo.png"),
      projectName: "EY DS Challenge - Frog Distribution Predictor",
      projectDesc: "A Frog species distribution model with Logistic Regression for environmental regulation and conservation.",
      footerLink: [
        {
          name: "Project Demo",
          url: "https://annetta-zheng.github.io/blog/data%20science/python/hackthon/challenge/frog-predictor"
        }
      ]
    },
    {
      image: require("./assets/images/jekyllLogo.png"),
      projectName: "Other Projects",
      projectDesc: "",
      footerLink: [
        {
          name: "View More",
          url: "https://annetta-zheng.github.io/project-list/"
        }
      ]
    },
    
  ]
  ,
  display: true // Set false to hide this section, defaults to true
};

// Work experience section
const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Hackathon Projects 🏆 "),
  subtitle:
    "Hackathons, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Web3 Development with React (JavaScript), HardHat (Solidity)",
      subtitle:
        "Web3 Muyu (Wooden Fish) Meditation DApp allows users accumulate Gongde (virtue) by clicking on the Muyu icon. When a specific amount of gongde is acquired, users can mint NFTs representing their spiritual journey and cultural engagement.",
      image: require("./assets/images/muyu.jpg"),
      imageAlt: "Muyu Logo",
      footerLink: [
        {
          name: "Project Demo",
          url: "https://annetta-zheng.github.io/blog/software%20engineering/hackthon/challenge/javascript/eth"
        },
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-6466602067",
  email_address: "annetta@berkeley.edu"
};

// hidden sections

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};


export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
