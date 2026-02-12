import Container from "../layouts/Container";
import SectionHeading from "../common/SectionHeading";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Link } from "react-router-dom";
import {
  ReactIcon,
  Bun,
  NodeJs,
  JavaScript,
  MongoDB,
  ExpressJs,
  Css,
  Figma,
  FramerMotion,
  Gsap,
  Html,
  NextJS,
  PostgreSQL,
  Prisma,
  TailwindCss,
  TypeScript,
  Vite,
  Github,
  LinkedIn,
  Mail,
  Website,
  X,
} from "@/lib/techIcons";

const TechSkills = () => {
  return (
    <Container className={`mt-30`}>
      <SectionHeading subHeading={"About"} heading={"Me"} />
      <div className="mt-8 flex flex-col gap-5 md:flex-row">
        {SkillsList.map((items) => {
          return (
            <Tooltip key={items.title}>
              <TooltipTrigger>
                <div>{items.icon} </div>
              </TooltipTrigger>
              <TooltipContent>{items.title}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </Container>
  );
};

export default TechSkills;

const SkillsList = [
  {
    title: "React",
    icon: <ReactIcon />,
    href: "https://reactjs.org/",
  },
  {
    title: "JavaScript",
    icon: <JavaScript />,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "Bun",
    icon: <Bun />,
    href: "https://bun.sh/",
  },
  {
    title: "Node Js",
    icon: <NodeJs />,
    href: "https://nodejs.org/",
  },
  {
    title: "Express Js",
    icon: <ExpressJs />,
    href: "https://expressjs.com/",
  },
  {
    title: "MongoDB",
    icon: <MongoDB />,
    href: "https://www.mongodb.com/",
  },
  {
    title: "CSS",
    icon: <Css />,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "Figma",
    icon: <Figma />,
    href: "https://www.figma.com/",
  },
  {
    title: "Framer Motion",
    icon: <FramerMotion />,
    href: "https://www.framer.com/motion/",
  },
  {
    title: "GSAP",
    icon: <Gsap />,
    href: "https://greensock.com/gsap/",
  },
  {
    title: "HTML",
    icon: <Html />,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    title: "NextJS",
    icon: <NextJS />,
    href: "https://nextjs.org/",
  },
  {
    title: "PostgreSQL",
    icon: <PostgreSQL />,
    href: "https://www.postgresql.org/",
  },
  {
    title: "Prisma",
    icon: <Prisma />,
    href: "https://www.prisma.io/",
  },
  {
    title: "Tailwind CSS",
    icon: <TailwindCss />,
    href: "https://tailwindcss.com/",
  },
  {
    title: "TypeScript",
    icon: <TypeScript />,
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "Vite",
    icon: <Vite />,
    href: "https://vitejs.dev/",
  },
  {
    title: "GitHub",
    icon: <Github />,
    href: "https://github.com/",
  },
  {
    title: "LinkedIn",
    icon: <LinkedIn />,
    href: "https://linkedin.com/",
  },
  {
    title: "Email",
    icon: <Mail />,
    href: "mailto:your-email@example.com",
  },
  {
    title: "Website",
    icon: <Website />,
    href: "https://your-website.com",
  },
  {
    title: "X (Twitter)",
    icon: <X />,
    href: "https://twitter.com/",
  },
];
