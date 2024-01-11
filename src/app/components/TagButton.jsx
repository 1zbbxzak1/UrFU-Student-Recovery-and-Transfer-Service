import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TagButton = ({ name, onClick, isSelected, children }) => {
  const buttonStyles = isSelected
    ? "text-[#393E46]"
    : "text-[#393E46]";

  return (
    <button
      className={`${buttonStyles} px-2 lg:px-6 text-[15px] leading-[18.29px] cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {children}
      <motion.div
        animate={isSelected ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#1E4391] mt-1"
      ></motion.div>
    </button>
  );
};

export default TagButton;
