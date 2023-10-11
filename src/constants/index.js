import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  infuzex,
  iiitm,
  carrent,
  jobit,
  tripguide,
  threejs,
  social,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
  {
    id: 'https://bit.ly/karthikvemula',
    title: 'Resume',
  },
];

const services = [
  {
    title: 'Fullstack Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Competative Programmer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Full stack Developer',
    company_name: 'Infuzex Ventures',
    icon: infuzex,
    iconBg: '#E6DEDD',
    date: 'Aug 2023 - Present',
    points: [
      'Developed and maintained a multi-level cross-language academics management system using React.js, NodeJS having 50,000+ registered users.',
      'Integrated 25+ REST APIs with the ReactJS. Developed efficient backend scripts for various user activities.',
      'Implemented responsive design and ensuring cross-browser compatibility.',
      'Participated in providing constructive ideas that lead to a scalable backend to exchange data using REST APIs',
    ],
  },
  {
    title: 'Research Intern',
    company_name: 'IIIT Gwalior',
    icon: iiitm,
    iconBg: '#383E56',
    date: 'May 2023 - Jul 2023',
    points: [
      'Developed a violence detection hybrid fusion model, by effectively combining spatial insights from CNNs',
      'Delivered an impressive 17% increase in accuracy.',
      'Implemented advanced 3D Convolutional Neural Networks to analyze dynamic spatiotemporal patterns',
      'Enhancing the precision and robustness of violence detection algorithms.',
    ],
  },
];

const projects = [
  {
    name: 'CLI-Application',
    description:
      'Command line based platform that allows users to search, add, and manage their key-value pairs, providing a convenient helper commands.',
    tags: [
      {
        name: 'nodejs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'commanderjs',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/KarthikSharma-7/cli-app',
  },
  {
    name: 'Portfolio Website',
    description: 'A Three.JS based personal portfolio application',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/KarthikSharma-7',
  },
  {
    name: 'Sharepic',
    description:
      'A social media web application, where users can share pictures with the followers. Authentication and Authorization are taken care of to keep the user identity private.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: social,
    source_code_link: 'https://github.com/KarthikSharma-7/Project-Frontend',
  },
];

export { services, technologies, experiences, projects };
