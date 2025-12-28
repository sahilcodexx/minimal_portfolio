import CSS from "@/technologies/Css";
import Figma from "@/technologies/Figma";
import Html from "@/technologies/Html";
import JavaScript from "@/technologies/JavaScript";
import TailwindCss from "@/technologies/TailwindCss";

const experience = [
  {
    company: "Zero Dimensions",
    position: "Frontend Developer Intern",
    location: "Ahmedabad, India (On-Site)",
    image:
      "https://ramx.in/_next/image?url=%2Fcompany%2Fpromote.png&w=256&q=75",
    description: [
      "Developed and maintained web applications using HTML, CSS, and JavaScript.",
      "Collaborated with cross-functional teams to deliver high-quality software on time.",
      "Design & Developed multiple websites for clients.",
    ],
    startDate: "June 2023",
    endDate: "July 2023",
    website: "https://flameloop.com",
    technologies: [
      {
        name: "HTML",
        href: "https://html.com/",
        icon: <Html />,
      },
      {
        name: "CSS",
        href: "https://css.com/",
        icon: <CSS />,
      },
      {
        name: "JavaScript",
        href: "https://javascript.com/",
        icon: <JavaScript />,
      },
      {
        name: "Figma",
        href: "https://figma.com/",
        icon: <Figma />,
      },
      {
        name: "TailwindCss",
        href: "https://getbootstrap.com/",
        icon: <TailwindCss />,
      },
    ],
    x: "https://zerodimensions.in",
    linkedin: "https://in.linkedin.com/company/zerodimensions",
  },
];

export default experience;
