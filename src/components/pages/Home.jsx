import React from "react";
import Container from "../layouts/Container";
import Hero from "../layouts/Hero";
import Project from "@/app/projects/Project";
import AboutMe from "../landing/TechSkills";
import Featured from "../landing/Featured";
import Blog from "@/app/blog/Blog";
import ExperienceCard from "@/components/Experience/ExperienceCard";

import CTA from "../landing/CTA";
import Setup from "../landing/Setup";

const Home = () => {
  return (
    <Container className={`min-h-screen`}>
      <div>
        <Hero />
        <ExperienceCard />
        <Project />
        <AboutMe />
        <Featured />
        <Blog />
        <CTA />
        <Setup />
      </div>
    </Container>
  );
};

export default Home;
