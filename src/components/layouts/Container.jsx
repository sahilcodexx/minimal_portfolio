import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`container mx-auto max-w-3xl px-4 font-sans ${className}`}>
      {children}{" "}
    </div>
  );
};

export default Container;
