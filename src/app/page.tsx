"use client";

import React from "react";
import BulletList from "./components/bulletList";
import ListStart from "./components/listStar";
import UnderlinedLink from "./components/link";
import { IoIosGitNetwork } from "react-icons/io";
import Link from "next/link";
import Title from "./components/Title";

export default function Home() {
  return (
    <main className="lg:pl-[350px] md:pl-[250px] md:h-[100vh] py-[100px] md:pt-0">
      <section className="p-4 md:p-20 w-full h-full flex justify-center items-center">
        <div>
          <Title>SAY HELLO!</Title>
          <h3 className="font-bold mb-10">I am accepting freelance jobs.</h3>

          <BulletList>
            <h4 className="mb-4 font-bold">Personal:</h4>
            <ListStart>
              <div className="flex items-center space-x-3">
                <span>EMAIL:</span>
                <UnderlinedLink
                  title="rhmcord@gmail.com"
                  href="mailto:rhmcord@gmail.com"
                />
              </div>
            </ListStart>
            <ListStart>PHONE: +51 - 997258592</ListStart>
          </BulletList>
          <BulletList>
            <h4 className="mb-4 font-bold">Development:</h4>
            <ListStart>
              <div className="flex space-x-3 items-center flex-wrap">
                <span>GITHUB:</span>
                <UnderlinedLink
                  title="raffo1234"
                  href="https://github.com/raffo1234"
                ></UnderlinedLink>
              </div>
            </ListStart>
            <ListStart>
              <div className="flex space-x-3 items-center flex-wrap">
                <span> LINKEDIN:</span>
                <UnderlinedLink
                  href="https://www.linkedin.com/in/rafael-meza/"
                  title="Rafael Meza"
                />
              </div>
            </ListStart>
          </BulletList>
          <Link
            style={{
              backgroundImage:
                "linear-gradient(120deg, #FFD301 0%, #fda085 100%)",
            }}
            title="Portfolio | Rafael Meza"
            href="/portfolio"
            className="transition-all mt-10 ring-opacity-30 focus:ring-4 duration-200 ring-0 ring-gray-300 hover:ring-8 px-8 py-5 text-[32px] space-x-5 items-center flex font-druk tracking-wide justify-center"
          >
            <IoIosGitNetwork size={28} color="white" />
            <span className="underline">View Work</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
