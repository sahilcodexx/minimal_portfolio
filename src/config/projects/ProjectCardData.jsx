import ReactJs from "@/svgs/ReactJs";
import FramerMotion from "@/technologies/FramerMotion";
import Gsap from "@/technologies/Gsap";
import JavaScript from "@/technologies/JavaScript";
import NextJs from "@/technologies/NextJS";
import TailwindCss from "@/technologies/TailwindCss";
import TypeScript from "@/technologies/TypeScript";
import Vite from "@/technologies/Vite";

export const ProjectCardData = [
  {
    id: 1,
    title: "Image Editor AI",
    img: {
      src: "/projects/image-editor-ai.webp",
      alt: "Image Editor AI project image",
      width: 1920,
      height: 1080,
    },
    description:
      "Image Editor AI is an open-source AI-powered image editing tool built with Next.js. It provides an interface to apply intelligent edits using modern AI models and image processing features, allowing users to manipulate and transform images efficiently.",
    links: {
      website: "https://github.com/sahilcodexx/Image-Editor-AI",
      github: "https://github.com/sahilcodexx/Image-Editor-AI",
      details: "/projects/imageeditorai",
    },
    technologies: [
      {
        name: "TypeScript",
        icon: <TypeScript />,
        href: "https://www.typescriptlang.org/"
      },
      {
        name: "Next.js",
        icon: <NextJs />,
        href: "https://nextjs.org/"
      },
      {
        name: "React",
        icon: <ReactJs />,
        href: "https://reactjs.org/"
      },
      {
        name: "TailwindCSS",
        icon: <TailwindCss />,
        href: "https://tailwindcss.com/"
      },
    ],
    isWorking: false,
    isBulding: true,
    details: true,
    projectDetailsPageSlug: "/projects/imageeditorai",
  },
  {
    id: 2,
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
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        name: "React",
        icon: <ReactJs />,
        href: "https://reactjs.org/"
      },
      {
        name: "TailwindCSS",
        icon: <TailwindCss />,
        href: "https://tailwindcss.com/"
      },
      {
        name: "Framer Motion",
        icon: <FramerMotion />,
        href: "https://www.framer.com/motion/"
      },
    ],
    isWorking: true,
    isBulding: false,

    details: true,
    projectDetailsPageSlug: "/projects/chefyai",
  },

  {
    id: 3,
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
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        name: "GSAP",
        icon: <Gsap />,
        href: "https://greensock.com/gsap/"
      },
      {
        name: "TailwindCSS",
        icon: <TailwindCss />,
        href: "https://tailwindcss.com/"
      },
      {
        name: "Vite",
        icon: <Vite />,
        href: "https://vitejs.dev/"
      },
    ],
    isWorking: true,
    isBulding: false,

    details: true,
    projectDetailsPageSlug: "/projects/nova",
  },
  {
    id: 4,
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
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        name: "React",
        icon: <ReactJs />,
        href: "https://reactjs.org/"
      },
      {
        name: "TailwindCSS",
        icon: <TailwindCss />,
        href: "https://tailwindcss.com/"
      },
      {
        name: "Vite",
        icon: <Vite />,
        href: "https://vitejs.dev/"
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: "/projects/findmovie",
  },
];
