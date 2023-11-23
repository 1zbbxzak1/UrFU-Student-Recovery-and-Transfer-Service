"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="w-full h-[540px] left-0 top-0 absolute bg-gradient-to-l from-blue-900 via-sky-600 to-blue-500" />
      <div className="w-[1427px] h-[550px] top-[100px] absolute bg-slate-400 rounded-bl-[70px] rounded-br-[70px]" />
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-5xl sm:text-5xl lg:text-5xl lg:leading-normal font-bold">
            <span className="absolute ml-14">
              Сервис восстановления и <br/>перевода студентов УрФУ
            </span>
            <br></br>
            <br></br>
          </h1>
          <p className="text-white absolute sm:text-lg ml-14 mb-8 lg:text-xl font-light text-2xl">
            Упростите процесс восстановления и перевода студентов УрФУ <br/>с нашим удобным онлайн-сервисом. Получайте актуальную <br/>информацию, подавайте документы, и решайте все вопросы в одном месте.
          </p>
        </div>
      </div>
      <div className="w-full h-2.5 left-0 top-[530px] absolute bg-sky-300" style={{ width: "calc(50% - 720px)" }} />
      <div className="w-full h-2.5 right-0 top-[530px] absolute bg-sky-300" style={{ width: "calc(50% - 707px)" }} />
    </section>
  );
};

export default HeroSection;
