import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/layouts/Container";
import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <Container className={"mt-20 mb-10"}>
      <SectionHeading subHeading={"Featured"} heading={"Blogs"} />
      <BlogCard />
    </Container>
  );
};

export default Blog;
