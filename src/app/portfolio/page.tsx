"use client";

import Image from "next/image";
import { ReactNode } from "react";
import BulletList from "../components/bulletList";
import ListStar from "../components/listStar";
import { IoIosArrowRoundDown } from "react-icons/io";

const PortfolioSection = ({
  imageSrc,
  title,
  children,
}: {
  imageSrc: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className="relative mb-10 h-full flex justify-center">
      <figure className="absolute w-full h-full right-0 top-1/2 -translate-y-1/2">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" />
      </figure>
      <div className="relative items-center max-w-[1024px] w-full h-full flex justify-start py-6">
        <div>
          <h2 className="max-w-[360px] uppercase mb-20 leading-[5rem] font-druk text-[100px] tracking-wider">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "TIGER LATIN AMERICA",
    imageSrc: "/images/tiger.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
  },
  {
    title: "Sunat Renta 2014",
    imageSrc: "/images/renta-2014.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
  },
  {
    title: "Golden Palace",
    imageSrc: "/images/goldenpalace.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
  },
  {
    title: "Laive",
    imageSrc: "/images/laive.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
  },
  {
    title: "A La Cancino",
    imageSrc: "/images/cancino.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
  },
  {
    title: "Grupon",
    imageSrc: "/images/grupon.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
  },
  {
    title: "Travelmax",
    imageSrc: "/images/travelmax.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
  },
  {
    title: "Yachay",
    imageSrc: "/images/yachay.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
  },
  {
    title: "Dashboard Yachay",
    imageSrc: "/images/dashboard-yachay.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="pl-[350px] h-[100vh]">
      {projects.map(({ title, imageSrc, features }, index) => {
        return (
          <PortfolioSection key={index} title={title} imageSrc={imageSrc}>
            <BulletList>
              <h3 className="mb-3 font-bold">I am focused on:</h3>
              {features.map((feature, index) => {
                return <ListStar key={index}>{feature}</ListStar>;
              })}
            </BulletList>
          </PortfolioSection>
        );
      })}

      <div className="animate-bounce fixed bottom-10 left-1/2 -translate-x-1/2">
        <IoIosArrowRoundDown className="text-yellow10" size={80} />
      </div>
    </main>
  );
}
