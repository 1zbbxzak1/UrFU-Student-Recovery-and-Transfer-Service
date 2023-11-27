"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bottom-0">
      <div className="flex container flex-col items-center">
        <div className="w-full h-[540px] absolute top-0 bg-gradient-to-l from-blue-900 via-sky-600 to-blue-500" />
        <div className="w-full h-[550px] sm:h-[470px] relative bg-[#748AB9] rounded-bl-[70px] rounded-br-[70px]">
          <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h1 className="relative text-white mt-[50px] mb-[35px] mx-14 text-5xl sm:text-4xl lg:text-5xl lg:leading-normal font-bold">
              Сервис восстановления и <br />
              перевода студентов УрФУ
            </h1>
            <div className="h-[0px] lg:w-[700px] relative mx-14 mb-[35px] border border-white" />
            <p className="text-white relative ml-14 text-xl sm:text-left sm:text-[12px] sm:leading-4 lg:text-xl font-light">
              Сделайте процесс восстановления и перевода студентов УрФУ <br />
              удобным с нашим онлайн-сервисом. Получайте актуальную <br />
              информацию, подавайте документы для проверки, и решайте <br />
              все вопросы в одном месте.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
