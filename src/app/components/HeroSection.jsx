"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="mx-auto">
      <div className="flex container flex-col items-center">
        <div className="w-full h-[540px] absolute top-0 bg-gradient-to-l from-blue-900 via-sky-600 to-blue-500" />
        <div className="w-full lg:w-[1280px] h-[500px] sm:h-[500px] md:h-[550px] lg:h-[550px] relative bg-[#748AB9] rounded-bl-[70px] rounded-br-[70px]">
          <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h1 className="text-white mt-[50px] mb-[35px] mx-4 text-xl leading-[50.4px] text-left sm:text-5xl lg:text-5xl lg:leading-normal lg:mx-14 font-bold">
              Сервис восстановления и <br />
              перевода студентов УрФУ
            </h1>
            <div className="h-[0px] lg:w-[700px] relative mx-4 lg:mx-14 mb-[35px] border border-white" />
            <p className="lg:w-[700px] leading-[50.4px] text-white mx-4 lg:mx-14 text-xs text-left sm:text-lg lg:text-xl font-light">
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
