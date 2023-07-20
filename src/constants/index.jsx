/* eslint-disable no-unused-vars */
import { Github, Linkedin, } from "lucide-react";  
import { SECONDARY_COLOR, TERTIARY_COLOR, ACCENT_2_COLOR, } from '../themes/constants'
import {
  // tech
  bootstrap, css3, framerMotion, html5, javascript, typescript, nodejs, redux, reactjs, sass, tailwind,
  // design
  illustrator, xd, photoshop, figma,
  // general
  git, github_others,jira,
  // projects
  gomanilaLandingPage,
  // canstarLandingPage,
  manilaZooLandingPage,
  // downloadables,
  resumeFile,
  } from "../assets";

  export const LOGO_DATA = [
		{ fill: ACCENT_2_COLOR, class: "w-6 h-6", path: "opacity-60", delay: 1.2, duration: .3, },
		{ fill: TERTIARY_COLOR, class: "w-8 h-8", path: "opacity-75", delay: 1, duration: .3, },
		{ fill: SECONDARY_COLOR, class: "w-12 h-12", path: "opacity-100", delay: .5, duration: .3, },
		{ fill: TERTIARY_COLOR, class: "w-8 h-8", path: "opacity-75", delay: .8, duration: .3, },
		{ fill: ACCENT_2_COLOR, class: "w-6 h-6", path: "opacity-60", delay: 1.2, duration: .3, },
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

  const interests = [
    "Web Development",
    "UI Design",
    "Wood Working",
    "Gaming",
    "Aquascaping",
    "Coffee",
  ]
    
  const technologies = {
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
  
  const experiences = [
    {
      title: "Frontend Software Engineer",
      company_name: "Multisys Technologies Corp.",
      company_summary: "Multisys is a software engineering solutions firm that provides a wide range, cost- effective, and full scale service to tailor-fit and empower businesses",
      img_bg: gomanilaLandingPage,
      date: "Jan 2021 - Present",
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
    
  const projects = [
    {
      name: "GoManila App",
      description:
        "An electronic Business Permit and Licensing System that allows taxpayers to pay their Business Taxes and secure business permits online or thru mobile app.",
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
      image: gomanilaLandingPage,
      imageMobile: "", 
      source_code_link: "",
      appstore: "https://apps.apple.com/us/app/gomanila/id1533414915",
      playstore: "https://play.google.com/store/apps/details?id=net.gomanila.app&hl=en&gl=US",
      website: "https://www.gomanila.com/"
    },
    {
      name: "Manila Zoo Ticket System",
      description:
        "The Manila Zoo Ticketing System is an online ticket booking system that enables you to purchase your entrance ticket online as well as book your visit to the park.",
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
      image: manilaZooLandingPage,
      imageMobile: "", 
      source_code_link: "",
      appstore: "",
      playstore: "https://play.google.com/store/apps/details?id=com.LotDesigns.ManilaZooBotanicalGarden&hl=en&gl=US",
      website: "https://www.manilazoo.ph/"
    },
    // {
    //   name: "Canstar",
    //   description:
    //     "Canstar is Australia's original & biggest financial comparison site. Our expert ratings help you compare Home Loans, Credit Cards, Health Insurance & more.",
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
    //   image: canstarLandingPage,
    //   imageMobile: "", 
    //   appstore: "",
    //   playstore: "",
    //   source_code_link: "",
    //   website: "https://www.canstar.com.au/"
    // },
  ];

  const contacts = {
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

  const social_links = [
    // {
    //   name: "facebook",
    //   icon: facebook,
    //   link: contacts?.links.facebook,
    // },
    // {
    //   name: "codepen",
    //   icon: codepen,
    //   link: contacts?.links.codepen,
    // },
    {
      name: "linkedin",
      icon: (props) => <Linkedin {...props} />,
      link: contacts?.links.linkedin,
    },
    {
      name: "github",
      icon: (props) => <Github {...props} />,
      link: contacts?.links.github,
    },
  ]

  const downloadables = {
    resume: resumeFile
  }

  export {
    social_links,
    interests,
    technologies,
    experiences,
    projects,
    contacts,
    downloadables,
  };