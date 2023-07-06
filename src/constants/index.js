  import {
  // *tech
  bootstrap,
  css3,
  framerMotion,
  html5,
  javascript,
  nodejs,
  redux,
  reactjs,
  sass,
  tailwind,
  // *design
  illustrator,
  xd,
  photoshop,
  figma,
  // *general
  git,
  github_others,
  jira,
  
  // projects
  gomanilaLandingPage,
  gomanilaLoginPageMobile,
  canstarLandingPage,
  manilaZooLandingPage,
  manilaZooLandingPageMobile,
  // bg
  multisysBg,

  // social
  facebook,
  linkedin,
  github,

  } from "../assets";
  
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
  
  const services = [
    {
      title: "Web Developer",
      // icon: web,
      icon: "",
    },
    {
      title: "React Native Developer",
      // icon: mobile,
      icon: "",
    },
    {
      title: "Backend Developer",
      // icon: backend,
      icon: "",
    },
    {
      title: "Content Creator",
      // icon: creator,
      icon: "",
    },
  ];

  const interests = [
    "UI Design",
    "Web Development",
    "Gaming",
    "Wood Working",
    "Aquascaping",
    "Sleeping",
    "Burger",
    "Pasta",
    "Coffee",
  ]
  
  const technologies = {
  tech: [
      { name: "HTML5", icon: html5, },
      { name: "CSS3", icon: css3, },
      { name: "JavaScript", icon: javascript, },
      // { name: "TypeScript", icon: "", },
      { name: "Sass", icon: sass, },
      { name: "Bootstrap 5", icon: bootstrap, },
      { name: "Tailwind CSS", icon: tailwind, },
      { name: "Framer Motion", icon: framerMotion, },
      { name: "React JS", icon: reactjs, },
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
      title: "Front End Software Engineer",
      company_name: "Multisys Technologies Corp.",
      company_summary: "Multisys is a software engineering solutions firm that provides a wide range, cost- effective, and full scale service to tailor-fit and empower businesses",
      img_bg: gomanilaLandingPage,
      date: "Jan 2021 - Present",
      link: 'https://www.multisyscorp.com/',
      points: [
        "Improving system quality by identifying issues and common patierns, and developing standard operating procedures.",
        "Enhancing applications by identifying opportunities for improvement, making recommendations and designing and implementing systems.",
        "Maintaining, creating new modules, and improving existing codebases & peer review code changes.",
      ],
 
    },
    {
      title: "Fullstack Developer",
      company_name: "August 99, Inc.",
      company_summary: "August 99 is a startup incubator and business accelerator. With headquarters in Singapore and operational teams based in Manila, Philippines, we provide the hands-on mentorship, resources, network, and environment entrepreneurs need to launch, fund, and grow their startups globally and in the region.",
      img_bg: multisysBg,
      date: "Aug 2019 - Dec 2020",
      link: "https://august99.com/",
      points: [
        "Work with SEO & Digital team to continuesly improve and develop features that will help drive traffic and corversion to the project.",
        "Contribute to strategic planning and delivery of projects and engagement with the team and product owners.",
        "Provides added features, support/fixes for bugs, Code Revievws & business as usual (BAU) requests.",
      ],
    },
    {
      title: "Associate Software Developer (Internship)",
      company_name: "Accenture Inc",
      company_summary: "Accenture , inc. is a multinational professional services company that provides services in strategy, consulting, digital, technology and operations.",
      img_bg: multisysBg,
      link: "https://www.accenture.com/ph-en",
      date: "Nov 2018 - Feb 2019",
      points: [
        "Provided assistance in daily monitoring of client’s database record.",
        "Contributed in updating, debugging and programming tracking codes and stage testing.",
      ],
    },
  ];
  
  // not in use yet
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const social_links = [
    // {
    //   name: "facebook",
    //   icon: facebook,
    //   link: "",
    // },
    {
      name: "linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/in/wenzie-querubin/",
    },
    {
      name: "github",
      icon: github,
      link: "https://github.com/wenzie12/",
    },
  ]
  
  const projects = [
    {
      name: "GoManila App",
      description:
        "An electronic Business Permit and Licensing System that allows taxpayers to pay their Business Taxes and secure business permits online. Local Civil Registry.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: gomanilaLandingPage, // temporary image placeholder
      imageMobile: gomanilaLoginPageMobile, 
      source_code_link: "",
      appstore: "https://apps.apple.com/us/app/gomanila/id1533414915",
      playstore: "https://play.google.com/store/apps/details?id=net.gomanila.app&hl=en&gl=US",
      website: "https://www.gomanila.com/"
    },
    {
      name: "Manila Zoo Ticket System",
      description:
        "The Manila Zoological and Botanical Garden is the only public zoo in the City of Manila it first opened on July 25, 1959 during the tenure of Manila Mayor Arsenio H. Lacson.",
      tags: [
        {
          name: "react",
          // color: "blue-text-gradient",
          color: "#61DBFB"
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "context API",
          color: "blue-text-gradient",
        },
      ],
      image: manilaZooLandingPage, // temporary image placeholder
      imageMobile: manilaZooLandingPageMobile, 
      source_code_link: "",
      appstore: "",
      playstore: "https://play.google.com/store/apps/details?id=com.LotDesigns.ManilaZooBotanicalGarden&hl=en&gl=US",
      website: "https://www.manilazoo.ph/"
    },
    {
      name: "Canstar",
      description:
        "Canstar is Australia's original & biggest financial comparison site. Our expert ratings help you compare Home Loans, Credit Cards, Health Insurance & more.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "wordpress",
          color: "pink-text-gradient",
        },
      ],
      image: canstarLandingPage,
      imageMobile: "", 
      appstore: "",
      playstore: "",
      source_code_link: "",
      website: "https://www.canstar.com.au/"
    },
  ];
  
  export { social_links, services, interests, technologies, experiences, testimonials, projects };