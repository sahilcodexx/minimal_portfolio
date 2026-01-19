import ReactJs from "@/svgs/ReactJs";
import FramerMotion from "@/technologies/FramerMotion";
import JavaScript from "@/technologies/JavaScript";
import TailwindCss from "@/technologies/TailwindCss";

export const ProjectCardData = [
  {
    id: 1,
    title: "ChefyAi",
    img: {
      src: "/projects/project1.webp",
      alt: "ChefyAi project image",
      width: 1920,
      height: 1080,
    },
    description:
      "ChefyAi is an AI-powered recipe generator that helps users quickly discover and create recipes based on their inputs and preferences. It combines a modern frontend with seamless AI integration for instant, personalized cooking suggestions.",
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
    title: "FindMovie",
    img: {
      src: "./projects/project2.webp",
      alt: "FindMovie project image",
      width: 1920,
      height: 1080,
    },
    description:
      "FindMovie is a modern movie discovery web app that allows users to search and explore movies instantly. It provides detailed movie information using a clean UI and real-time data fetching for a smooth browsing experience.",
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
    ],
    isWorking: false,
    details: true,
    projectDetailsPageSlug: "/projects/findmovie",
  },
];
