import ReactJs from "@/svgs/ReactJs";
import JavaScript from "@/technologies/JavaScript";

export const ProjectCardData = [
  {
    id: 1,
    title: "ChefyAi",
    img: {
      src: "./projects/project1.webp",
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
    isWorking: false,
    details: true,
    projectDetailsPageSlug: "/projects/fest-x",
  },
  {
    id: 2,
    title: "ChefyAi",
    img: {
      src: "./projects/project2.webp",
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
    isWorking: false,
    details: true,
    projectDetailsPageSlug: "/projects/fest-x",
  },
];
