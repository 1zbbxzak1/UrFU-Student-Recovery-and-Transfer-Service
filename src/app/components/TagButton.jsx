import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TagButton = ({ name, onClick, isSelected, children }) => {
  const buttonStyles = isSelected
    ? "text-zinc-700"
    : "text-zinc-700";

  const buttonClasses = isSelected ? "text-zinc-700" : "text-[#ADB7BE]";

  return (
    <button
      className={`${buttonStyles} px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {children}
      <motion.div
        animate={isSelected ? "active" : "default"}
        variants={variants}
        className="h-1 bg-blue-800 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TagButton;
