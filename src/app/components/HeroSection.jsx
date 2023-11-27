"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="lg:py-12">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="w-full h-[540px] left-0 top-0 absolute bg-gradient-to-l from-blue-900 via-sky-600 to-blue-500" />
        <div className="w-[1427px] h-[550px] top-[100px] absolute bg-[#748AB9] rounded-bl-[70px] rounded-br-[70px]" />
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-[171px] text-5xl lg:text-5xl lg:leading-normal font-bold">
            <span className="absolute ml-14">
              Сервис восстановления и <br />
              перевода студентов УрФУ
            </span>
          </h1>
          <div className="h-[0px] min-w-[300px] lg:w-[700px] absolute ml-14 border border-white" />
          <p className="text-white absolute sm:text-lg ml-14 mt-9 mb-8 lg:text-xl font-light text-2xl">
            Сделайте процесс восстановления и перевода студентов УрФУ <br />
            удобным с нашим онлайн-сервисом. Получайте актуальную <br />
            информацию, подавайте документы для проверки, и решайте <br />
            все вопросы в одном месте.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
