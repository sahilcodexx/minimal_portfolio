import React from "react";
import Container from "./Container";
import BioText from "../landing/BioText";
import ResumeButton from "../landing/ResumeButton";
import SocialLinks from "../landing/SocialLinks";
import { motion as Motion } from "motion/react";

const Hero = () => {
  return (
    <Container className={` flex flex-col items-start justify-center py-18`}>
      <Motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="box-border h-24 w-24 overflow-hidden rounded-full bg-blue-300 p-1 duration-200 dark:bg-yellow-300"
      >
        <Motion.img
          src="./Avatar.png"
          alt="Avatar"
          className="box-border h-24 scale-105 object-cover"
        />
      </Motion.div>
      <Motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <h2 className="text-4xl font-semibold text-neutral-700 dark:text-neutral-50">
          Hi, I'm Sahil —
          <span className="font-bold text-neutral-500/70 dark:text-neutral-400">
            {" "}Desgin Engineer.
          </span>
        </h2>
      </Motion.div>
      <BioText />
      <ResumeButton />
      <SocialLinks />
    </Container>
  );
};

export default Hero;
