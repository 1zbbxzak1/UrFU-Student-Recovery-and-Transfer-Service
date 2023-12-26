"use client";
import { useState } from "react";
import Link from "next/link";
import { handleUpdateUserInfo } from "@/app/api/user";

const UpdateProfile = () => {
  const [newInfo, setNewInfo] = useState({
    Email: "",
    FullName: "",
    PhoneNumber: "",
    Telegram: "",
  });

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
            <div className="grid grid-cols-2 grid-rows-2 gap-x-[100px] gap-y-5 mb-[30px]">
              <div className="max-w-[370px]">
                <p className="text-[#A7A7A7] text-[10px] leading-[12.19px] mb-[5px]">
                  ФИО
                </p>
                <input
                  name="fullName"
                  type="text"
                  placeholder="ФИО"
                  value={newInfo.FullName}
                  onChange={(e) =>
                    setNewInfo({ ...newInfo, FullName: e.target.value })
                  }
                  className="bg-white border border-[#D3D3D3] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full h-[48px] p-2.5"
                />
              </div>
              <div className="max-w-[370px]">
                <p className="text-[#A7A7A7] text-[10px] leading-[12.19px] mb-[5px]">
                  Телефон
                </p>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Телефон"
                  value={newInfo.PhoneNumber}
                  onChange={(e) =>
                    setNewInfo({ ...newInfo, PhoneNumber: e.target.value })
                  }
                  className="bg-white border border-[#D3D3D3] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full h-[48px] p-2.5"
                />
              </div>
              <div className="max-w-[370px]">
                <p className="text-[#A7A7A7] text-[10px] leading-[12.19px] mb-[5px]">
                  Электронная почта
                </p>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  value={newInfo.Email}
                  onChange={(e) =>
                    setNewInfo({ ...newInfo, Email: e.target.value })
                  }
                  className="bg-white border border-[#D3D3D3] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full h-[48px] p-2.5"
                />
              </div>
              <div className="max-w-[370px]">
                <p className="text-[#A7A7A7] text-[10px] leading-[12.19px] mb-[5px]">
                  Telegram
                </p>
                <input
                  name="telegram"
                  type="text"
                  placeholder="Telegram"
                  value={newInfo.Telegram}
                  onChange={(e) =>
                    setNewInfo({ ...newInfo, Telegram: e.target.value })
                  }
                  className="bg-white border border-[#D3D3D3] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full h-[48px] p-2.5"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-x-[20px] mt-[60px] mb-[30px]">
              <button
                onClick={() => {
                  handleUpdateUserInfo(newInfo);
                }}
              >
                <div className="w-[200px] h-[48px] border border-[#1E4391] rounded-lg">
                  <div className="justify-center items-center inline-flex py-4 text-[#1E4391] text-[14px] leading-[17.07px] font-medium">
                    Применить изменения
                  </div>
                </div>
              </button>
              <Link href="/dashboard">
                <button>
                  <div className="w-[200px] h-[48px] border border-[#D3D3D3] rounded-lg">
                    <div className="justify-center items-center inline-flex py-4 text-[#222222] text-[14px] leading-[17.07px] font-medium">
                      Отмена
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateProfile;
