import React from "react";

const TypeTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#1E4391] border-[#1E4391]"
    : "text-[#A7A7A7] border-[#D3D3D3] hover:border-[#1E4391]";
  return (
    <button
      className={`${buttonStyles} relative bg-white rounded-[24px] border border-solid px-[34px] py-[14px] text-[13px] leading-[15.85px] cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default TypeTag;