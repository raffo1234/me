import Link from "next/link";
import React, { ReactNode } from "react";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
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
}

const MenuItem = ({ children, slug }: Props) => {
  const pathname = usePathname();

  return (
    <li className="flex-1 h-full">
      <Link
        href={slug}
        className={`
          ${pathname === slug ? "bg-gray100 text-gray10" : "hover:bg-gray20"}
          font-druk flex items-center justify-center uppercase tracking-wider text-[80px] w-full p-4 h-full text-center transition-colors duration-500`}
      >
        {children}
      </Link>
    </li>
  );
};

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="absolute left-0 top-0 w-full h-full">
      <nav
        onTransitionEnd={(event) => {
          if (!isOpenMenu) {
            event.currentTarget.classList.add("invisible");
          }
        }}
        style={{
          backgroundImage: "linear-gradient(120deg, #FFD301 0%, #fda085 100%)",
        }}
        className={`${
          isOpenMenu ? "opacity-100" : "opacity-0"
        } w-full h-full transition duration-500 ease-in-out absolute top-0 left-0 bg-white`}
      >
        <div className="relative h-full">
          <div className="mb-10 absolute left-10 top-10">
            <h2 className="font-druk text-[60px] leading-[3.1rem] tracking-wider mb-0">
              RAFAEL <br /> MEZA
            </h2>
            <p className="text-sm tracking-tighter">FRONTEND DEVELOPER</p>
          </div>
          <ul className="text-md h-full leading-5 font-roboto w-full flex items-center">
            {pages.map(({ slug }, index) => (
              <MenuItem key={index} page={slug} slug={slug}>
                {pages.at(index)?.title}
              </MenuItem>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex items-center w-full">
        <aside
          style={{
            backgroundImage:
              "linear-gradient(120deg, #FFD301 0%, #fda085 100%)",
          }}
          className="w-[350px] self-start flex-shrink-0"
        >
          <header className="h-[500px] flex items-center justify-center">
            <div>
              <h1 className="tracking-wider text-[90px] font-druk mb-2 leading-[4.5rem]">
                <Link href="/">
                  RAFAEL <br /> MEZA
                </Link>
              </h1>
              <span className="block font-roboto text-sm tracking-tighter">
                SOFTWARE ENGINEER
              </span>
            </div>
          </header>
          <div className="h-4 w-full bg-gray10"></div>
          <a
            download
            title="Download Rafael Meza Resume | PDF"
            href="/pdfs/Rafael-Meza-Resume.pdf"
            className="transition-all ring-opacity-30 focus:ring-4 duration-200 ring-0 ring-gray-300 hover:ring-8 px-8 py-5 text-[32px] space-x-5 items-center flex font-druk tracking-wide justify-center"
            target="_blank"
            rel="noreferrer"
          >
            <FaDownload size={28} color="white" />
            <span className="underline">Download Resume</span>
          </a>
        </aside>
      </div>
      <button
        onClick={() => setIsOpenMenu((prev) => !prev)}
        className="fixed group top-10 right-10"
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
    </div>
  );
}
