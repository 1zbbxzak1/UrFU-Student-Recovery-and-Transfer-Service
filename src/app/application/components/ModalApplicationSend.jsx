"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const ModalApplicationSend = ({ isVisible, onClose, href }) => {
  const router = useRouter();

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
      <div className="w-[880px] flex flex-col relative">
        <button
          className="u-button-cross absolute top-0 right-[-70px]"
          onClick={() => {onClose(); router.push(href); }}
        ></button>
        <div className="bg-white rounded-[20px] border border-neutral-300">
          <div className="grid grid-rows-3 justify-center items-center pt-[40px]">
            <div className="text-center text-blue-900 text-[24px] leading-[29.26px] font-semibold">
              Заявка успешно отправлена
            </div>
            <div className="text-center px-[154px]">
              <span className="text-neutral-400 text-[14px] leading-[17.07px] font-normal">
                Администратор в ближаещее время проверит вашу заявку,
                отслеживайте ее состояние в разделе{" "}
              </span>
              <u>
                <a
                  href="/application"
                  className="text-blue-900 text-[14px] leading-[17.07px] font-normal"
                >
                  заявки
                </a>
              </u>
              <span className="text-neutral-400 text-[14px] leading-[17.07px] font-normal">. </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalApplicationSend;
