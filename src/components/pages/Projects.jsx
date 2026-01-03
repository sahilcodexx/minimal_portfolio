import React from "react";
import Container from "../layouts/Container";
import { Separator } from "../ui/separator";
import { ProjectCardData } from "@/config/projects/ProjectCardData";
import ProjectCard from "@/app/projects/ProjectCard";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <Container className={"py-16"}>
      <Helmet>
        <title>Projects | My Work</title>
        <meta
          name="description"
          content="Explore my React and frontend development projects featuring clean UI, performance-focused design, and real-world use cases."
        />
      </Helmet>

      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My projects and work across different technologies and domains.
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex items-center gap-2">
        <h3 className="text-2xl font-bold">Latest Posts</h3>
        <span className="text-sm">({ProjectCardData.length} posts)</span>
      </div>
      <div>
        <ProjectCard />
      </div>
    </Container>
  );
};

export default Projects;
