import React from "react";
import Container from "../layouts/Container";
import Hero from "../layouts/Hero";
import ExperienceCard from "../layouts/ExperienceCard";
import Experience from "@/Experience/Experience";
import Project from "@/projects/Project";
import ProjectCard from "@/projects/ProjectCard";

const Home = () => {
  return (
    <Container className={`min-h-[250vh]`}>
      <div>
        <Hero />
        <Experience />
        <Project/>
        <ProjectCard/>
      </div>
    </Container>
  );
};

export default Home;
