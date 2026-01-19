import ReactJs from "@/svgs/ReactJs";
import FramerMotion from "@/technologies/FramerMotion";
import Gsap from "@/technologies/Gsap";
import JavaScript from "@/technologies/JavaScript";
import TailwindCss from "@/technologies/TailwindCss";
import Vite from "@/technologies/Vite";

export const ProjectCardData = [
  {
    id: 1,
    title: "ChefyAI",
    img: {
      src: "/projects/project1.webp",
      alt: "ChefyAI project image",
      width: 1920,
      height: 1080,
    },
    description:
      "ChefyAI is an AI-powered recipe generator that lets users instantly create personalized recipes based on their input. It combines a modern frontend with seamless AI integration for a smooth and engaging user experience.",
    links: {
      website: "https://chefyai.vercel.app/",
      github: "https://github.com/sahilcodexx/ai-recipe",
      details: "/projects/chefyai",
    },
    technologies: [
      {
        name: "JavaScript",
        icon: <JavaScript />,
      },
      {
        name: "React",
        icon: <ReactJs />,
      },
      {
        name: "TailwindCSS",
        icon: <TailwindCss />,
      },
      {
        name: "Framer Motion",
        icon: <FramerMotion />,
      },
    ],
    isWorking: true,
    details: true,
    projectDetailsPageSlug: "/projects/chefyai",
  },

  {
    id: 2,
    title: "Nova Gaming",
    img: {
      src: "/projects/project3.webp",
      alt: "Nova Gaming GSAP animated project image",
      width: 1920,
      height: 1080,
    },
    description:
      "Nova Gaming is an interactive, animation-driven web experience built using GSAP. It focuses on smooth scroll-based animations, cinematic transitions, and modern UI motion to deliver an immersive frontend experience with high performance and responsiveness.",
    links: {
      website: "https://nova-gsap.vercel.app/",
      github: "https://github.com/sahilcodexx/nova-gsap",
      details: "/projects/findmovie",
    },
    technologies: [
      {
        name: "JavaScript",
        icon: <JavaScript />,
      },
      {
        name: "GSAP",
        icon: <Gsap />,
      },
      {
        name: "TailwindCSS",
        icon: <TailwindCss />,
      },
      {
        name: "Vite",
        icon: <Vite />,
      },
    ],
    isWorking: true,
    details: true,
    projectDetailsPageSlug: "/projects/nova",
  },
  {
    id: 3,
    title: "Movie Finder",
    img: {
      src: "/projects/project2.webp",
      alt: "Movie Finder project image",
      width: 1920,
      height: 1080,
    },
    description:
      "Movie Finder is a React web app that allows users to search, browse, and discover movies instantly. It fetches real-time movie data from the TMDB API and presents it in a clean, responsive UI for seamless exploration.",
    links: {
      website: "https://find-moviename.vercel.app/",
      github: "https://github.com/sahilcodexx/movie-app",
      details: "/projects/findmovie",
    },
    technologies: [
      {
        name: "JavaScript",
        icon: <JavaScript />,
      },
      {
        name: "React",
        icon: <ReactJs />,
      },
      {
        name: "TailwindCSS",
        icon: <TailwindCss />,
      },
      {
        name: "Vite",
        icon: <Vite />,
      },
    ],
    isWorking: true,
    details: true,
    projectDetailsPageSlug: "/projects/findmovie",
  },
];
