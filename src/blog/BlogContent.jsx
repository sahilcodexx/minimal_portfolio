import React, { useEffect, useState } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { Buffer } from "buffer";
import Container from "@/components/layouts/Container";
import { Badge } from "@/components/ui/badge";
import { BlogComponents } from "./BlogComponent";
import { useParams } from "react-router-dom";
window.Buffer = Buffer;

const BlogContent = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const projects = import.meta.glob("/src/components/data/blog/*.md", {
    as: "raw",
  });
  useEffect(() => {
    const loadBlog = async () => {
      try {
        setLoading(true);

        const loader = projects[`/src/components/data/blog/${slug}.md`];

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
      <Container>
        <p>Error: {error}</p>
      </Container>
    );
  }
  const metatags = meta.tags;

  return (
    <Container>
      <article className="mx-auto max-w-4xl">
        {/* ===== BLOG HEADER ===== */}
        <header className="mb-10 space-y-6">
          <div className="flex flex-wrap gap-2">
            {metatags.map((tag) => (
              <Badge key={tag} variant="default">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mb-6 text-5xl font-bold">{meta.title}</h1>

          {meta.description && (
            <p className="text-muted-foreground mb-4">{meta.description}</p>
          )}

          <div className="flex flex-wrap gap-3 text-sm">
            {meta.date && <span>{meta.date}</span>}

            {meta.tags?.map((tag) => (
              <span key={tag} className="text-blue-400">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* ===== BLOG CONTENT (YOUR UI HERE) ===== */}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={BlogComponents}
        >
          {content}
        </ReactMarkdown>
      </article>
    </Container>
  );
};

export default BlogContent;
