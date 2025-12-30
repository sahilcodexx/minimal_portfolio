import React from "react";
import Container from "./Container";
import SectionHeading from "../common/SectionHeading";
import Website from "@/svgs/Website";
import LinkedIn from "@/svgs/LinkedIn";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const ExperienceCard = () => {
  return (
    <Container>
      <SectionHeading subHeading="Featured" heading="Experience" />
    
    </Container>
  );
};

export default ExperienceCard;

const Links = [
  {
    name: "Visit Website",
    href: "https://zerodimensions.in",
    icon: <Website />,
  },
  {
    name: "LinkedIn",
    href: "https://in.linkedin.com/company/zerodimensions",
    icon: <LinkedIn />,
  },
];
