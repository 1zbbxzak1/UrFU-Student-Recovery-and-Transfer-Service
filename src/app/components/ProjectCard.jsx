import React from "react";
import Link from "next/link";

const ProjectCard = ({ title, gitUrl }) => {
  return (
    <div>
    <div className="h-2.5 max-w-[400px] bg-[#2951b6]" />
      <div className="u-card-main">
        {title}
        <Link href={gitUrl}>
          <button className="u-card-action-main"></button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
