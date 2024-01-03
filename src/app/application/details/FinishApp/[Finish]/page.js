"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getStatusClassName } from "@/app/utils/const";
import { getFileExtensionIcon } from "@/app/utils/const";
import { getApplicationById } from "@/app/api/application";
import { updateStatus } from "@/app/api/application";
import { getUserInfoById } from "@/app/api/user";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CreateApplication from "../../../components/CreateApplication";
import ModalComment from "./ModalComment";

export default function Page({ params }) {
  const numericId = parseInt(params.Finish, 10);
  const [application, setApplication] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const [comment, setComment] = useState("");
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [showModalReject, setShowModalReject] = useState(false);

  const handleUpdateStatus = async () => {
    console.log("Before Update:", comment);
    await updateStatus(numericId, {
      status: "Принято",
      comment: comment,
    });
    console.log("After Update:", comment);
  };

  const handleAnotherStatusUpdate = async () => {
    await updateStatus(numericId, {
      status: "Отклонено",
      comment: comment,
    });
  };

  useEffect(() => {
    if (params.Finish) {
      getApplicationById(numericId, setApplication);
    }
    if (application.userId) {
      getUserInfoById(String(application.userId), setUserInfo);
    }
  }, [params.Finish, application.userId]);

  return (
    <main className="flex flex-col min-h-screen bg-[#F6F6F6]">
      <Navbar />
      <div className="flex-grow container mx-auto">
        <section className="mt-[40px] mb-[130px] mx-[80px]">
          <Link href="/application/applicationAdmin">
            <div className="w-full h-[48px]">
              <i className="icon icon-l-arrow text-[18px] mr-[5px]"></i>
              <div className="justify-center items-center inline-flex py-4 text-[#A7A7A7] text-[18px] leading-[21.94px] font-medium">
                Вернуться
              </div>
            </div>
          </Link>
          <CreateApplication>
            <div className="grid grid-cols-2">
              <p className="max-w-[780px] text-left text-[#1E4391] text-[24px] leading-[29.26px] font-semibold">
                {`Номер заявки: №${numericId}`}
              </p>
              <div
                className={`ml-auto ${getStatusClassName(application.status)}`}
              >
                {application.status}
              </div>
            </div>
            <div className="underline-application"></div>

            <div className="text-left mt-[20px]">
              <span className="text-[#1E4391] text-[20px] leading-[24.38px] font-medium">
                Общая информация
              </span>
            </div>
            <div className="flex flex-col">
              <div className="text-left mt-[15px] mb-[10px]">
                <span className="text-[#A7A7A7] text-[14px] leading-[17.07px] font-medium">
                  Тип заявки:{" "}
                </span>
                <span className="text-[#222222] text-[14px] leading-[17.07px] font-medium">
                  {application.detailedType}
                </span>
              </div>
              {application.direction && (
                <div className="text-left mb-[10px]">
                  <span className="text-[#A7A7A7] text-[14px] leading-[17.07px] font-medium">
                    Направление:{" "}
                  </span>
                  <span className="text-[#222222] text-[14px] leading-[17.07px] font-medium">
                    {application.direction.code} {application.direction.name}
                  </span>
                </div>
              )}
              {application.direction && (
                <div className="text-left mb-[10px]">
                  <span className="text-[#A7A7A7] text-[14px] leading-[17.07px] font-medium">
                    Форма обучения:{" "}
                  </span>
                  <span className="text-[#222222] text-[14px] leading-[17.07px] font-medium">
                    {application.direction.form}
                  </span>
                </div>
              )}
              {application.direction && (
                <div className="text-left mb-[10px]">
                  <span className="text-[#A7A7A7] text-[14px] leading-[17.07px] font-medium">
                    Курс:{" "}
                  </span>
                  <span className="text-[#222222] text-[14px] leading-[17.07px] font-medium">
                    {application.direction.course}
                  </span>
                </div>
              )}
            </div>

            <div className="text-left mt-[40px]">
              <p className="text-[#1E4391] text-[20px] leading-[24.38px] font-medium mb-[15px]">
                Данные студента
              </p>
            </div>
            {userInfo && (
              <div className="grid grid-cols-2 grid-rows-2 gap-x-[237px] gap-y-5 mb-[30px]">
                <div>
                  <span className="text-[#A7A7A7] text-[14px] leading-[17.07px] mb-[5px]">
                    ФИО:{" "}
                  </span>
                  <span className="text-[14px] leading-[17.07px]">
                    {userInfo.fullName}
                  </span>
                </div>
                <div>
                  <span className="text-[#A7A7A7] text-[14px] leading-[17.07px] mb-[5px]">
                    Телефон:{" "}
                  </span>
                  <span className="text-[14px] leading-[17.07px]">
                    {userInfo.phoneNumber || "-"}
                  </span>
                </div>
                <div>
                  <span className="text-[#A7A7A7] text-[14px] leading-[17.07px] mb-[5px]">
                    Электронная почта:{" "}
                  </span>
                  <span className="text-[14px] leading-[17.07px]">
                    {userInfo.email}
                  </span>
                </div>
                <div>
                  <span className="text-[#A7A7A7] text-[14px] leading-[17.07px] mb-[5px]">
                    Telegram:{" "}
                  </span>
                  <span className="text-[14px] leading-[17.07px]">
                    {userInfo.telegram || "-"}
                  </span>
                </div>
              </div>
            )}

            <div className="text-left mt-[40px] mb-[15px]">
              <span className="text-[#1E4391] text-[20px] leading-[24.38px] font-medium">
                Документы
              </span>
            </div>
            <div className="flex flex-col gap-y-5">
              {application.files &&
                application.files.map((file) => (
                  <a
                    key={file.id}
                    href={file.urlPath}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-[366px] h-[48px] border border-solid bg-[#9FAECD80] rounded-lg border-[#D3D3D3]">
                      <div className="flex flex-row justify-start items-center px-5 text-[#1E4391] text-[14px] leading-[17.07px] font-semibold">
                        <div
                          className={`mr-[10px] py-1 file-cell-icon ${getFileExtensionIcon(
                            file.name
                          )}`}
                        ></div>
                        <div className="mr-auto">{file.name}</div>
                        <div>
                          <i className="u-icon icon-download-line text-[20px]"></i>
                        </div>
                      </div>
                    </button>
                  </a>
                ))}
            </div>

            <div className="inline-flex gap-x-[20px] mt-[60px] mb-[30px]">
              <button onClick={() => setShowModalSuccess(true)}>
                <div className="w-[173px] h-[48px] border border-[#147246] rounded-[10px]">
                  <div className="justify-center items-center inline-flex py-4 text-[#147246] text-[13px] leading-[15.85px] font-semibold">
                    Одобрить
                  </div>
                </div>
              </button>
              <button onClick={() => setShowModalReject(true)}>
                <div className="w-[173px] h-[48px] border border-[#EF302B] rounded-[10px]">
                  <div className="flex justify-center items-center py-4 text-[#EF302B] text-[13px] leading-[15.85px] font-semibold">
                    Отказать
                  </div>
                </div>
              </button>
            </div>
          </CreateApplication>
          <ModalComment
            setComment={setComment}
            isVisible={showModalSuccess}
            onClose={() => setShowModalSuccess(false)}
            onSend={handleUpdateStatus}
            href="/application/applicationAdmin"
          ></ModalComment>
          <ModalComment
            setComment={setComment}
            isVisible={showModalReject}
            onClose={() => setShowModalReject(false)}
            onSend={handleAnotherStatusUpdate}
            href="/application/applicationAdmin"
          ></ModalComment>
        </section>
      </div>
      <Footer />
    </main>
  );
}
