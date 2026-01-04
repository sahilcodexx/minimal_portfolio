import ReactJs from "@/svgs/ReactJs";
import JavaScript from "@/technologies/JavaScript";

export const ProjectCardData = [
  {
    id: 1,
    title: "ChefyAi",
    img: {
      src: "https://ramx.in/_next/image?url=%2Fproject%2Fnotesbuddy.png&w=1920&q=75",
      alt: "ChefyAi project image",
      width: 1920,
      height: 1080,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia rerum officiis",
    links: {
      website: "https://chefyai.com",
      github: "https://github.com/username/chefyai",
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
    ],
    isWorking: true,
    details: true,
    projectDetailsPageSlug: "/projects/that-startup",
  },
  {
    id: 1,
    title: "ChefyAi",
    img: {
      src: "https://ramx.in/_next/image?url=%2Fproject%2Fnotesbuddy.png&w=1920&q=75",
      alt: "ChefyAi project image",
      width: 1920,
      height: 1080,
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia rerum officiis",
    links: {
      website: "https://chefyai.com",
      github: "https://github.com/username/chefyai",
      details: "/projects/chefyai",
    },
    technologies: [
      {
        name: "JavaScript",
        icon: <JavaScript />, // or import the icon component directly
      },
      {
        name: "React",
        icon: <ReactJs />,
      },
    ],
    isWorking: true,
    details: true,
    projectDetailsPageSlug: "/projects/fest-x",
  },
];
