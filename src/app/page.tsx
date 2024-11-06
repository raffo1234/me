"use client";

import { GiHummingbird } from "react-icons/gi";
import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

interface Props {
  children?: ReactNode;
  isActive?: boolean;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
}

const MenuItem = ({ children, isActive, page, setPage }: Props) => {
  return (
    <li className="block">
      <button
        onClick={() => setPage(page)}
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [page, setPage] = useState(0);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

  return (
    <>
      <div className="absolute left-0 top-0 w-[250px]">
        <header className="bg-yellow10 h-[500px] flex items-center justify-center leading-[4.5rem]">
          <div>
            <h1 className="tracking-wider text-[90px] font-druk mb-2">
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
              >
                {pages.at(index)?.title}
              </MenuItem>
            ))}
          </ul>
        </nav>
      </div>
      <button
        onClick={openMenu}
        title="Download Rafael Meza Resume | PDF"
        className="bg-yellow10 px-8 py-5 text-[32px] space-x-5 items-center flex w-[300px] fixed right-0 top-1/2 -translate-y-1/2 z-20 font-druk tracking-wide"
      >
        <FaDownload size={28} color="white" />
        <span className="underline">Download Resume</span>
      </button>
      <a
        download
        title="Download Rafael Meza Resume | PDF"
        href="/pdfs/Rafael-Meza-Resume.pdf"
        className="bg-yellow10 px-8 py-5 text-[32px] space-x-5 items-center flex w-[300px] fixed right-0 top-1/2 -translate-y-1/2 z-20 font-druk tracking-wide"
        target="_blank"
        rel="noreferrer"
      >
        <FaDownload size={28} color="white" />
        <span className="underline">Download Resume</span>
      </a>
      <main className="p-4">
        <section className="relative m-auto border-2 p-4 border-gray20 w-[800px] h-[800px] rounded-full">
          <GiHummingbird
            size={132}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          />
          <div className="relative w-full h-full overflow-hidden">
            <div
              style={{ transform: `rotate(${pages.at(page)?.deg}deg)` }}
              className={`transition-transform duration-500 ease-in-out className w-full h-full rounded-full flex items-center justify-center absolute`}
            >
              <div className="absolute left-0 top-0 w-full h-full rounded-full border-[16px] border-white"></div>
              <div className="absolute left-1/2 top-0 w-1/2 h-1/2 rounded-tr-full border-t-[16px] border-r-[16px] border-yellow10"></div>
            </div>
            <button
              onClick={() => setPage(0)}
              className="absolute right-0 top-0 w-1/2 h-1/2 rounded-tr-full"
            ></button>
            <button
              onClick={() => setPage(1)}
              className="absolute right-0 bottom-0 w-1/2 h-1/2 rounded-br-full"
            ></button>
            <button
              onClick={() => setPage(2)}
              className="absolute left-0 bottom-0 w-1/2 h-1/2 rounded-bl-full"
            ></button>
            <button
              onClick={() => setPage(3)}
              className="absolute left-0 top-0 w-1/2 h-1/2 rounded-tl-full"
            ></button>
            <h2 className="absolute right-0 top-0 font-barbra text-[90px]">
              {pages.at(page)?.title}
            </h2>
          </div>
        </section>
        <nav
          className={`transition duration-500 z-30 fixed left-0 top-0 right-0 bottom-0 ease-in-out bg-dark ${
            isMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-full scale-95"
          }`}
        >
          <button className="p-6 text-orange mx-auto block" onClick={closeMenu}>
            <MdClose size={100} />
          </button>
        </nav>
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
