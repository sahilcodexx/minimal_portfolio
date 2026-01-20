import React from "react";
import Container from "../layouts/Container";
import Hero from "../layouts/Hero";
import Project from "@/app/projects/Project";
import AboutMe from "../landing/AboutMe";
import Featured from "../landing/Featured";
import Blog from "@/blog/Blog";
import ExperienceCard from "@/Experience/ExperienceCard";
import Spotify from "../landing/Spotify";
import CTA from "../landing/CTA";
import { Helmet } from "react-helmet-async";
import Setup from "../landing/Setup";

const Home = () => {
  return (
    <Container className={`min-h-screen`}>
      <Helmet>
        <title>Sahil - Full Stack Developer</title>
        <meta name="description" content="." />
      </Helmet>
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
