import React, { useEffect } from "react";

const ModalWarning = ({ isVisible, onClose }) => {
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
      <div className="max-w-[880px] flex flex-col relative">
        <button
          className="u-button-cross absolute top-0 right-[-70px]"
          onClick={() => {
            onClose();
          }}
        ></button>
        <div className="bg-white rounded-[20px] border border-neutral-300">
          <div className="grid grid-rows-3 justify-center items-center pt-[40px]">
            <div className="text-center text-blue-900 text-[24px] leading-[29.26px] font-semibold">
              Невозможно перейти к формированию заявки
            </div>
            <div className="text-center px-[140px] mt-[5px]">
              <span className="text-neutral-400 text-[16px] leading-[17.07px] font-normal">
                Пожалуйста, авторизуйтесь или зарегистрируйтесь на нашем сайте.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWarning;
