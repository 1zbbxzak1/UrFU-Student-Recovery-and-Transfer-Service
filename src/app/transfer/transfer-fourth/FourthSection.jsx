"use client";
import React from "react";
import "../transfer.css";

const FourthSection = () => {
  return (
    <main className="mt-10 mb-10 mx-auto">
      <h2 className="mx-[80px] mb-[80px] text-[36px] leading-[50.4px] text-left text-zinc-700">
        Перевод на другое направление в другой институт
        <br />с бюджетной формы обучения на бюджетную
      </h2>

      <section>
        <div
          className="w-[600px] h-[40px] bg-cover bg-center flex items-center justify-center mx-[60px]"
          style={{
            backgroundImage: "url('/frame1.png')",
          }}
        >
          <p className="left-[30px] top-[5px] text-center text-white text-xl font-medium">
            Необходимые условия для подачи заявления:
          </p>
        </div>
        <div className="flex flex-row items-center justify-center mx-[80px] mt-[45px]">
          <div className="w-[245px] h-[144px] bg-white border border-neutral-300">
            <div className="w-[212px] mx-4 my-[46px] text-neutral-800 text-[14px] leading-[17.07px] font-normal text-center">
              Перевод осуществляется только при наличии вакантных бюджетных
              мест.
            </div>
          </div>
          <div className="my-[30px] mx-[35px]">
            <i className="u-icon icon-plus text-[31px]"></i>
          </div>
          <div className="w-[245px] h-[144px] bg-white border border-neutral-300">
            <div className="w-[223px] h-9 mx-[11px] my-9 text-neutral-800 text-[14px] leading-[17.07px] font-normal text-center">
              При наличии академической задолженности определяется срок для ее
              сдачи, но не более одного года.
            </div>
          </div>
          <div className="my-[30px] mx-[35px]">
            <i className="u-icon icon-plus text-[31px]"></i>
          </div>
          <div className="w-[245px] h-[144px] bg-white border border-neutral-300">
            <div className="w-[205px] mx-5 my-11 text-neutral-800 text-[14px] leading-[17.07px] font-normal text-center">
              Академическая разница не должна превышать 15 зачетных единиц.
            </div>
          </div>
          <div className="my-[30px] mx-[35px]">
            <i className="u-icon icon-plus text-[31px]"></i>
          </div>
          <div className="w-[245px] h-[144px] bg-white border border-neutral-300">
            <div className="w-[207px] mx-5 my-5 text-neutral-800 text-[14px] leading-[17.07px] font-normal text-center">
              Если количество вакантных мест меньше количества поданных
              заявлений, осуществляется отбор лиц, наиболее подготовленных к
              освоению программы.
            </div>
          </div>
        </div>
        <div className="underline mx-[73px]"></div>
      </section>

      <section>
        <div
          className="w-[491px] h-[40px] bg-cover bg-center flex items-center justify-center mx-[60px]"
          style={{
            backgroundImage: "url('/frame1.png')",
          }}
        >
          <p className="left-[30px] top-[5px] text-center text-white text-xl font-medium">
            Как происходит подача документов?
          </p>
        </div>

        <div className="container items-center justify-center mx-[20px] mt-[45px]">
          <div className="flex flex-row justify-center mt-[45px]">
            <div className="mr-[70px] text-slate-300 text-opacity-50 text-8xl font-normal">
              1
            </div>
            <div className="box mt-[29px]">
              <img className="arrow" src="/arrow.png" />
            </div>
            <div className="mx-[70px] text-slate-300 text-opacity-50 text-8xl font-normal">
              2
            </div>
            <div className="box mt-[29px]">
              <img className="arrow" src="/arrow.png" />
            </div>
            <div className="ml-[70px] text-slate-300 text-opacity-50 text-8xl font-normal">
              3
            </div>
          </div>

          <div className="flex flex-row mx-[55px] mt-[30px] mb-[45px]">
            <div className="w-[320px] h-[91px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-document text-[24px] mr-[10px]"></i>
                <p className="w-[250px] text-black text-[14px] leading-[17.07px] font-normal text-left my-4">
                  Студент подписывает заявление на перевод в деканате института,
                  в который он хочет перевестись.
                </p>
              </div>
            </div>

            <div className="ml-[160px] w-[320px] h-[91px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-document text-[24px] mr-[10px]"></i>
                <p className="w-[263px] text-black text-[14px] leading-[17.07px] font-normal text-left my-4">
                  Студент относит заявление на согласование в институт, в
                  котором он учится в данный момент.
                </p>
              </div>
            </div>

            <div className="w-[320px] h-[221px] ml-[170px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-documents text-[24px] mr-1"></i>
                <p className="text-black text-[14px] leading-[17.07px] font-normal text-center mt-[15px] mb-[19px]">
                  Документы:
                </p>
              </div>
              <ul className="w-[250px] text-neutral-800 text-[14px] leading-[17.07px] font-normal mx-10 list-outside list-disc">
                <li>Паспорт</li>
                <li>
                  Приписное свидетельство
                  <br />
                  (для лиц мужского пола)
                </li>
                <li>Заявление на перевод</li>
              </ul>
              <div className="w-36 h-px border border-[#000000] mx-auto my-[15px]"></div>
              <p className="text-neutral-800 text-[14px] leading-[17.07px] font-normal text-center">
                Принести в деканат института
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center mt-[45px]">
            <div className="ml-[70px] mr-[70px] text-slate-300 text-opacity-50 text-8xl font-normal">
              4
            </div>
            <div className="box mt-[29px]">
              <img className="arrow" src="/arrow.png" />
            </div>
            <div className="mx-[70px] text-slate-300 text-opacity-50 text-8xl font-normal">
              5
            </div>
          </div>

          <div className="flex flex-row mt-[30px] mb-[220px]">
            <div className="w-[474px] h-[74px] ml-[210px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-question text-[24px] mr-[10px]"></i>
                <p className="w-[277px] text-black text-[14px] leading-[17.07px] font-normal text-left my-4">
                  Для решения вопросов, связанных с постановкой на воинский
                  учет:
                </p>
              </div>
              <div className="flex mx-28">
                <div className="w-0.5 mt-[6px] h-16 bg-zinc-200" />
                <div className="ml-[244px] mt-[6px] w-0.5 h-16 bg-zinc-200" />
              </div>
              <div className="flex">
                <div className="w-56 h-24 bg-white border border-neutral-300">
                  <p className="w-[187px] text-black text-[14px] leading-[17.07px] font-normal text-center mx-auto my-5">
                    Гражданин РФ обязан посетить второй отдел УрФУ.
                  </p>
                </div>
                <div className="ml-6 w-56 h-24 bg-white border border-neutral-300">
                  <p className="w-[207px] text-black text-[14px] leading-[17.07px] font-normal text-center mx-auto my-5">
                    Иностранные граждане обязаны посетить международный отдел.
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-[130px] w-[320px] h-[74px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-document text-[24px] mt-[2px] mr-[10px]"></i>
                <p className="w-[202px] text-black text-[14px] leading-[17.07px] font-normal text-left my-4">
                  Заявления отправляются к проректору для подписи.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="underline mx-[73px]"></div>
      </section>

      <section className="flex flex-row items-start justify-start mb-[130px]">
        {/* TODO: Реализовать отправку документов через api */}
        <div className="u-card-rec-tran mr-[106px]">
          <div className="container items-start justify-start">
            <div className="mt-[30px] mb-[45px]">
              <div className="flex items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <p className="text-[#222222] text-[24px] leading-[29.26px] font-semibold mb-[10px] ml-[30px] mr-[42px]">
                    Ты захотел перевестись?
                  </p>
                  <div className="w-36 h-px border border-[#000000] ml-[30px] mb-[10px]"></div>
                  <p className="text-[#222222] text-[16px] leading-[19.5px] font-normal ml-[30px]">
                    Тогда быстрее отправляй заявку
                    <br />
                    по кнопке ниже:
                  </p>
                  <button onClick={() => alert("Вы нажали кнопку")}>
                    <div class="w-80 h-[60px] bg-blue-900 rounded-lg mt-[20px] ml-[28px]">
                      <div class="w-80 text-white text-[16px] leading-[19.5px] font-extrabold py-[20px]">
                        Перейти к формированию заявки
                      </div>
                    </div>
                  </button>
                </div>

                <div className="flex flex-col items-start justify-start">
                  <p className="text-[#222222] text-[20px] leading-[24.38px] font-medium text-center mt-[3px] mb-[20px]">
                    Тебе может пригодиться:
                  </p>
                  <div className="text-center">
                    <span className="text-neutral-800 text-base font-normal">
                      Скачать{" "}
                    </span>
                    <u>
                      <a
                        href="https://trello.com/1/cards/65732d3e21ba13d9d9db2056/attachments/65732de0bf9d39495fe290b5/download/Перевод.pdf"
                        target="_blank"
                        className="text-blue-900 text-base font-semibold"
                      >
                        заявление
                      </a>
                    </u>
                    <span className="text-neutral-800 text-base font-normal">
                      {" "}
                      на перевод
                    </span>
                  </div>
                  <div className="text-center mt-[15px]">
                    <span className="text-neutral-800 text-base font-normal">
                      Пример{" "}
                    </span>
                    <u>
                      <a
                        href="https://vk.com/doc219067416_672095778?hash=M5fPD4UNhf6DcJVouZyHRp4ezYZBPSn44SZCZpCkSHo&dl=0TiZoKLOzQtvzpZLZptmQUfcndH8zBpPvkLjzakEMY8"
                        target="_blank"
                        className="text-blue-900 text-base font-semibold"
                      >
                        заявления
                      </a>
                    </u>
                    <span className="text-neutral-800 text-base font-normal">
                      {" "}
                      на перевод
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="w-[254px] h-[40px] bg-cover bg-center flex items-center justify-center mx-[60px] mb-[41px]"
            style={{
              backgroundImage: "url('/frame2.png')",
            }}
          >
            <p className="text-center text-white text-xl font-medium">
              Дополнительно:
            </p>
          </div>
          <div className="w-[372px] h-[148px] bg-white border border-neutral-300">
            <div className="flex flex-row items-center justify-center">
              <i className="u-icon icon-clock text-[32px] mt-[6px] mr-[10px]"></i>
              <p className="w-[268px] text-[#1E4391] text-[18px] leading-[21.94px] font-medium text-left mt-[20px] mb-[15px]">
                Сколько времени занимает процесс перевода?
              </p>
            </div>
            <div className="w-44 h-px border border-neutral-800 mx-auto mb-[15px]"></div>
            <p className="text-center text-neutral-800 text-[14px] leading-[17.07px] font-normal">
              В большинстве случаев перевод
              <br />
              занимает от одной до двух недель.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FourthSection;
