import React from "react";
import Link from "next/link";

const ProjectCard = ({ title, gitUrl }) => {
  return (
    <div>
    <div className="h-2.5 max-w-[400px] bg-[#1E4391]" />
      <div className="u-card-main">
        <div className="text-[24px] leading-[33.6px]">{title}</div>
        <Link href={gitUrl}>
          <button className="u-card-action-main"></button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
