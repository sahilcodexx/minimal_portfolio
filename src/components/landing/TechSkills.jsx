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
  Shadcn,
  LLM,
  Php,
  Baseui,
  Photoshop,
  Git,
  Docker,
  ReactNavigation,
} from "@/lib/techIcons";

const TechSkills = () => {
  return (
    <Container className={`mt-30`}>
      <SectionHeading subHeading={"Technologics"} heading={"Stack"} />

      <div className="mt-3">
        {SkillsList.map((items) => {
          return (
            <Tooltip key={items.title}>
              <TooltipTrigger>
                <Link to={items.href}>
                  <div className="mr-2 size-8">{items.icon}</div>
                </Link>
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
    title: "Shadcn",
    icon: <Shadcn />,
    href: "https://ui.shadcn.com/",
  },
  {
    title: "LLM",
    icon: <LLM />,
    href: "https://en.wikipedia.org/wiki/Large_language_model",
  },
  {
    title: "PHP",
    icon: <Php />,
    href: "https://www.php.net/",
  },
  {
    title: "BaseUI",
    icon: <Baseui />,
    href: "https://baseweb.design/",
  },
  {
    title: "Photoshop",
    icon: <Photoshop />,
    href: "https://www.adobe.com/products/photoshop.html",
  },
  {
    title: "Git",
    icon: <Git />,
    href: "https://git-scm.com/",
  },
  {
    title: "Docker",
    icon: <Docker />,
    href: "https://www.docker.com/",
  },
  {
    title: "React Navigation",
    icon: <ReactNavigation />,
    href: "https://reactnavigation.org/",
  },
];
