import React from "react";
import Container from "../layouts/Container";
import Hero from "../layouts/Hero";
import Project from "@/app/projects/Project";
import AboutMe from "../landing/AboutMe";
import Featured from "../landing/Featured";
import Blog from "@/blog/Blog";
import ExperienceCard from "@/Experience/ExperienceCard";
import Spotify from "../landing/Spotify";

const Home = () => {
  return (
    <Container className={`min-h-[250vh]`}>
      <div>
        <Hero />
        <ExperienceCard />
        <Project />
        <AboutMe />
        <Featured />
        <Blog />
        <Spotify/> 
      </div>
    </Container>
  );
};

export default Home;
