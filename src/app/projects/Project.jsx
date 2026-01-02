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
      <div className="flex items-center w-full justify-center mt-8">
        <Button variant="outline">Show all Projects</Button>
      </div>
    </Container>
  );
};

export default Project;
