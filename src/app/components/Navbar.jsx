"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "ГЛАВНАЯ",
    href: "/",
  },
  {
    title: "ВАКАНТНЫЕ МЕСТА",
    href: "/vacant",
  },
  {
    title: "КОНТАКТЫ",
    href: "/contacts",
  },
  // {
  //   title: "ЛИЧНЫЙ КАБИНЕТ",
  //   href: "/dashboard",
  // },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="w-full mx-auto top-0 left-0 right-0 z-10 bg-gradient-to-l from-blue-900 via-sky-600 to-blue-500 bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-16 ml-[120px] mt-5">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}

      {/* Добавить реализацию кнопок "Войти" и "Зарегестрировться" в Navbar */}
      {/* "Войти": переход на новую страницу, где будет необходимо ввести логин и пароль,
          после нажатия кнопки "Войти" получить данные из базы о пользователе и дать ему войти, 
          если же такого пользователя нет в базе, то перенаправить на регистрацию (свои шаги),
          после завершения всех процедур перенаправить пользователя в личный кабинет, а сверху
          появится в Navbar кнопка "Личный кабинет" с правого угла
      */}
      {/* "Зарегестрироваться": переход на новую страницу,
          где будет необходимо ввести: Фамилию, Имя, Отчество, E-Mail (логин), Телефон, Придумайте пароль (дважды), Согласие на ОПД и ППД,
          после нажатия кнопки "Зарегестрироваться", переход в личный кабинет и
          появление в Navbar кнопки "Личный кабинет" с правого угла
      */}
    </nav>
  );
};

export default Navbar;
