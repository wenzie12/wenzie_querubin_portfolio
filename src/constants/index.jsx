import { Github, Linkedin } from "lucide-react";  
import { colors } from '../themes/constants'
import {
  // tech
  bootstrap, css3, framerMotion, html5, javascript, typescript, nodejs, reactQuery, redux, reactjs, sass, tailwind,
  // design
  illustrator, xd, photoshop, figma,
  // general
  git, github_others,jira,
  // projects
  gomanilaLandingPage,
  // canstarLandingPage,
  manilaZooLandingPage,
  portfolioLandingPage,
  // downloadables,
  resumeFile,
  } from "../assets";

  export const LOGO_DATA = [
		{ fill: colors['accent-2'], fill_lt: colors['accent-2-lt'], class: "w-6 h-6", path: "opacity-60", delay: 1.2, duration: .3, },
		{ fill: colors['tertiary'], fill_lt: colors['tertiary-lt'], class: "w-8 h-8", path: "opacity-75", delay: 1, duration: .3, },
		{ fill: colors['secondary'], fill_lt: colors['secondary-lt'], class: "w-12 h-12", path: "opacity-100", delay: .5, duration: .3, },
		{ fill: colors['tertiary'], fill_lt: colors['tertiary-lt'], class: "w-8 h-8", path: "opacity-75", delay: .8, duration: .3, },
		{ fill: colors['accent-2'], fill_lt: colors['accent-2-lt'], class: "w-6 h-6", path: "opacity-60", delay: 1.2, duration: .3, },
	]
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  export const interests = [
    "Web Development",
    "UI Design/ Logo Design",
    "Wood Working",
    "Gaming",
    "Aquascaping",
    "Coffee",
  ]
    
  export const technologies = {
  tech: [
      { name: "HTML5", icon: html5, },
      { name: "CSS3", icon: css3, },
      { name: "JavaScript", icon: javascript, },
      { name: "Sass", icon: sass, },
      { name: "Bootstrap 5", icon: bootstrap, },
      { name: "Tailwind CSS", icon: tailwind, },
      { name: "Framer Motion", icon: framerMotion, },
      { name: "React JS", icon: reactjs, },
      { name: "TypeScript", icon: typescript, },
      { name: "Redux", icon: redux, },
      { name: "Node JS", icon: nodejs, },
      // TODO: add react-query, mui
      { name: "reactQuery", icon: reactQuery, },
    ],
    design: [
      { name: "Photoshop", icon: photoshop, },
      { name: "Illustrator", icon: illustrator, },
      { name: "Adobe XD", icon: xd, },
      { name: "Figma", icon: figma, },
    ],
    others: [
      { name: "git", icon: git, },
      { name: "github", icon: github_others, },
      { name: "jira", icon: jira, },
      // { name: "AGILE", icon: "", },
    ],
  }
  
  export const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Moreton Blue Software",
      company_summary: "a Brisbane based software company, delivering solutions for our clients using our embrace technology and methodology.",
      img_bg: gomanilaLandingPage,
      date: "Nov 2023 - Present",
      link: 'https://www.moretonblue.com/',
      points: [
        "Collaborated closely with cross-functional teams to gather client requirements, ensuring a comprehensive understanding of their business processes and objectives."
      ], // TODO: add more.. (at least 2 more...)
    },
    {
      title: "Frontend Software Engineer",
      company_name: "Multisys Technologies Corp.",
      company_summary: "Multisys is a software engineering solutions firm that provides a wide range, cost- effective, and full scale service to tailor-fit and empower businesses",
      img_bg: gomanilaLandingPage,
      date: "Jan 2021 - Nov 2023",
      link: 'https://www.multisyscorp.com/',
      points: [
        "Enhancing system quality by identifying issues and common patterns, and establishing standard operating procedures.",
        "Identifying opportunities for improvement, providing recommendations, and designing/implementing systems to enhance applications.",
        "Maintaining and creating new modules, as well as improving existing codebases through code reviews and changes.",
      ],
 
    },
    {
      title: "Fullstack Developer",
      company_name: "August 99, Inc.",
      company_summary: "August 99 is a startup incubator and business accelerator. With headquarters in Singapore and operational teams based in Manila, Philippines, we provide the hands-on mentorship, resources, network, and environment entrepreneurs need to launch, fund, and grow their startups globally and in the region.",
      img_bg: "",
      date: "Aug 2019 - Dec 2020",
      link: "https://august99.com/",
      points: [
        "Collaborating with the SEO and Digital team to continuously improve and develop features that drive project traffic and conversion.",
        "Contributing to strategic planning, project delivery, and engagement with the team and product owners.",
        "Delivering added features, providing support and bug fixes, conducting code reviews, and handling business-as-usual (BAU) requests.",
      ],
    },
    {
      title: "Associate Software Developer (Internship)",
      company_name: "Accenture Inc",
      company_summary: "Accenture , inc. is a multinational professional services company that provides services in strategy, consulting, digital, technology and operations.",
      img_bg: "",
      link: "https://www.accenture.com/ph-en",
      date: "Nov 2018 - Feb 2019",
      points: [
        "Assisted in the daily monitoring of the client's database records.",
        "Contributed to updating, debugging, and programming tracking codes, and participated in stage testing.",
      ],
    },
  ];
    
  export const projects = [
    {
      name: "GoManila App",
      description:
        "An electronic Business Permit and Licensing System that allows taxpayers to pay their Business Taxes and secure business permits online or thru mobile app.",
      image: gomanilaLandingPage,
      imageMobile: "", 
      source_code_link: "",
      appstore: "https://apps.apple.com/us/app/gomanila/id1533414915",
      playstore: "https://play.google.com/store/apps/details?id=net.gomanila.app&hl=en&gl=US",
      website: "https://www.gomanila.com/",
      tags: [
        {
          name: "react",
          color: "",
        },
        {
          name: "bootstrap",
          color: "",
        },
        {
          name: "redux",
          color: "",
        },
      ],
    },
    {
      name: "Manila Zoo Ticket System",
      description:
        "The Manila Zoo Ticketing System is an online ticket booking system that enables you to purchase your entrance ticket online as well as book your visit to the park.",
      image: manilaZooLandingPage,
      imageMobile: "", 
      source_code_link: "",
      appstore: "",
      playstore: "https://play.google.com/store/apps/details?id=com.LotDesigns.ManilaZooBotanicalGarden&hl=en&gl=US",
      website: "https://www.manilazoo.ph/",
      tags: [
        {
          name: "react",
          color: "",
        },
        {
          name: "tailwind",
          color: "",
        },
        {
          name: "redux",
          color: "",
        },
      ],
    },
      // {
    //   name: "Canstar",
    //   description: "Canstar is Australia's original & biggest financial comparison site. Our expert ratings help you compare Home Loans, Credit Cards, Health Insurance & more.",
    //   image: canstarLandingPage,
    //   imageMobile: "", 
    //   appstore: "",
    //   playstore: "",
    //   source_code_link: "",
    //   website: "https://www.canstar.com.au/",
    //   tags: [
    //     {
    //       name: "angular",
    //       color: "",
    //     },
    //     {
    //       name: "bootstrap",
    //       color: "",
    //     },
    //     {
    //       name: "typescript",
    //       color: "",
    //     },
    //     {
    //       name: "wordpress",
    //       color: "",
    //     },
    //   ],
    // },
    {
      name: "My Portfolio",
      description: "My personal portfolio, which I've developed to showcase the skills and projects I've worked on throughout my development journey. The technologies I've used include Vite, ReactJS, Framer Motion, and Tailwind.",
      image: portfolioLandingPage,
      imageMobile: "", 
      appstore: "",
      playstore: "",
      source_code_link: "https://github.com/wenzie12/wenzie_querubin_portfolio/tree/main",
      website: "https://www.wenziequerubin.com",
      tags: [
        {
          name: "reactjs",
          color: "",
        },
        {
          name: "tailwind",
          color: "",
        },
        {
          name: "framer motion",
          color: "",
        },
        {
          name: "context api",
          color: "",
        },
      ],
    },
  ];

  export const contacts = {
    email: "wenzie12sg@gmail.com",
    subject: "Hello Wenzie!" ,
    body: "",
    links: {
      linkedin: "https://www.linkedin.com/in/wenzie-querubin/",
      github: "https://github.com/wenzie12/",
      codepen: "https://codepen.io/wenzie12",
      facebook: "",
      instagram: "",
      twitter: "",
    },
  }

  export const social_links = [
    // {
    //   name: "Facebook",
    //   icon: (props) => <Facebook {...props} />,
    //   link: contacts?.links.facebook,
    // },
    // {
    //   name: "Codepen",
    //   icon: (props) => <Codepen {...props} />,
    //   link: contacts?.links.codepen,
    // },
    {
      name: "Linkedin",
      icon: (props) => <Linkedin {...props} />,
      link: contacts?.links.linkedin,
    },
    {
      name: "Github",
      icon: (props) => <Github {...props} />,
      link: contacts?.links.github,
    },
  ]

  export const downloadables = {
    resume: resumeFile
  }