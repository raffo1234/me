"use client";

import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

interface Props {
  children?: ReactNode;
  isActive?: boolean;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  timeout: number;
}

const MenuItem = ({ children, timeout, isActive, page, setPage }: Props) => {
  return (
    <li className="block">
      <button
        onClick={() => {
          setTimeout(() => {
            setPage(page);
          }, timeout);
        }}
        className={`${
          isActive ? "bg-gray100 text-gray10" : "hover:bg-gray20"
        } block text-right w-full p-4 transition-colors duration-500`}
      >
        {children}
      </button>
    </li>
  );
};

export default function Home() {
  const [page, setPage] = useState(0);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const now = new Date();
  const currentYear = now.getFullYear();

  const pages = [
    {
      title: "Home",
      deg: 0,
    },
    {
      title: "About me",
      deg: 90,
    },
    {
      title: "Portfolio",
      deg: 180,
    },
    {
      title: "Contact",
      deg: 270,
    },
  ];

  const timeout = 500;

  return (
    <>
      <main>
        <nav
          onTransitionEnd={(event) => {
            if (!isOpenMenu) {
              event.currentTarget.classList.add("invisible");
            }
          }}
          className={`${
            isOpenMenu ? "opacity-100" : "opacity-0"
          } w-full h-full transition duration-500 ease-in-out absolute top-0 left-0 bg-white flex items-center justify-center`}
        >
          <ul className="block text-md leading-5 font-roboto">
            {pages.map((_, index) => (
              <MenuItem
                key={index}
                setPage={setPage}
                page={index}
                isActive={page === index}
                timeout={timeout}
              >
                {pages.at(index)?.title}
              </MenuItem>
            ))}
          </ul>
        </nav>

        <div className="flex items-center w-full">
          <aside className="w-[350px] self-start flex-shrink-0">
            <header className="bg-yellow10 h-[500px] flex items-center justify-center">
              <div>
                <h1 className="tracking-wider text-[90px] font-druk mb-2 leading-[4.5rem]">
                  RAFAEL <br /> MEZA
                </h1>
                <span className="block font-roboto text-sm tracking-tighter">
                  SOFTWARE ENGINEER
                </span>
              </div>
            </header>
            <a
              download
              title="Download Rafael Meza Resume | PDF"
              href="/pdfs/Rafael-Meza-Resume.pdf"
              className="bg-yellow10 mt-4 px-8 py-5 text-[32px] space-x-5 items-center flex font-druk tracking-wide justify-center"
              target="_blank"
              rel="noreferrer"
            >
              <FaDownload size={28} color="white" />
              <span className="underline">Download Resume</span>
            </a>
          </aside>
          {/* <div className="p-4 w-[50%]">
            <section className="aspect-square border-2 p-4 border-gray20 w-full flex-1 rounded-full relative">
              <GiHummingbird
                size={132}
                className={`${
                  page === 1 || page === 2
                    ? "scale-50 opacity-0"
                    : "scale-100 opacity-100"
                } transition duration-500 ease-in-out absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2`}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <div
                  style={{ transform: `rotate(${pages.at(page)?.deg}deg)` }}
                  className={`transition-transform duration-500 ease-in-out w-full h-full rounded-full flex items-center justify-center absolute`}
                >
                  <div className="absolute left-0 top-0 w-full h-full rounded-full border-[16px] border-white"></div>
                  <div className="absolute left-1/2 top-0 w-1/2 h-1/2 rounded-tr-full border-t-[16px] border-r-[16px] border-yellow10"></div>
                </div>
                <button
                  onClick={() => {
                    setEffect(true);
                    setTimeout(() => {
                      setPage(0);
                    }, timeout);
                  }}
                  className="absolute right-0 top-0 w-1/2 h-1/2 rounded-tr-full"
                ></button>
                <button
                  onClick={() => {
                    setEffect(true);
                    setTimeout(() => {
                      setPage(1);
                    }, timeout);
                  }}
                  className="absolute right-0 bottom-0 w-1/2 h-1/2 rounded-br-full"
                ></button>
                <button
                  onClick={() => {
                    setEffect(true);
                    setTimeout(() => {
                      setPage(2);
                    }, timeout);
                  }}
                  className="absolute left-0 bottom-0 w-1/2 h-1/2 rounded-bl-full"
                ></button>
                <button
                  onClick={() => {
                    setEffect(true);
                    setTimeout(() => {
                      setPage(3);
                    }, timeout);
                  }}
                  className="absolute left-0 top-0 w-1/2 h-1/2 rounded-tl-full"
                ></button>
              </div>
              <About page={page} />
              <Portfolio page={page} />
              <h2
                onAnimationEnd={() => setEffect(false)}
                className={`${
                  effect ? "animate-fade" : ""
                } absolute right-0 top-0 font-barbra text-[90px]`}
              >
                {pages.at(page)?.title}
              </h2>
            </section>
          </div> */}
        </div>
        <button
          onClick={() =>
            setIsOpenMenu((prev) => {
              return !prev;

              // return !prev;
            })
          }
          className="absolute group top-10 right-10"
        >
          <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all bg-gray100 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
              <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>
              <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
              </div>
            </div>
          </div>
        </button>
        <footer className="absolute p-6 right-0 bottom-0">
          <div className="flex mb-2 space-x-3 justify-end">
            <a
              href="https://www.linkedin.com/in/rafael-meza-280602123/"
              target="_blank"
              rel="noreferrer"
              title="Rafael Meza | Linkedin"
              className="p-3 rounded-full hover:bg-yellow10 transition-colors duration-500 group"
            >
              <FaLinkedinIn
                size={20}
                className="transition-transform group-hover:scale-105"
              />
            </a>
            <a
              href="https://github.com/raffo1234"
              rel="noreferrer"
              target="_blank"
              title="Rafael Meza | Github"
              className="p-3 rounded-full hover:bg-yellow10 transition-colors duration-500 group"
            >
              <FaGithub
                size={20}
                className="transition-transform group-hover:scale-105"
              />
            </a>
          </div>
          <p className="text-sm">
            © {currentYear} Rafael Meza. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
