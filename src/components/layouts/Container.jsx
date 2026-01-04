import { motion as Motion } from "motion/react";

const Container = ({ children, className }) => {
  return (
    <Motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={`container mx-auto max-w-3xl px-4 font-sans ${className}`}
    >
      {children}{" "}
    </Motion.div>
  );
};

export default Container;
