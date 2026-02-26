import React, { lazy, Suspense } from "react";
import Container from "../layouts/Container";
import Hero from "../layouts/Hero";
import ExperienceCard from "@/components/Experience/ExperienceCard";

const Project = lazy(() => import("@/app/projects/Project"));
const AboutMe = lazy(() => import("../landing/TechSkills"));
const Featured = lazy(() => import("../landing/Featured"));
const Blog = lazy(() => import("@/app/blog/Blog"));
const CTA = lazy(() => import("../landing/CTA"));
const Setup = lazy(() => import("../landing/Setup"));

const SectionLoader = () => (
  <div className="flex min-h-[200px] items-center justify-center">
    <div className="border-primary h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
  </div>
);

const Home = () => {
  return (
    <Container className="min-h-screen">
      <Hero />
      <ExperienceCard />
      <Suspense fallback={<SectionLoader />}>
        <Project />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <AboutMe />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Featured />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CTA />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Setup />
      </Suspense>
    </Container>
  );
};

export default Home;
