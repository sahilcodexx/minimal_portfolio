import Container from "@/components/layouts/Container";
import SectionHeading from "@/components/common/SectionHeading";

import ExperienceContent from "./ExperienceContent";

const ExperienceCard = () => {
  return (
    <Container className={'mt-10'}>
      <SectionHeading subHeading="Featured" heading="Experience" />
      <ExperienceContent />
    </Container>
  );
};

export default ExperienceCard;
