import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import { BlogComponents } from "@/blog/BlogComponent";
import Container from "@/components/layouts/Container";
import { ProjectComponents } from "./ProjectComponents";
import NestJs from "@/technologies/NextJS";

const ProjectContent = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/src/components/data/projects/${slug}.md`);

        if (!res.ok) throw new Error("Project not Found");

        const text = await res.text();
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
      <Container>
        <p>404 | Blog not found</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>{meta.title}<NestJs/></h1>

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
