import Link from "next/link";
import React, { ReactNode } from "react";
import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import { usePathname } from "next/navigation";

const pages = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "About me",
    slug: "/about",
  },
  {
    title: "Portfolio",
    slug: "/portfolio",
  },
  {
    title: "Contact",
    slug: "/contact",
  },
];

interface Props {
  children?: ReactNode;
  page: string;
  slug: string;
  title: string;
  index: number;
}

const MenuItem = ({ children, title, slug, index }: Props) => {
  const pathname = usePathname();

  return (
    <li
      style={{
        backgroundImage: "linear-gradient(120deg, #FFD301 0%, #fda085 100%)",
      }}
      className="flex-1 md:h-full"
    >
      <Link
        href={slug}
        title={title}
        className={`
          ${pathname === slug ? "bg-gray100 text-gray10" : "hover:bg-gray20"}

          delay${index * 100}
          font-druk  flex items-center justify-center uppercase tracking-wider text-[50px] md:text-[80px] w-full p-4 md:h-full text-center transition duration-500`}
      >
        {children}
      </Link>
    </li>
  );
};

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const transition = useTransition(isOpenMenu, {
    from: { y: 110, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 110, opacity: 0 },
  });

  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.nav
            style={style}
            className={`w-full fixed top-0 z-40 h-full left-0 bg-white`}
          >
            <div className="relative h-full">
              <ul className="justify-stretch text-md h-full leading-[4.5rem] w-full md:flex items-center md:flex-row flex-col">
                {pages.map(({ slug, title }, index) => (
                  <MenuItem
                    title={title}
                    key={index}
                    page={slug}
                    slug={slug}
                    index={index}
                  >
                    {pages.at(index)?.title}
                  </MenuItem>
                ))}
              </ul>
            </div>
          </animated.nav>
        ) : null
      )}

      <button
        onClick={() => setIsOpenMenu((prev) => !prev)}
        className="fixed group top-3 right-3 md:top-10 md:right-10 z-50"
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
