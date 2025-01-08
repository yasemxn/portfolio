/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yasemin's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact. ",
  og: {
    title: "Yasemin Karaca Portfolio",
    type: "website",
    url: "http://yasemxn.github.io/portfolio10",
  },
};

//Home Page
const greeting = {
  title: "Yasemin Karaca",
  logo_name: "Yasemin Karaca",
  subTitle:
    "Motivated graduate with a BSc in Computer Engineering and an MSc in Data Science and AI. I bring strong programming, systems design, and problem-solving skills, along with a structured, collaborative work style. My academic knowledge has been applied in real-world projects, contributing to successful projects, and I'm excited to embrace new challenges in the area.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/yasemxn",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/yasemxn",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yaseminkaracaa/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:yaseminxkaraca@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing AI-driven solutions, applying machine learning models and data analytics to solve complex problems",
        "⚡ Experience of working with Explaineble AI and Recommendation Systems",
        "⚡ Extracting actionable insights from large datasets using advanced statistical and analytical techniques.",
        "⚡ Designing algorithms and workflows to streamline operations and enhance decision-making through automation.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Pandas",
          fontAwesomeClassname: "logos-pandas",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
          skillName: "Git",
          fontAwesomeClassname: "logos-git",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Software Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed applications like chat systems with Swift UI and Firebase, integrating secure authentication and real-time messaging features.",
        "⚡ Enhanced UI/UX for iOS apps and implemented efficient algorithms using technologies like MVVM architecture and peer-to-peer connections.",
        "⚡ Worked with Agile teams to deliver tailored solutions, ensuring seamless functionality through unit testing and debugging",
      ],
      softwareSkills: [
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "Swift",
          fontAwesomeClassname: "simple-icons:swift",
          style: {
            color: "#02569B",
          },
        },

        {
          skillName: "XCode",
          fontAwesomeClassname: "simple-icons:xcode",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "simple-icons:solidity",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Computer Engineer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experienced with working on Arduino Microcontroller, using C++",
        "⚡ Applied image processing techniques to extract critical information from visual data, such as analysing construction maps to determine building heights and spatial arrangements.",
        "⚡ Developed scalable system architectures for peer-to-peer applications, implementing efficient file transfer protocols using Python and TCP for robust data sharing.",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "logos-c",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Visual Studio",
          fontAwesomeClassname: "logos-visual-studio",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Blender",
          fontAwesomeClassname: "logos-blender",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "logos-arduino",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Networks",
          fontAwesomeClassname: "logos-wifi",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Bournemouth University",
      subtitle: "MSc. in Data Science and Artificial Intelligence",
      logo_path: "bu.png",
      alt_name: "Bournemouth University",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ Studied advanced subjects such as Search and Optimisation, Artificial Intelligence, Data Processing and Analytics, Smart Systems, and Blockchain & Digital Futures.",
        "⚡ My thesis was supported by Google US, focused on 'GENERATIVE AI IN THE ENTERPRISE AS A CO-WORKER FOR TECH SUPPORT'.",
        "⚡ Achieved academic excellence with a scholarship and graduated with distinction.",
      ],
      website_link:
        "https://www.bournemouth.ac.uk/study/courses/msc-data-science-artificial-intelligence",
    },
    {
      title: "Bahcesehir University",
      subtitle: "BSc. in Computer Engineering",
      logo_path: "bau.png",
      alt_name: "Bahcesehir University",
      duration: "2018 - 2023",
      descriptions: [
        "⚡ Gained expertise in algorithms, data structures, software development, and computer systems through hands-on lab experience.",
        "⚡ Completed coursework in programming languages such as C++ and Java, alongside subjects like Data Structures and Algorithms, Computer Organisation, Computer Networks, Operating Systems, Embedded Systems, and Database Management Systems.",
        "⚡ Achieved Honour Roll recognition five times during my bachelor's degree, showcasing my dedication, time management and consistent academic excellence.",
      ],
      website_link: "https://bau.edu.tr/content/3882-computer-engineering",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Career Essentials in Data Analysis by Microsoft and LinkedIn",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/a584d3c9af87ee5122e84b5580f76f81374f5194c4dae5da13e47b6548b2d05d",
      alt_name: "Microsoft",
      color_code: "#8C151599",
    },
    {
      title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/92b1d9dfc8a2038225fe6ffb883f2ae0b3a7850e1f0f1807e58a5b6e40ab001c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BYczmetqgRqGQcJJ9rdJdTQ%3D%3D",
      alt_name: "Microsoft",
      color_code: "#00000099",
    },
    {
      title: "Google Analytics for Beginners",
      subtitle: "- Google",
      logo_path: "google_logo.png",

      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Python Programming Bootcamp",
      subtitle: "- THK",
      logo_path: "utaa.png",
      certificate_link:
        "https://drive.google.com/file/d/12AINIzE6MTFcRSGYJ-7dXNptV9gGVIt6/view?usp=sharing",
      alt_name: "THK",
      color_code: "#1F70C199",
    },
    {
      title: "International English Language Testing System",
      subtitle: "- British Council",
      logo_path: "british.jpg",
      alt_name: "IELTS Score: 7.0/9.0",
      color_code: "#D83B0199",
    },
    {
      title: "Information Technologies Summit",
      subtitle: "- Istanbul Technical University",
      logo_path: "itu-logo-white.png",

      alt_name: "Istanbul Technical University",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  description:
    "I have worked with evolving startups as Software Developer, Data Analyst. I have also worked with a well established company as Project Researcher.",
  header_image_path: "experience.svg",

  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Project Researcher",
          company: "Google US",
          company_url: "https://www.linkedin.com/company/google/about/",
          logo_path: "google_logo.png",
          duration: "May 2024 - Sep 2024",
          location: "Bournemouth, UK",
          description:
            "Developed a hybrid AI-human model for tech support using the OODA loop framework, enhancing decision-making, response times, and customer satisfaction. Applied Explainable AI (XAI) methodologies to ensure transparency and foster collaboration between AI systems and engineers, while optimizing data schemas and machine learning models to automate and streamline support tasks.",
          color: "#000000",
        },
        {
          title: "Data Analyst",
          company: "Konak Fasteners",
          company_url:
            "https://www.linkedin.com/company/konak-fasteners/about/",
          logo_path: "konakcivata.png",
          duration: "Dec 2022 - June 2023",
          location: "Istanbul, Turkiye",
          description:
            "Created and maintained interactive Power BI dashboards to drive data-informed decisions, ensuring data accuracy through cleaning, transformation, and validation using SQL and Excel. Assisted in data modeling and statistical analysis to identify trends and optimize business processes, while collaborating with Agile teams to define KPIs and deliver tailored data solutions aligned with organizational goals.",
          color: "#0879bf",
        },
        {
          title: "Software Developer",
          company: "Orion Innovation",
          company_url:
            "https://www.linkedin.com/company/orioninnovation/about/",
          logo_path: "orion.png",
          duration: "Feb 2022 - June 2022",
          location: "Istanbul, Turkiye",
          description:
            "Led front-end development of an iOS app using Swift in Xcode, enhancing UI/UX. Developed a chat application with Firebase and MVVM architecture, ensuring scalable, maintainable code and real-time communication. Improved software quality through bug fixes, unit testing, and research on peer-to-peer connections to optimize network performance.",
          color: "#9b1578",
        },
        {
          title: "Software Developer",
          company: "Ambeent AI",
          company_url: "https://www.linkedin.com/company/ambeent/about/",
          logo_path: "ambeent.png",
          duration: "Feb 2021 - June 2021",
          location: "Istanbul, Turkiye",
          description:
            "Conducted user test analysis on optimized modems, identifying areas for improvement and informing product enhancements. Supported backend development for a Google Chrome extension app, improving functionality and user interaction. Prepared daily and weekly reports to ensure consistent project tracking and stakeholder communication. Additionally, performed extensive research on modem models, providing valuable insights to guide product development strategies.",
        },
      ],
    },
  ],
};
// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here, you'll find a collection of my work spanning diverse domains such as software development, data analysis, and innovative AI solutions. These projects highlight my journey of tackling real-world challenges, building scalable applications, and contributing to impactful solutions. From designing cutting-edge mobile applications to applying machine learning for smarter decision-making, each project reflects my passion for technology and commitment to excellence. Dive in to explore my creative and technical pursuits that merge functionality with innovationy projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "exploring-ai-mindset",
      name:
        "AI-Powered Procedural Content Generation: Enhancing NPC Behaviour for an Immersive Gaming Experience",
      createdAt: "2023-11-15T00:00:00Z",
      description:
        "Explores AI integration with procedural content generation (PCG) in video games, focusing on enhancing NPC behaviors, adaptive environments, and immersive interactions using techniques like reinforcement learning and deep learning for dynamic, personalised experiences.",
      url: "https://osf.io/preprints/psyarxiv/8pt4q",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Resume",
    profile_image_path: "animated_ashutosh.png",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
