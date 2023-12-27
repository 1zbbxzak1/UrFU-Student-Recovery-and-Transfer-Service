"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { seedData } from "@/app/api/seed";
import { AddApplicationButton } from "@/app/api/application";
import CreateApplication from "../../CreateApplication";
import SelectDirection from "../../SelectDirection";
import FileUploader from "../../FileUploader";
import ModalApplicationSend from "../../ModalApplicationSend";
import ModalApplicationCancel from "../../ModalApplicationCancel";

const AddApplication = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showModalSend, setShowModalSend] = useState(false);
  const [showModalCancel, setShowModalCancel] = useState(false);

  const [passport, setPassport] = useState(null);
  const [registrationCertificate, setRegistrationCertificate] = useState(null);
  const [application, setApplication] = useState(null);

  const areAllDocumentsAttached = () => {
    return selectedItemId && passport && application;
  };

  const [showHelpTooltip, setShowHelpTooltip] = useState(false);

  const handleMouseEnter = () => {
    if (!areAllDocumentsAttached()) {
      setShowHelpTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    setShowHelpTooltip(false);
  };

  useEffect(() => {
    seedData();
  }, []);

  return (
    <section className="mt-[40px] mb-[130px] mx-[80px]">
      <Link href="/transfer/transfer-fifth">
        <div className="w-full h-[48px]">
          <i className="icon icon-l-arrow text-[18px] mr-[5px]"></i>
          <div className="justify-center items-center inline-flex py-4 text-[#A7A7A7] text-[18px] leading-[21.94px] font-medium">
            Вернуться
          </div>
        </div>
      </Link>
      <CreateApplication>
        <SelectDirection
          header={
            "Форма заявки на перевод на другое направление в другой институт с бюджетной формы обучения на контрактную"
          }
          academicGroup={
            <div className="text-left mt-[40px] mb-[15px]">
              <span className="text-[#1E4391] text-[20px] leading-[24.38px] font-medium">
                Введите номер вашей академической группы{" "}
              </span>
              <span className="text-[#A7A7A7] text-[14px] leading-[17.07px] font-normal">
                (например: РИ-220931)
              </span>
              <input
                type="text"
                className="u-input mt-[15px]"
                placeholder="Введите номер группы"
              />
            </div>
          }
          selectedItemId={selectedItemId}
          setSelectedItemId={setSelectedItemId}
        ></SelectDirection>

        <div className="text-left mt-[40px] mb-[15px]">
          <span className="text-[#1E4391] text-[20px] leading-[24.38px] font-medium">
            Прикрепите паспорт
          </span>
        </div>

        <FileUploader file={passport} setFile={setPassport} />

        <div className="text-left mt-[40px] mb-[15px]">
          <span className="text-[#1E4391] text-[20px] leading-[24.38px] font-medium">
            Прикрепите приписное свидетельство{" "}
          </span>
          <span className="text-[#A7A7A7] text-[14px] leading-[17.07px] font-normal">
            (для лиц мужского пола)
          </span>
        </div>

        <FileUploader
          file={registrationCertificate}
          setFile={setRegistrationCertificate}
        />

        <div className="text-left mt-[40px] mb-[15px]">
          <span className="text-[#1E4391] text-[20px] leading-[24.38px] font-medium">
            Прикрепите заявление на перевод
          </span>
        </div>

        <FileUploader file={application} setFile={setApplication} />

        <div className="grid grid-cols-6 gap-x-[20px] mt-[60px] mb-[30px]">
          <div
            id="u-help"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {showHelpTooltip && (
              <div id="u-help-tooltip">Не все элементы заполнены</div>
            )}
            <div onClick={() => setShowModalSend(true)}>
              <button
                onClick={() => {
                  if (areAllDocumentsAttached()) {
                    AddApplicationButton(
                      "перевод",
                      "6",
                      selectedItemId,
                      passport,
                      registrationCertificate,
                      application
                    );
                  } else {
                    console.log("Please attach all required documents.");
                  }
                }}
                disabled={!areAllDocumentsAttached()}
              >
                <div className="w-[200px] h-[48px] border border-[#1E4391] rounded-lg">
                  <div className="justify-center items-center inline-flex py-4 text-[#1E4391] text-[13px] leading-[15.85px] font-medium">
                    Отправить заявку
                  </div>
                </div>
              </button>
            </div>
          </div>
          <button onClick={() => setShowModalCancel(true)}>
            <div className="w-[200px] h-[48px] border border-[#D3D3D3] rounded-lg">
              <div className="flex justify-center items-center py-4 text-[#222222] text-[13px] leading-[15.85px] font-medium">
                Отмена
              </div>
            </div>
          </button>
        </div>
      </CreateApplication>

      <ModalApplicationSend
        isVisible={showModalSend}
        onClose={() => setShowModalSend(false)}
        href="/transfer/transfer-fifth"
      ></ModalApplicationSend>
      <ModalApplicationCancel
        isVisible={showModalCancel}
        onClose={() => setShowModalCancel(false)}
        href="/transfer/transfer-fifth"
      ></ModalApplicationCancel>
    </section>
  );
};

export default AddApplication;