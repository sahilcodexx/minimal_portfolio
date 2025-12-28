import React from "react";
import { Link } from "react-router-dom";

export default function Skill({ name, href, children }) {
  return (
    <Link
      to={href ?? ""}
      target="_blank"
      className="skill-inner-shadow inline-flex items-center self-end rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black dark:border-white/30 dark:bg-white/15 dark:text-white"
    >
      <div className="size-4 shrink-0">{children}</div>
      <p className="ml-1 text-sm font-bold">{name}</p>
    </Link>
  );
}
