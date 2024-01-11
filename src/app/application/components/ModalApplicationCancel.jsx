"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const ModalApplicationCancel = ({ isVisible, onClose, href }) => {
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
      <div className="w-[580px] flex flex-col relative">
        <div className="bg-white rounded-[20px] border border-neutral-300">
          <div className="flex flex-col justify-left items-left pt-[40px] mx-[50px]">
            <div className="text-left text-[#222222] text-[24px] leading-[29.26px] font-semibold">
              Отмена заявки
            </div>
            <div className="text-left text-[#222222] text-[16px] leading-[19.5px] font-normal mt-[15px]">
              Вы уверены, что хотите отменить
              <br />
              формирование заявки?
            </div>
          </div>
          <div className="flex flex-row mt-[40px] mb-[30px] justify-end space-x-4 mx-[50px]">
            <button
              onClick={() => {
                onClose();
                router.push(href);
              }}
            >
              <div className="w-[120px] h-[48px] border border-[#1E4391] rounded-lg">
                <div className="justify-center items-center inline-flex py-4 text-[#1E4391] text-[13px] leading-[15.85px] font-medium">
                  Да
                </div>
              </div>
            </button>
            <button onClick={() => onClose()}>
              <div className="w-[120px] h-[48px] border border-[#D3D3D3] rounded-lg">
                <div className="flex justify-center items-center py-4 text-[#222222] text-[13px] leading-[15.85px] font-medium">
                  Отмена
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalApplicationCancel;
