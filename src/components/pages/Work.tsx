import React from "react";
import Container from "../layouts/Container";
import { Separator } from "../ui/separator";
import ExperienceContent from "@/components/Experience/ExperienceContent";
import { Helmet } from "react-helmet-async";

const Work = () => {
  return (
    <Container className={"py-16"}>
      <Helmet>
        <title>Work Experience - Professional Journey</title>
        <meta
          name="description"
          content="A detailed overview of my professional journey, work experience, and contributions to real-world projects using React and modern frontend technologies."
        />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Work Experience
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My work experiences across different companies and roles.
          </p>
        </div>
      </div>
      <Separator />
      <div className="space-y-6">
        <ExperienceContent />
      </div>
    </Container>
  );
};

export default Work;
