import Container from "@/components/layouts/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Website from "@/svgs/Website";
import LinkedIn from "@/svgs/LinkedIn";
import Skill from "@/components/common/Skills";
import { motion as Motion } from "motion/react";
import ExperienceContent from "./ExperienceContent";

const ExperienceCard = () => {
  return (
    <Container>
      <SectionHeading subHeading="Featured" heading="Experience" />
      <ExperienceContent />
    </Container>
  );
};

export default ExperienceCard;
