"use client";

import { GiHummingbird } from "react-icons/gi";
import React, { ReactNode } from "react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

interface Props {
  children?: ReactNode;
}

const MenuItem = ({ children }: Props) => {
  return (
    <li>
      <button className="px-10" style={{ fontSize: "100px" }}>
        {children}
      </button>
    </li>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="absolute left-0 top-0 w-[250px]">
        <header className="bg-yellow10 h-[500px] flex items-center justify-center text-[90px] leading-[4.5rem]">
          <h1 className="tracking-wider font-druk">
            RAFAEL <br /> MEZA
          </h1>
        </header>
        <nav className="w-full pt-10">
          <ul className="block text-right text-md leading-5 font-roboto">
            <li className="block">
              <Link
                href="/"
                className="block p-4 hover:bg-gray20 transition-colors duration-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block bg-gray100 text-gray10 p-4 transition-colors duration-500"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block p-4 hover:bg-gray20 transition-colors duration-500"
              >
                Contact
              </Link>
            </li>
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
        <section className="relative m-auto border-2 p-3 border-gray20 w-[800px] h-[800px] rounded-full">
          <div className="className  border-[12px] border-white w-full h-full rounded-full flex items-center justify-center">
            <GiHummingbird size={132} />
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
          <ul className="text-white flex w-full justify-center">
            <MenuItem>About</MenuItem>
            <MenuItem>Portfolio</MenuItem>
            <MenuItem>Contact</MenuItem>
          </ul>
        </nav>
      </main>
    </>
  );
}
