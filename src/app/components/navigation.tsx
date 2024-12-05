import Link from "next/link";
import React, { ReactNode } from "react";
import { useState } from "react";

import { usePathname } from "next/navigation";

const pages = [
  {
    title: "Home",
    slug: "/",
    deg: 0,
  },
  {
    title: "About me",
    slug: "/about",
    deg: 90,
  },
  {
    title: "Portfolio",
    slug: "/portfolio",
    deg: 180,
  },
  {
    title: "Contact",
    slug: "/contact",
    deg: 270,
  },
];

interface Props {
  children?: ReactNode;
  page: string;
  slug: string;
  title: string;
}

const MenuItem = ({ children, title, slug }: Props) => {
  const pathname = usePathname();

  return (
    <li className="flex-1 md:h-full">
      <Link
        href={slug}
        title={title}
        className={`
          ${pathname === slug ? "bg-gray100 text-gray10" : "hover:bg-gray20"}
          font-druk flex items-center justify-center uppercase tracking-wider text-[50px] md:text-[80px] w-full p-4 md:h-full text-center transition-colors duration-500`}
      >
        {children}
      </Link>
    </li>
  );
};

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <nav
        style={{
          backgroundImage: "linear-gradient(120deg, #FFD301 0%, #fda085 100%)",
        }}
        className={`${
          isOpenMenu ? "opacity-100" : "opacity-0 invisible"
        } w-full fixed top-0 z-40 h-full transition duration-350 ease-in-out left-0 bg-white`}
      >
        <div className="relative h-full">
          <ul className="justify-stretch text-md h-full leading-[4.5rem] w-full md:flex items-center md:flex-row flex-col">
            {pages.map(({ slug, title }, index) => (
              <MenuItem title={title} key={index} page={slug} slug={slug}>
                {pages.at(index)?.title}
              </MenuItem>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex items-center w-full"></div>
      <button
        onClick={() => setIsOpenMenu((prev) => !prev)}
        className="fixed group top-6 right-6 md:top-10 md:right-10 z-50"
        title="Menu Navigation"
      >
        <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all bg-gray100 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div
              className={`${
                isOpenMenu ? "translate-x-10" : ""
              } bg-white h-[2px] w-7 transform transition-all duration-300 origin-left`}
            ></div>
            <div
              className={`${
                isOpenMenu ? "translate-x-10" : ""
              } bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75`}
            ></div>
            <div
              className={`${
                isOpenMenu ? "translate-x-10" : ""
              } bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-150`}
            ></div>
            <div
              className={`${
                isOpenMenu ? "translate-x-0 w-12" : ""
              } absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0`}
            >
              <div
                className={`${
                  isOpenMenu ? "rotate-45" : ""
                } absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300`}
              ></div>
              <div
                className={`${
                  isOpenMenu ? "-rotate-45" : ""
                } absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300`}
              ></div>
            </div>
          </div>
        </div>
      </button>
    </>
  );
}
