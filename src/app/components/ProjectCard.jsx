import React from "react";
import Link from "next/link";

const ProjectCard = ({ title, gitUrl }) => {
  const handleButtonClick = () => {
    // You can add any additional logic before navigating
    console.log("Button Clicked!");
  };

  return (
    <div>
    <div className="relative h-2.5 bg-[#2951b6]" />
      <div className="u-card">
        {title}
        <Link href={gitUrl}>
          <button className="u-card-action"></button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
