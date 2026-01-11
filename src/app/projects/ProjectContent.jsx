import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import Container from "@/components/layouts/Container";
import { ProjectComponents } from "./ProjectComponents";
import NestJs from "@/technologies/NextJS";

const ProjectContent = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const projects = import.meta.glob("/src/components/data/projects/*.md", {
    as: "raw",
  });
  useEffect(() => {
    const loadBlog = async () => {
      try {
        const loader = projects[`/src/components/data/projects/${slug}.md`];

        if (!loader) throw new Error("Project not found");

        const text = await loader();
        const { data, content } = matter(text);

        setMeta(data);
        setContent(content);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [slug]);

  if (loading) {
    return (
      <Container>
        <p>Loading blog...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        className={"flex min-h-screen items-start justify-center py-20"}
      >
        <p className="text-lg font-medium">404 | Blog not found</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>
        {meta.title}
        <NestJs />
      </h1>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={ProjectComponents}
      >
        {content}
      </ReactMarkdown>
    </Container>
  );
};

export default ProjectContent;
