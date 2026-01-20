import React from "react";
import Container from "../layouts/Container";
import SectionHeading from "../common/SectionHeading";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import ReactIcon from "@/technologies/ReactIcon";
import Bun from "@/technologies/Bun";
import NodeJs from "@/technologies/NodeJS";
import JavaScript from "@/technologies/JavaScript";
import MongoDB from "@/technologies/MongoDB";
import ExpressJs from "@/technologies/ExpressJs";

const AboutMe = () => {
  return (
    <Container className={`mt-20`}>
      <SectionHeading subHeading={"About"} heading={"Me"} />
      <div className="mt-8 flex flex-col gap-5 md:flex-row">
        <img
          src="./Avatar.png"
          alt="img"
          className="size-60 w-50 rounded-md  bg-blue-300 md:w-120 dark:bg-yellow-300"
        />

        <div className="mt-3 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold">Sahil Singh</h3>
            <h3 className="text-md text-muted-foreground mt-4">
              I'm a Full Stack web developer and Open Source Contributor, I love
              building products to solve real-world problems. I'm specialized in
              building MVP's.
            </h3>
          </div>
          <div>
            <h3 className="text-primary font-bold">Skills</h3>
            <div className="mt-3">
              {SkillsList.map((items) => {
                return (
                  <Tooltip key={items.title}>
                    <TooltipTrigger>
                      <div className="mr-2 size-6">{items.icon}</div>
                    </TooltipTrigger>
                    <TooltipContent>{items.title}</TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;

const SkillsList = [
  {
    title: "React",
    icon: <ReactIcon />,
  },
  {
    title: "JavaScript",
    icon: <JavaScript />,
  },
  {
    title: "Bun",
    icon: <Bun />,
  },
  {
    title: "Node Js",
    icon: <NodeJs />,
  },
  {
    title: "Express Js",
    icon: <ExpressJs />,
  },
  {
    title: "MongoDB",
    icon: <MongoDB />,
  },
];
