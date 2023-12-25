"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import ModalAuth from "./ModalAuth";
import { seedData } from "../api/seed";
import { apiFetch } from "../api/auth";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "ГЛАВНАЯ",
    href: "/",
  },
  {
    title: "ЗАЯВКИ",
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
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const [showModalReg, setShowModalReg] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const [authenticated, setAuthenticated] = useState(false);
  const [isTokenChecked, setTokenChecked] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const changeTypePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [formDataReg, setFormDataReg] = useState({
    Email: "",
    FirstName: "",
    LastName: "",
    MiddleName: "",
    Password: "",
  });

  const handleInputChangeReg = (e) => {
    const { name, value } = e.target;
    setFormDataReg((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log("Input changed!");
  };

  const [formDataLogin, setFormDataLogin] = useState({
    Email: "",
    Password: "",
  });

  const handleInputChangeLogin = (e) => {
    const { name, value } = e.target;
    setFormDataLogin((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log("Input changed!");
  };

  const handleRegister = async () => {
    try {
      const response = await apiFetch("/auth/register", "POST", formDataReg);
      console.log("Registration successful", response);

      setAuthenticated(true);
      localStorage.setItem("token", response.token);

      setShowModalReg(false);
    } catch (error) {
      console.error("Registration failed", error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await apiFetch("/auth/login", "POST", formDataLogin);
      console.log("Login successful", response);

      setAuthenticated(true);
      localStorage.setItem("token", response.token);

      setShowModalLogin(false);
    } catch (error) {
      console.error("Login failed", error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    console.log("Remove token");
  };

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        setAuthenticated(true);
      }

      setTokenChecked(true);
    };

    checkToken();
  }, []);

  if (!isTokenChecked) {
    return (
      <nav className="w-full px-[80px] z-10 bg-gradient-to-l from-blue-900 via-sky-600 to-blue-500 bg-opacity-100">
      <div className="flex container flex-wrap items-center justify-between pt-[10px] mx-auto">
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
          <ul className="inline-flex p-4 md:p-0 md:flex-row md:space-x-16 lg:space-x-12 mb-[12px]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        {authenticated ? (
          <ul className="inline-flex p-4 md:p-0 md:flex-row md:space-x-16 lg:space-x-2 my-5">
            <li>
              <Link href="/dashboard">
                <div className="relative block py-2 pl-3 pr-4 text-white sm:text-xl lg:text-[14px] lg:leading-[17.07px] rounded md:p-0 group">
                  <span className="group-hover:block absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                  ПРОФИЛЬ
                </div>
              </Link>
            </li>
            <li className="mt-[-9px]">
              <Link href="/">
                <button onClick={handleLogout}>
                  <div className="w-[70px] h-9 p-2.5 rounded-lg border border-white">
                    <div className="text-white text-xs font-medium uppercase">
                      Выход
                    </div>
                  </div>
                </button>
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="inline-flex p-4 md:p-0 md:flex-row md:space-x-16 lg:space-x-2 my-5">
            <li className="mt-[-9px]">
              <button
                onClick={() => {
                  setShowModalLogin(true);
                  seedData();
                }}
              >
                <div className="w-16 h-9 p-2.5 rounded-lg border border-white">
                  <div className="text-white text-xs font-medium uppercase">
                    Войти
                  </div>
                </div>
              </button>
            </li>
            <li className="mt-[-9px]">
              <button
                onClick={() => {
                  setShowModalReg(true);
                  seedData();
                }}
              >
                <div className="w-44 h-9 p-2.5 bg-blue-950 rounded-lg justify-start items-start gap-2.5 inline-flex">
                  <div className="text-white text-xs font-medium font-['Montserrat'] uppercase">
                    Зарегистрироваться
                  </div>
                </div>
              </button>
            </li>
          </ul>
        )}
      </div>
      </nav>
    );
  }

  return (
    <nav className="w-full px-[80px] z-10 bg-gradient-to-l from-blue-900 via-sky-600 to-blue-500 bg-opacity-100">
      <div className="flex container flex-wrap items-center justify-between pt-[10px] mx-auto">
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
          <ul className="inline-flex p-4 md:p-0 md:flex-row md:space-x-16 lg:space-x-12 mb-[12px]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        {authenticated ? (
          <ul className="inline-flex p-4 md:p-0 md:flex-row md:space-x-16 lg:space-x-2 my-5">
            <li>
              <Link href="/dashboard">
                <div className="relative block py-2 pl-3 pr-4 text-white sm:text-xl lg:text-[14px] lg:leading-[17.07px] rounded md:p-0 group">
                  <span className="group-hover:block absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                  ПРОФИЛЬ
                </div>
              </Link>
            </li>
            <li className="mt-[-9px]">
              <Link href="/">
                <button onClick={handleLogout}>
                  <div className="w-[70px] h-9 p-2.5 rounded-lg border border-white">
                    <div className="text-white text-xs font-medium uppercase">
                      Выход
                    </div>
                  </div>
                </button>
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="inline-flex p-4 md:p-0 md:flex-row md:space-x-16 lg:space-x-2 my-5">
            <li className="mt-[-9px]">
              <button
                onClick={() => {
                  setShowModalLogin(true);
                  seedData();
                }}
              >
                <div className="w-16 h-9 p-2.5 rounded-lg border border-white">
                  <div className="text-white text-xs font-medium uppercase">
                    Войти
                  </div>
                </div>
              </button>
            </li>
            <li className="mt-[-9px]">
              <button
                onClick={() => {
                  setShowModalReg(true);
                  seedData();
                }}
              >
                <div className="w-44 h-9 p-2.5 bg-blue-950 rounded-lg justify-start items-start gap-2.5 inline-flex">
                  <div className="text-white text-xs font-medium font-['Montserrat'] uppercase">
                    Зарегистрироваться
                  </div>
                </div>
              </button>
            </li>
          </ul>
        )}
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}

      <ModalAuth
        isVisible={showModalReg}
        onClose={() => setShowModalReg(false)}
      >
        <div className="items-center justify-center">
          <h3 className="text-center text-blue-900 text-xl font-semibold mb-[40px]">
            Сервис восстановления и перевода студентов УрФУ
          </h3>
          <form className="flex flex-col">
            <div className="mb-5">
              <input
                name="email"
                type="email"
                id="email"
                defaultValue={formDataReg.Email}
                onChange={handleInputChangeReg}
                className="bg-white border border-[#D3D3D3] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full  p-2.5"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-5">
              <input
                name="lastName"
                type="lastName"
                id="lastName"
                defaultValue={formDataReg.LastName}
                onChange={handleInputChangeReg}
                className="bg-white border border-[#D3D3D3] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full h-[48px] p-2.5"
                placeholder="Фамилия"
                required
              />
            </div>
            <div className="mb-5">
              <input
                name="firstName"
                type="firstName"
                id="firstName"
                defaultValue={formDataReg.FirstName}
                onChange={handleInputChangeReg}
                className="bg-white border border-[#D3D3D3] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full h-[48px] p-2.5"
                placeholder="Имя"
                required
              />
            </div>
            <div className="mb-5">
              <input
                name="middleName"
                type="middleName"
                id="middleName"
                defaultValue={formDataReg.MiddleName}
                onChange={handleInputChangeReg}
                className="bg-white border border-[#D3D3D3] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full h-[48px] p-2.5"
                placeholder="Отчество"
              />
            </div>
            <div className="mb-[35px] flex items-center text-center">
              <input
                name="password"
                type={passwordVisible ? "text" : "password"}
                id="password"
                defaultValue={formDataReg.Password}
                onChange={handleInputChangeReg}
                className="bg-white border border-[#D3D3D3] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full h-[48px] p-2.5"
                placeholder="Пароль"
                required
              />
              <button
                onClick={changeTypePassword}
                className={`icon ${
                  passwordVisible ? "icon-active" : "i-hidden"
                } ml-[-30px]`}
                type="button"
              ></button>
            </div>

            <button type="reset" onClick={handleRegister}>
              <div className="w-full h-[48px] bg-blue-900 rounded-lg">
                <div className="w-[154px] justify-center items-center inline-flex py-4 text-white text-[14px] leading-[17.07px] font-medium">
                  Зарегистрироваться
                  <i className="icon icon-r-arrow w-3 h-3 ml-[10px]"></i>
                </div>
              </div>
            </button>
            <div className="text-center mt-[10px]">
              <span className="text-neutral-800 text-[12px] leading-[14.63px] font-normal">
                Уже зарегистрировались?{" "}
              </span>
              <u>
                <button
                  onClick={() => {
                    setShowModalReg(false);
                    setShowModalLogin(true);
                  }}
                  className="text-blue-900 text-base text-[12px] leading-[14.63px] font-normal underline"
                >
                  Войти
                </button>
              </u>
            </div>
          </form>
        </div>
      </ModalAuth>

      <ModalAuth
        isVisible={showModalLogin}
        onClose={() => setShowModalLogin(false)}
      >
        <div className="items-center justify-center">
          <h3 className="text-center text-blue-900 text-xl font-semibold mb-[40px]">
            Сервис восстановления и перевода студентов УрФУ
          </h3>
          <form className="flex flex-col">
            <div className="mb-5">
              <input
                name="email"
                type="email"
                id="email"
                defaultValue={formDataLogin.Email}
                onChange={handleInputChangeLogin}
                className="bg-white border border-[#D3D3D3] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full  p-2.5"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-[35px] flex items-center text-center">
              <input
                name="password"
                type={passwordVisible ? "text" : "password"}
                id="password"
                defaultValue={formDataReg.Password}
                onChange={handleInputChangeLogin}
                className="bg-white border border-[#D3D3D3] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full h-[48px] p-2.5"
                placeholder="Пароль"
                required
              />
              <button
                onClick={changeTypePassword}
                className={`icon ${
                  passwordVisible ? "icon-active" : "i-hidden"
                } ml-[-30px]`}
                type="button"
              ></button>
            </div>

            <button type="reset" onClick={handleLogin}>
              <div className="w-full h-[48px] bg-blue-900 rounded-lg">
                <div className="w-[154px] justify-center items-center inline-flex py-4 text-white text-[14px] leading-[17.07px] font-medium">
                  Войти
                  <i className="icon icon-r-arrow w-3 h-3 ml-[10px]"></i>
                </div>
              </div>
            </button>
          </form>
        </div>
      </ModalAuth>
    </nav>
  );
};

export default Navbar;
