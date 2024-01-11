"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="px-[110px]">
      <div className="flex container flex-col items-center mx-auto">
        <div className="w-full h-[440px] md:h-[640px] lg:h-[540px] absolute top-0 bg-gradient-to-l from-blue-900 via-sky-600 to-blue-500" />
        <div className="w-full h-[500px] sm:h-[500px] md:h-[550px] lg:h-[550px] relative rounded-bl-[70px] rounded-br-[70px]">
          <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h1 className="text-white mt-[30px] mb-[35px] text-xl text-left sm:text-5xl lg:text-[48px] lg:leading-[58.51px] font-bold">
              Сервис восстановления и <br />
              перевода студентов УрФУ
            </h1>
            <div className="h-[0px] lg:w-[690px] relative mb-[35px] border border-white" />
            <p className="lg:w-[690px] text-white text-xs text-left sm:text-lg lg:text-[16px] lg:leading-[19.5px]">
              Сделайте процесс восстановления и перевода студентов УрФУ
              удобным с нашим онлайн-сервисом. Получайте актуальную
              информацию, подавайте документы для проверки, и решайте
              все вопросы в одном месте.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
