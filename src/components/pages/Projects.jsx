import React, { useState } from "react";
import Container from "../layouts/Container";
import { Separator } from "../ui/separator";
import { ProjectCardData } from "@/config/projects/ProjectCardData";
import ProjectCard from "@/app/projects/ProjectCard";
import { Helmet } from "react-helmet-async";
import { Badge } from "../ui/badge";

const Projects = () => {
  const [isSelected, setIsSelected] = useState(null);

  const filteredProjects =
    isSelected === null
      ? ProjectCardData
      : ProjectCardData.filter((item) => item.isWorking === isSelected);

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
      <div className="my-2 flex gap-5">
        <Badge
          onClick={() => setIsSelected(null)}
          className={
            "hover:bg-accent hover:text-accent-foreground tag-inner-shadow cursor-pointer capitalize"
          }
        >
          All ({ProjectCardData.length})
        </Badge>
        <Badge
          onClick={() => setIsSelected(true)}
          className={
            "hover:bg-accent hover:text-accent-foreground tag-inner-shadow cursor-pointer capitalize"
          }
        >
          Working ({ProjectCardData.filter((item) => item.isWorking).length})
        </Badge>
        <Badge
          onClick={() => setIsSelected(false)}
          className={
            "hover:bg-accent hover:text-accent-foreground tag-inner-shadow cursor-pointer capitalize"
          }
        >
          Building ({ProjectCardData.filter((item) => item.isWorking).length})
        </Badge>
      </div>

      <div className="flex items-center gap-2">
        <h3 className="text-2xl font-bold">Latest Posts</h3>
        <span className="text-sm">({ProjectCardData.length} posts)</span>
      </div>
      <div>
        <ProjectCard completed={filteredProjects} />
      </div>
    </Container>
  );
};

export default Projects;

{
  /* <button
  key={tag}
  onClick={() => handleTagClick(tag)}
  className="transition-colors"
>
  <Badge
    variant={isSelected ? "default" : "outline"}
    className="hover:bg-accent hover:text-accent-foreground tag-inner-shadow cursor-pointer capitalize"
  >
    {tag}
  </Badge>
</button>; */
}
