import Bun from "@/components/icons/tech/Bun";
import Javascript from "@/components/icons/tech/JavaScript";
import MongoDb from "@/components/icons/tech/MongoDB";
import NodeJs from "@/components/icons/tech/NodeJS";
import ReactJs from "@/components/icons/tech/ReactIcon";
import React from "react";
import { motion as Motion } from "motion/react";

const BioText = () => {
  return (
    <Motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-base whitespace-pre-wrap text-neutral-500 md:text-lg"
    >
      <span className="whitespace-pre-wrap">
        I develop interactive web apps using
      </span>
      <SkillTag skill={Skills[4]} />
      <span className="whitespace-pre-wrap">, </span>
      <SkillTag skill={Skills[0]} />
      <span className="whitespace-pre-wrap">, </span>
      <SkillTag skill={Skills[1]} />
      <span className="whitespace-pre-wrap">, </span>
      <SkillTag skill={Skills[2]} />
      <span className="whitespace-pre-wrap"> and </span>
      <SkillTag skill={Skills[3]} />
      <span className="whitespace-pre-wrap">With a focus on</span>{" "}
      <b className="text-primary dark:text-primary whitespace-pre-wrap">UI</b>{" "}
      <span className="whitespace-pre-wrap"> design. Enthusiastic about </span>{" "}
      <b className="text-primary dark:text-primary whitespace-pre-wrap">
        Motion{" "}
      </b>{" "}
      <span className="whitespace-pre-wrap">
        {" "}
        , driven by a keen eye for design.{" "}
      </span>
    </Motion.div>
  );
};

export default BioText;

const Skills = [
  {
    name: "React",
    element: <ReactJs />,
    link: "https://react.dev",
  },
  {
    name: "Node.js",
    element: <NodeJs />,
    link: "https://nodejs.org",
  },
  {
    name: "Bun",
    element: <Bun />,
    link: "https://bun.sh",
  },
  {
    name: "MongoDB",
    element: <MongoDb />,
    link: "https://www.mongodb.com",
  },
  {
    name: "JavaScript",
    element: <Javascript />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
];

const SkillTag = ({ skill }) => {
  return (
    <a
      href={skill.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center self-end rounded-md border border-black/10 bg-black/5 px-2 py-1 text-sm text-black dark:border-white/15 dark:bg-white/5 dark:text-white"
    >
      <div className="size-4 shrink-0">{skill.element}</div>
      <p className="ml-1 text-sm font-bold">{skill.name}</p>
    </a>
  );
};
