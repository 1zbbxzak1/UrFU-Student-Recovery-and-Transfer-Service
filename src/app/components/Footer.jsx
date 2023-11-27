"use client";
import React from "react";
import Link from "next/link";
import FooterLink from "./FooterLink";

const footerLinks = [
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
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <nav className="w-full mx-auto top-0 left-0 right-0 z-10 bg-[#545454]">
      <div className="flex container lg:pt-4 flex-wrap items-center justify-between mx-auto px-4 pt-2">
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-12 ml-[110px] mt-3">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <FooterLink href={link.href} title={link.title} />
            </li>
          ))}
        </ul>
        <Link
          href={"/dashboard"}
          className="flex p-4 md:p-0 md:flex-row md:space-x-12 mr-[110px] mt-3"
        >
          <div className="relative block pt-2 pl-3 pr-4 text-white sm:text-sm rounded md:p-0 group">
            <span className="group-hover:block absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
            {"ЛИЧНЫЙ КАБИНЕТ"}
          </div>
        </Link>
      </div>
      <p className="text-white text-sm ml-[125px] my-5">
        {currentYear}
      </p>
    </nav>
  );
};

export default Footer;
