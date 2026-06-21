import {
  codeSVG,
  dataBaseSVG,
  designSVG,
  docker,
  nodeSVG,
} from '../assets/SVGs';

export const dataBase = [
  {
    key: 1,
    imgSrc: codeSVG,
    title: 'Tech Stack',
    desc: 'I make pages with React, sprinkles of CSS, and lots of love \u2764	',
  },
  {
    key: 2,
    imgSrc: designSVG,
    title: 'Web Design',
    desc: 'Mobile first, modern, clear and minimalist design',
  },
  {
    key: 3,
    imgSrc: nodeSVG,
    title: 'NodeJS',
    desc: 'Not just for show! Full fledged web apps built with Node',
  },
  {
    key: 5,
    imgSrc: docker,
    title: 'Containerized Applications',
    desc: 'Good knowledge of Docker, containerized applications and networking with multiple containers to allow for individual scalability using Docker Compose.',
  },
  {
    key: 4,
    imgSrc: dataBaseSVG,
    title: 'Safe Data',
    desc: 'Following industry standards, and best practices when handling data.',
  },
];

export const Projects = [
  {
    key: 1,
    projectName: 'Hagzee | Appointment App',
    desc: 'Hagzee is my latest fullstack web application, built with React/TypeScript, deployed to a vps with Docker. Hagzee is an appointment platform built to streamline the appointment process for anyone that needs to manage their appointments efficiently and online with a dedicated database.',
    projectImg: 'assets/project_hagzee.jpg',
    linkHref: 'https://hagzee.com/tjumaah',
    techStack: 'NextJS | PostgreSQL | Docker | TypeScript',
  },
  {
    key: 3,
    projectName: 'Etch-A-Sketch',
    desc: 'A canvas playground where you can draw pixel art, made with Vanilla JavaScript.',
    date: 'Nov-2022',
    projectImg: 'assets/project_sketch.jpg',
    linkHref: 'https://tahajumaah.github.io/Etch-A-Sketch-V.1.69/',
    techStack: 'JavaScript | HTML | CSS',
  },

  {
    key: 3,
    projectName: 'Dog Grooming Business Page',
    desc: 'A website showcasing the grooming salon, services, prices, details, and contact information; in the city of Klinec, made entirely with NextJS.',
    date: 'October-2023',
    projectImg: 'assets/project_pavlina.jpg',
    techStack: 'NextJS | React | CSS',
    linkHref: 'https://pavlina-dog-grooming.vercel.app/',
  },
  {
    key: 2,
    projectName: 'Memory Game',
    desc: 'A simple game created using React, simple, yet effective implementation of the React foundations. Do not tap on the same God more than once.',
    date: 'May-2023',
    projectImg: 'assets/project_god.jpg',
    techStack: 'React | JavaScript | CSS',
    linkHref: 'https://gods.tahajumaah.com',
  },
  {
    key: 3,
    projectName: 'Book Library',
    desc: "A simple book library where you can add books that you've read or would like to read, made with Vanilla JavaScript",
    date: 'Nov-2022',
    projectImg: 'assets/project_library.jpg',
    linkHref: 'https://tahajumaah.github.io/Book-Library/',
    techStack: 'JavaScript | HTML | CSS',
  },
];
