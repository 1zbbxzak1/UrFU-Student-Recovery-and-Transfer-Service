import React, { useEffect } from "react";

const ModalAuth = ({ isVisible, onClose, children }) => {
  useEffect(() => {
    const handleBodyScroll = (shouldDisableScroll) => {
      document.body.style.overflow = shouldDisableScroll ? "hidden" : "auto";
    };

    if (isVisible) {
      handleBodyScroll(true);
    }

    return () => {
      handleBodyScroll(false);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[430px] flex flex-col relative">
        <button
          className="u-button-cross absolute top-0 right-[-70px]"
          onClick={() => onClose()}
        ></button>
        <div className="bg-white rounded-[20px] border border-neutral-300 px-[65px] py-[40px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalAuth;
