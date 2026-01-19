import ReactJs from "@/svgs/ReactJs";
import FramerMotion from "@/technologies/FramerMotion";
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
      github: "https://github.com/sahil-coder-2070/ai-recipe",
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
      github: "https://github.com/sahil-coder-2070/movie-app",
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
