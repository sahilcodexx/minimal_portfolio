import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/layouts/Container";
import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <Container className={"mt-30 mb-30"}>
      <SectionHeading subHeading={"Featured"} heading={"Blogs"} />
      <BlogCard />
      <div className="mt-8 flex w-full items-center justify-center">
        <Link to="/blogs">
          <Button variant="outline">Show all Blogs</Button>
        </Link>
      </div>

      
    </Container>
  );
};

export default Blog;
