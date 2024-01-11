"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import FooterLink from "./FooterLink";
import { getUserInfo } from "../api/user";
import { getSessionStatus, setSessionStatus } from "../utils/const";

const footerLinks = [
  {
    title: "ГЛАВНАЯ",
    href: "/",
  },
  {
    title: "ЗАЯВКИ",
    href: "/application",
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

const currentYear = new Date().getFullYear();

const Footer = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [isTokenChecked, setTokenChecked] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        getSessionStatus();
        setSessionStatus(true);
        setAuthenticated(true);
      }

      setTokenChecked(true);
    };

    checkToken();
    getUserInfo(setUserInfo);
  }, []);

  if (!isTokenChecked) {
    return null;
  }

  return (
    <nav className="w-full px-[80px] z-10 bg-[#545454]">
      <div className="flex lg:pt-4 flex-wrap items-center justify-between pt-2">
        <ul className="flex md:p-0 md:flex-row md:space-x-12 mt-3">
          {footerLinks.map((link, index) => (
            <li key={index}>
              {link.href === "/application" ? (
                <FooterLink
                  href={
                    authenticated &&
                    userInfo &&
                    userInfo.id === "00000000-0000-0000-0000-000000000001"
                      ? "/application/applicationAdmin"
                      : link.href
                  }
                  title={link.title}
                ></FooterLink>
              ) : (
                <FooterLink href={link.href} title={link.title} />
              )}
            </li>
          ))}
        </ul>
        <Link
          href={"/dashboard"}
          className="inline-flex lg:pt-3 flex-wrap items-center justify-between"
        >
          <div className="relative block text-white sm:text-sm rounded group md:p-0 md:flex-row md:space-x-12">
            <span className="group-hover:block absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
            {"ПРОФИЛЬ"}
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <p className="text-white text-sm my-5">{currentYear}</p>
      </div>
    </nav>
  );
};

export default Footer;
