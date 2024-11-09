"use client";

import { GiHummingbird } from "react-icons/gi";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

interface Props {
  children?: ReactNode;
  isActive?: boolean;
  setPage: Dispatch<SetStateAction<number>>;
  setEffect: Dispatch<SetStateAction<boolean>>;
  page: number;
  timeout: number;
}

const MenuItem = ({
  children,
  timeout,
  isActive,
  setEffect,
  page,
  setPage,
}: Props) => {
  return (
    <li className="block">
      <button
        onClick={() => {
          setEffect(true);
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
  const [effect, setEffect] = useState(false);

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

  const timeout = 400;

  return (
    <>
      <main>
        <div className="flex items-center w-full">
          <aside className="w-[20%] self-start flex-shrink-0">
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
            <nav className="w-full pt-10">
              <ul className="block text-md leading-5 font-roboto">
                {pages.map((_, index) => (
                  <MenuItem
                    key={index}
                    setPage={setPage}
                    page={index}
                    isActive={page === index}
                    setEffect={setEffect}
                    timeout={timeout}
                  >
                    {pages.at(index)?.title}
                  </MenuItem>
                ))}
              </ul>
            </nav>
          </aside>
          <div className="p-4 w-[50%]">
            <section className="aspect-square border-2 p-4 border-gray20 w-full flex-1 rounded-full relative">
              <GiHummingbird
                size={132}
                className={`${
                  page === 1 ? "scale-50 opacity-0" : "scale-100 opacity-100"
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
              <div
                className={`${
                  page === 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"
                } transition duration-500 ease-in-out flex overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray20 bg-opacity-50 w-[60%] h-[60%]`}
              >
                <div className="flex justify-end w-1/2 shrink-0">
                  <p
                    className={`${
                      page === 1 ? "opacity-100" : "opacity-50"
                    } transition text-right leading-[4.5rem] h-full items-center flex justify-end pr-6 tracking-wider text-[90px] font-druk mb-2 w-full shrink-0 bg-gray100 duration-500 ease-in-out delay-200 text-yellow10`}
                  >
                    RAFAEL <br />
                    MEZA
                  </p>
                </div>
                <div className="px-8 flex justify-center items-center">
                  <div>
                    <p
                      className={`${
                        page === 1
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-50"
                      } transition mb-4 duration-500 ease-in-out delay-200 text-gray100`}
                    >
                      Known for delivering efficient, high-quality solutions and
                      collaborating effectively with cross-functional teams.
                    </p>
                    <p
                      className={`${
                        page === 1
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-50"
                      } transition duration-500 ease-in-out delay-200 text-gray100`}
                    >
                      Highly proficient in ReactJS, HTML5, CSS3, and adept at
                      developing reusable code and optimizing UI/UX design
                      feasibility.
                    </p>
                  </div>
                </div>
              </div>
              <h2
                onAnimationEnd={() => setEffect(false)}
                className={`${
                  effect ? "animate-fade" : ""
                } absolute right-0 top-0 font-barbra text-[90px]`}
              >
                {pages.at(page)?.title}
              </h2>
            </section>
          </div>
          <a
            download
            title="Download Rafael Meza Resume | PDF"
            href="/pdfs/Rafael-Meza-Resume.pdf"
            className="bg-yellow10 flex-shrink-0 px-8 py-5 text-[32px] space-x-5 items-center flex w-[20%] font-druk tracking-wide"
            target="_blank"
            rel="noreferrer"
          >
            <FaDownload size={28} color="white" />
            <span className="underline">Download Resume</span>
          </a>
        </div>
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
