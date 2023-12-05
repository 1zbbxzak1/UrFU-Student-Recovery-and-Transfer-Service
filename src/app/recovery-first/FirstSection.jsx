"use client";
import React from "react";
import "./recovery-first.css";

const FirstSection = () => {
  return (
    <main className="mt-10 mb-10 mx-auto">
      <h2 className="mx-[80px] mb-10 text-left text-zinc-700">
        Восстановление на своё или на другое <br />
        направление в УрФУ на бюджет
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
        <div className="flex flex-row items-center justify-center mx-[80px] mt-[45px] mb-[154px]">
          <div className="w-80 h-24 bg-white border border-neutral-300">
            <div className="w-[268px] mx-5 my-5 text-neutral-800 text-sm font-normal">
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
          <div className="my-[30px] mx-[74px]">
            <i className="u-icon icon-plus text-[31px]"></i>
          </div>
          <div className="w-80 h-24 bg-white border border-neutral-300">
            <div className="w-[268px] mx-5 my-5 text-neutral-800 text-sm font-normal">
              Восстановление осуществляется только при наличии вакантных
              бюджетных мест.
            </div>
          </div>
        </div>
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

        <div className="container items-center justify-center mx-[20px] mt-[45px] mb-[145px]">
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
            <div className="w-[290px] h-[226px] ml-[55px] mr-[124px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-documents text-[24px] mr-1"></i>
                <p className="text-black text-sm font-normal text-center mt-[15px] mb-[19px]">
                  Документы:
                </p>
              </div>
              <ul className="w-[250px] text-neutral-800 text-sm font-normal mx-10 list-outside list-disc">
                <li>паспорт</li>
                <li>зачетная книжка</li>
                <li>
                  приписное свидетельство
                  <br />
                  (для лиц мужского пола)
                </li>
                <li>заявление на восстановление</li>
              </ul>
              <div className="w-36 h-px border border-black mx-auto my-[15px]"></div>
              <p className="text-neutral-800 text-sm font-normal text-center">
                принести в деканат института
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

            <div className="ml-[130px] mt-[80px] w-[271px] h-[74px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-document text-[24px] mr-[10px]"></i>
                <p className="w-[201px] text-black text-sm font-normal text-left my-4">
                  Заявления отправляются к проректору для подписи.
                </p>
              </div>
            </div>
          </div>
        </div>
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

        <div className="container items-center justify-center mx-[20px] mt-[45px] mb-[154px]">
          <div className="flex flex-row mt-[30px] mb-[45px]">
            <div className="w-[412px] h-[187px] ml-[55px] mr-[30px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-clock text-[32px] mt-[20px] mr-[10px]"></i>
                <p className="w-[268px] text-[#1E4391] text-lg font-medium text-left mt-[39px] mb-[15px]">
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

            <div className="w-[412px] h-[187px] mr-[30px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-calendar text-[32px] mt-[20px] mr-[10px]"></i>
                <p className="w-[330px] text-[#1E4391] text-lg font-medium text-left mt-[39px] mb-[15px]">
                  Когда можно подать заявление на восстановление?
                </p>
              </div>
              <div className="w-44 h-px border border-neutral-800 mx-auto mb-[15px]"></div>
              <p className="text-center text-neutral-800 text-[14px] leading-[17.07px] font-normal">
                Заявление можно подать до середины
                <br />
                второго месяца каждого семестра.
              </p>
            </div>

            <div className="w-[407px] h-[187px] bg-white border border-neutral-300">
              <div className="flex flex-row items-center justify-center">
                <i className="u-icon icon-document text-[32px] mt-[10px] mr-[10px]"></i>
                <p className="w-[330px] text-[#1E4391] text-lg font-medium text-left mt-[10px]">
                  Можно ли подать заявления на восстановление на несколько
                  направлений?
                </p>
              </div>
              <div className="w-44 h-px border border-neutral-800 mx-auto my-[15px]"></div>
              <p className="text-center text-neutral-800 text-[14px] leading-[17.07px] font-normal">
                В УрФУ можно подать заявления на
                <br />
                восстановление на несколько
                <br />
                направлений, если соблюдены условия.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* TODO: Реализовать отправку документов */}
      </section>
    </main>
  );
};

export default FirstSection;
