import React from "react";
import { Button } from "../ui/button";
import SendIcon from "@/svgs/SendIcon";
import Cv from "@/svgs/Cv";
import Container from "../layouts/Container";
import { motion as Motion } from "motion/react";

const ResumeButton = () => {
  return (
    <Container className="mt-8 pl-0">
      <Motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <Button variant="outline">
          <Cv /> Resume/ CV
        </Button>
        <Button>
          <SendIcon /> Get In Touch
        </Button>
      </Motion.div>
    </Container>
  );
};

export default ResumeButton;
