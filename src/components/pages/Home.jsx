import React from "react";
import Container from "../layouts/Container";
import Hero from "../layouts/Hero";
import Project from "@/app/projects/Project";
import AboutMe from "../landing/TechSkills";
import Featured from "../landing/Featured";
import Blog from "@/app/blog/Blog";
import ExperienceCard from "@/components/Experience/ExperienceCard";

import CTA from "../landing/CTA";
import { Helmet } from "react-helmet-async";
import Setup from "../landing/Setup";

const Home = () => {
  return (
    <Container className={`min-h-screen`}>
      <Helmet>
        <title>Sahil - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in modern web applications using React, Next.js, Node.js, and Tailwind CSS." />
        <meta property="og:title" content="Sahil Codex | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Explore the professional portfolio of Sahil Codex — Full Stack Developer with expertise in React, Next.js, Node.js, and more." />
        <meta property="og:image" content="https://sahilcodex.vercel.app/og-image.png" />
        <meta property="og:url" content="https://sahilcodex.vercel.app/" />
        <meta name="twitter:title" content="Sahil Codex | Full Stack Developer Portfolio" />
        <meta name="twitter:description" content="Discover Sahil Codex's web development projects, skills, and resume." />
        <meta name="twitter:image" content="https://sahilcodex.vercel.app/og-image.png" />
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
