"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getUserInfo } from "../api/user";
import "./profile.css";


const ProfileSection = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getUserInfo(setUserInfo);
  }, []);

  if (!userInfo) {
    return <p>Loading...</p>;
  }

  return (
    <section className="mt-[80px] mb-[130px] mx-auto">
      <h2 className="mx-[80px] mb-[60px] text-[36px] leading-[50.4px] text-left text-zinc-700">
        Профиль
      </h2>

      <div className="flex justify-center items-center">
        <div className="w-full mx-[80px] flex flex-col relative">
          <div className="bg-white rounded-[10px] border border-neutral-300 px-[20px] pt-[20px]">
            <div className="items-center justify-center">
              <h3 className="text-left text-neutral-800 text-[24px] leading-[29.26px] font-semibold">
                Мои данные
              </h3>
            </div>
            <div className="underline-profile"></div>
            <div className="grid grid-cols-3 grid-rows-2 gap-x-[237px] gap-y-5 mb-[30px]">
              <div>
                <p className="text-[#A7A7A7] text-[10px] leading-[12.19px] mb-[5px]">
                  ФИО
                </p>
                <p className="text-[14px] leading-[17.07px]">
                  {userInfo.fullName}
                </p>
              </div>
              <div>
                <p className="text-[#A7A7A7] text-[10px] leading-[12.19px] mb-[5px]">
                  Телефон
                </p>
                <p className="text-[14px] leading-[17.07px]">
                  {userInfo.phoneNumber || "-"}
                </p>
              </div>
              <Link href='/dashboard/update-user-info' className=" ml-auto">
                <i className="icon i-pencil text-[24px]"></i>
              </Link>
              <div>
                <p className="text-[#A7A7A7] text-[10px] leading-[12.19px] mb-[5px]">
                  Электронная почта
                </p>
                <p className="text-[14px] leading-[17.07px]">
                  {userInfo.email}
                </p>
              </div>
              <div>
                <p className="text-[#A7A7A7] text-[10px] leading-[12.19px] mb-[5px]">
                  Telegram
                </p>
                <p className="text-[14px] leading-[17.07px]">
                  {userInfo.telegram || "-"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
