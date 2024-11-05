"use client";

import React, { ReactNode } from "react";
import { GiHummingbird } from "react-icons/gi";
import { useState } from "react";
import { MdClose } from "react-icons/md";

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
    <main className="p-4">
      <button
        onClick={openMenu}
        className="block relative z-20 mx-auto p-6 border-dark border-solid border-2 transition-colors rounded-full hover:bg-dark hover:text-orange"
      >
        <GiHummingbird size={60} />
      </button>
      <section className="flex items-center z-10 justify-center absolute left-0 right-0 top-0 bottom-0 bg-orange">
        <div className="text-center">
          <h1 style={{ fontSize: "144px" }}>RAFAEL MEZA</h1>
          <p style={{ fontSize: "72px" }}>Senior Software Engineer</p>
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
  );
}
