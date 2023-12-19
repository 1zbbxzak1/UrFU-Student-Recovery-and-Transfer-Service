"use client";
import React from "react";
import "../recovery.css";

const SecondSection = () => {
  return (
    <main className="mt-10 mb-10 mx-auto">
      <h2 className="mx-[80px] mb-[80px] text-[36px] leading-[50.4px] text-left text-zinc-700">
        Восстановления на контрактую форму
        <br />
        обучения
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
        <div className="flex flex-row items-center justify-start mx-[80px] mt-[45px]">
          <div className="w-80 h-24 bg-white border border-neutral-300">
            <div className="w-[268px] mx-5 my-5 text-neutral-800 text-sm font-normal text-center">
              Студент может восстановиться в УрФУ, если он был отчислен не более
              5 лет назад.
            </div>
          </div>
          <div className="my-[30px] mx-[74px]">
            <i className="u-icon icon-plus text-[31px]"></i>
          </div>
          <div className="w-80 h-24 bg-white border border-neutral-300">
            <div className="w-[268px] h-9 mx-5 my-7 text-neutral-800 text-sm font-normal">
              Академическая разница не должна превышать 15 зачетных единиц.
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

          <div className="flex flex-row mt-[30px] mb-[45px]">
            <div className="w-[320px] h-[248px] ml-[55px] mr-[107px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-documents text-[24px] mr-1"></i>
                <p className="text-black text-sm font-normal text-center mt-[15px] mb-[19px]">
                  Документы:
                </p>
              </div>
              <ul className="w-[250px] text-neutral-800 text-sm font-normal mx-10 list-outside list-disc">
                <li>Паспорт</li>
                <li>Зачетная книжка</li>
                <li>
                  Приписное свидетельство
                  <br />
                  (для лиц мужского пола)
                </li>
                <li>Паспорт плательщика</li>
                <li>Заявление на восстановление</li>
              </ul>
              <div className="w-36 h-px border border-[#000000] mx-auto my-[15px]"></div>
              <p className="text-neutral-800 text-sm font-normal text-center">
                Принести в деканат института
              </p>
            </div>

            <div className="w-[474px] h-[74px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-question text-[24px] mr-[10px]"></i>
                <p className="w-[277px] text-black text-sm font-normal text-left my-4">
                  Для решения вопросов, связанных с постановкой на воинский
                  учет:
                </p>
              </div>
              <div className="flex mx-28">
                <div className="w-0.5 h-16 bg-zinc-200" />
                <div className="ml-[244px] w-0.5 h-16 bg-zinc-200" />
              </div>
              <div className="flex">
                <div className="w-56 h-24 bg-white border border-neutral-300">
                  <p className="w-[187px] text-black text-sm font-normal text-center mx-auto my-5">
                    Гражданин РФ обязан посетить второй отдел УрФУ.
                  </p>
                </div>
                <div className="ml-6 w-56 h-24 bg-white border border-neutral-300">
                  <p className="w-[207px] text-black text-sm font-normal text-center mx-auto my-5">
                    Иностранные граждане обязаны посетить международный отдел.
                  </p>
                </div>
              </div>
            </div>

            <div className="ml-[130px] w-[271px] h-[74px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-document text-[24px] mr-[10px]"></i>
                <p className="w-[201px] text-black text-sm font-normal text-left my-4">
                  Заявления отправляются к проректору для подписи.
                </p>
              </div>
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

          <div className="flex flex-row mt-[30px] mb-[45px]">
            <div className="w-[285px] h-[245px] ml-[319px] mr-[107px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i class="u-icon icon-calculator text-[24px] mr-[5px] mb-[4px]"></i>
                <p className="text-black text-[14px] leading-[17.07px] font-normal text-center mt-[15px] mb-[19px]">
                  Оплата
                </p>
              </div>
              <p className="w-[245px] text-neutral-800 text-[14px] leading-[17.07px] font-normal mx-5 text-center">
                После расчёта стоимости студент посещает договорной отдел для
                подписи и оплачивает договор в кассе УрФУ в т.ч. за
                наличный/безналичный расчет.
              </p>
              <div className="w-36 h-px border border-[#000000] mx-auto my-[15px]"></div>
              <p className="text-neutral-800 text-[14px] leading-[17.07px] font-normal text-center">
                Адрес:
                <br />
                ул. Мира, д.19, левое крыло
                <br />
                главного учебного корпуса
              </p>
            </div>
            <div className="ml-[130px] w-[271px] h-[74px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-news text-[24px] mr-[10px]"></i>
                <p className="w-[201px] text-black text-[14px] leading-[17.07px] font-normal text-left my-4">
                  После оплаты выходит приказ о восстановлении.
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
                    Ты захотел восстановится?
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
                        href="https://urfu.ru/fileadmin/user_upload/urfu.ru/documents/forms/Forma_No7_Zajavlenie_na_vosstanovlenie.pdf"
                        target='_blank'
                        className="text-blue-900 text-base font-semibold"
                      >
                        заявление
                      </a>
                    </u>
                    <span className="text-neutral-800 text-base font-normal">
                      {" "}
                      на восстановление
                    </span>
                  </div>
                  <div className="text-center mt-[15px]">
                    <span className="text-neutral-800 text-base font-normal">
                      Пример{" "}
                    </span>
                    <u>
                      <a
                        href="https://vk.com/doc219067416_672095794?hash=TDeayt64jWefgTdNFY3IjZM4jt7xdMLXYEZbsR1F3Mg&dl=bxOz0BIqDW28ZY8jlfCmLomLW4ytgx902z8t4HD7MZD"
                        target="_blank"
                        className="text-blue-900 text-base font-semibold"
                      >
                        заявления
                      </a>
                    </u>
                    <span className="text-neutral-800 text-base font-normal">
                      {" "}
                      на восстановление
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="w-[254px] h-[40px] bg-cover bg-center flex items-center justify-center mx-[60px] mb-[40px]"
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
              <i className="u-icon icon-clock text-[32px] mt-[1px] mr-[10px]"></i>
              <p className="w-[268px] text-[#1E4391] text-[18px] leading-[21.94px] font-medium text-left mt-[20px] mb-[15px]">
                Сколько времени занимает процесс восстановления?
              </p>
            </div>
            <div className="w-44 h-px border border-neutral-800 mx-auto mb-[15px]"></div>
            <p className="text-center text-neutral-800 text-[14px] leading-[17.07px] font-normal">
              В большинстве случаев восстановления
              <br />
              занимает до 1 календарного месяца.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SecondSection;
