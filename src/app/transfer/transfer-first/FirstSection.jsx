"use client";
import React from "react";
import "../transfer.css";

const FirstSection = () => {
  return (
    <main className="mt-10 mb-10 mx-auto">
      <h2 className="mx-[80px] mb-[80px] text-[36px] leading-[50.4px] text-left text-zinc-700">
        Перевод на бюджетную форму обучения с<br />
        контрактной
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
          <div className="w-80 h-32 bg-white border border-neutral-300">
            <div className="w-[268px] mx-5 mt-[36px] mb-[37px] text-neutral-800 text-[14px] leading-[17.07px] font-normal text-center">
              Перевод осуществляется только при наличии вакантных бюджетных
              мест.
            </div>
          </div>
          <div className="my-[30px] mx-[74px]">
            <i className="u-icon icon-plus text-[31px]"></i>
          </div>
          <div className="w-80 h-32 bg-white border border-neutral-300">
            <div className="w-[268px] h-9 mx-5 my-7 text-neutral-800 text-[14px] leading-[17.07px] font-normal text-center">
              Студент должен иметь оценки «отлично» или «хорошо» по всем
              предметам за два предыдущих семестра.
            </div>
          </div>
          <div className="my-[30px] mx-[74px]">
            <i className="u-icon icon-plus text-[31px]"></i>
          </div>
          <div className="w-80 h-32 bg-white border border-neutral-300">
            <div className="w-[268px] mx-5 my-5 text-neutral-800 text-[14px] leading-[17.07px] font-normal text-center">
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
          <div className="flex flex-row justify-start mt-[45px] ml-[215px]">
            <div className="mr-[70px] text-slate-300 text-opacity-50 text-8xl font-normal">
              1
            </div>
            <div className="box mt-[29px]">
              <img className="arrow" src="/arrow.png" />
            </div>
            <div className="mx-[70px] text-slate-300 text-opacity-50 text-8xl font-normal">
              2
            </div>
          </div>

          <div className="flex flex-row mt-[30px] mb-[45px]">
            <div className="w-[290px] h-[204px] ml-[73px] mr-[124px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-documents text-[24px] mr-1"></i>
                <p className="text-black text-[14px] leading-[17.07px] font-normal text-center mt-[15px] mb-[19px]">
                  Документы:
                </p>
              </div>
              <ul className="w-[250px] text-neutral-800 text-[14px] leading-[17.07px] font-normal mx-10 list-outside list-disc">
                <li>Зачетная книжка</li>
                <li>Справка об отсутствии задолженностей</li>
                <li>Заявление на перевод</li>
              </ul>
              <div className="w-36 h-px border border-[#000000] mx-auto my-[15px]"></div>
              <p className="text-neutral-800 text-[14px] leading-[17.07px] font-normal text-center">
                принести в деканат института
              </p>
            </div>

            <div className="w-[290px] h-[204px] ml-[100px] mr-[124px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-cup text-[24px] mr-[3px]"></i>
                <p className="text-black text-[14px] leading-[17.07px] font-normal text-center mt-[15px] mb-[19px]">
                  По желанию студента
                </p>
              </div>
              <ul className="w-[250px] text-neutral-800 text-[14px] leading-[17.07px] font-normal mx-10 list-outside list-disc">
                <li>Характеристика от тьютора</li>
                <li>Документы, подтверждающие достижения студента</li>
              </ul>
              <div className="w-36 h-px border border-[#000000] mx-auto my-[15px]"></div>
              <p className="text-neutral-800 text-[14px] leading-[17.07px] font-normal text-center">
                принести в деканат института
              </p>
            </div>
          </div>
        </div>
        <div className="underline mx-[73px]"></div>
      </section>

      <section>
        <div
          className="w-[254px] h-[40px] bg-cover bg-center flex items-center justify-center mx-[60px]"
          style={{
            backgroundImage: "url('/frame2.png')",
          }}
        >
          <p className="text-center text-white text-xl font-medium">
            Дополнительно:
          </p>
        </div>

        <div className="container items-center justify-center mx-[20px] mt-[45px]">
          <div className="flex flex-row mt-[30px] mb-[45px]">
            <div className="w-[372px] h-[241px] ml-[55px] mr-[84px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-clock text-[32px] mt-[1px] mr-[10px]"></i>
                <p className="w-[268px] text-[#1E4391] text-[18px] leading-[21.94px] font-medium text-left mt-[20px] mb-[15px]">
                  Сколько времени занимает процесс перевода?
                </p>
              </div>
              <div className="w-44 h-px border border-neutral-800 mx-auto mb-[15px]"></div>
              <p className="text-center text-neutral-800 text-[14px] leading-[17.07px] font-normal">
                В большинстве случаев перевод
                <br />
                занимает до 1 календарного месяца.
              </p>
            </div>

            <div className="w-[372px] h-[241px] mr-[84px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-calendar text-[32px] mt-[1px] mr-[10px]"></i>
                <p className="w-[268px] text-[#1E4391] text-[18px] leading-[21.94px] font-medium text-left mt-[20px] mb-[15px]">
                  Когда можно подать заявление на перевод?
                </p>
              </div>
              <div className="w-[248px] h-px border border-neutral-800 mx-auto mb-[15px]"></div>
              <p className="text-left text-neutral-800 text-[14px] leading-[17.07px] font-semibold mx-[62px] mb-[10px]">
                Заявления принимаются 2 раза в год в каждом семестре:
              </p>
              <ul className="w-[248px] text-neutral-800 text-[14px] leading-[17.07px] font-normal ml-[85px] list-outside list-disc">
                <li className="mb-3">
                  До 5 февраля для перевода с весеннего семестра.
                </li>
                <li>До 5 июля для перевода с осеннего семестра.</li>
              </ul>
            </div>

            <div className="w-[372px] h-[241px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-calendar text-[32px] mt-[20px] mr-[10px]"></i>
                <p className="w-[268px] text-[#1E4391] text-[18px] leading-[21.94px] font-medium text-left mt-[20px]">
                  Когда выйдет приказ о переводе?
                </p>
              </div>
              <div className="w-44 h-px border border-neutral-800 mx-auto my-[15px]"></div>
              <ul className="w-[285px] text-neutral-800 text-[14px] leading-[17.07px] font-normal ml-[65px] mr-[43px] list-outside list-disc">
                <li className="mb-3">
                  Для перевода на осенний семестр приказ выходит с 1 октября.
                </li>
                <li>
                  Для перевода на весенний семестр приказ выходит с 1 марта.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="underline mx-[73px]"></div>
      </section>

      <section className="mb-[130px]">
        {/* TODO: Реализовать отправку документов через api */}
        <div className="u-card-rec-tran">
          <div className="container items-start justify-start">
            <div className="mt-[30px] mb-[45px]">
              <div className="flex items-start justify-start">
                <div className="card-transfer flex flex-col items-start justify-start">
                  <p className="text-[#222222] text-[24px] leading-[29.26px] font-semibold mb-[10px] ml-[30px] mr-[45px]">
                    Ты захотел перевестись?
                  </p>
                  <div className="w-36 h-px border border-[#000000] ml-[30px] mb-[10px]"></div>
                  <p className="text-[#222222] text-[16px] leading-[19.5px] font-normal ml-[30px]">
                    Тогда быстрее отправляй заявку
                    <br />
                    по кнопке ниже:
                  </p>
                  <button onClick={() => alert("Вы нажали кнопку")}>
                    <div class="w-[345px] h-[60px] bg-blue-900 rounded-lg mt-[20px] ml-[28px]">
                      <div class="w-[345px] text-white text-[16px] leading-[19.5px] font-extrabold py-[20px]">
                        Перейти к формированию заявки
                      </div>
                    </div>
                  </button>
                </div>

                <div className="flex flex-col items-start justify-start ml-5">
                  <p className="text-[#222222] text-[20px] leading-[24.38px] font-medium text-center mt-[3px] mb-[20px]">
                    Тебе может пригодиться:
                  </p>
                  <div className="text-center">
                    <span className="text-neutral-800 text-base font-normal">
                      Скачать{" "}
                    </span>
                    <u>
                      <a
                        href="https://urfu.ru/fileadmin/user_upload/urfu.ru/documents/forms/Forma_No19_Zajavlenie_o_perevode_na_bjudzhet.pdf"
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
                        href="https://vk.com/doc219067416_672095785?hash=sUZ0NZqxh3bXW9q4uMZFDeQtfQXTp00OATNlxZoi214&dl=rxHU83RoeGrac5GaCfje3zNyNcSaKp9zOFLCreEownH"
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
      </section>
    </main>
  );
};

export default FirstSection;
