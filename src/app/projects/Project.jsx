import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/layouts/Container";
import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <Container className={`mt-20`}>
      <SectionHeading subHeading={"Featured"} heading={"Projects"} />
      <ProjectCard/>
    </Container>
  );
};

export default Project;
