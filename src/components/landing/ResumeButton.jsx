import React from "react";
import { Button } from "../ui/button";
import SendIcon from "@/svgs/SendIcon";
import Cv from "@/svgs/Cv";
import Container from "../layouts/Container";

const ResumeButton = () => {
  return (
    <Container className="mt-8 flex items-center gap-3 pl-0">
      <Button variant="outline">
        <Cv /> Get In Touch
      </Button>
      <Button>
        <SendIcon /> Get In Touch
      </Button>
    </Container>
  );
};

export default ResumeButton;
