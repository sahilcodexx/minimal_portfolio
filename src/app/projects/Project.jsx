import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/layouts/Container";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

const Project = () => {
  return (
    <Container className={`mt-20`}>
      <SectionHeading subHeading={"Featured"} heading={"Projects"} />
      <ProjectCard />
      <div className="mt-8 flex w-full items-center justify-center">
        <a href="/projects">
          <Button variant="outline">Show all Projects</Button>
        </a>
      </div>
    </Container>
  );
};

export default Project;
