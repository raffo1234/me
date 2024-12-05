"use client";

import Image from "next/image";
import { ReactNode } from "react";
import BulletList from "../components/bulletList";
import ListStar from "../components/listStar";
import { IoIosArrowRoundDown } from "react-icons/io";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";
import Title from "../components/Title";

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
    <section className="px-6 py-[50px] justify-center lg:min-h-[100vh] lg:flex items-center">
      <figure className="relative w-full block">
        <Title>{title}</Title>
        <Image
          src={imageSrc}
          alt={title}
          layout="responsive"
          objectFit="contain"
          width={100}
          height={100}
        />
      </figure>
      <div className="relative z-20 lg:h-[100vh] items-center max-w-[1024px] flex justify-start py-6">
        <div className="max-w-[360px]">{children}</div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "TIGER LATIN AMERICA",
    imageSrc: "/images/tiger_small.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
    href: "/_projects/tiger/index.html",
  },
  {
    title: "Sunat Renta 2014",
    imageSrc: "/images/renta-2014_small.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
    href: "/_projects/sunat_2015/index.html",
  },
  {
    title: "Golden Palace",
    imageSrc: "/images/goldenpalace_small.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
    href: "/_projects/goldenpalace/index.html",
  },
  {
    title: "Laive",
    imageSrc: "/images/laive_small.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
    href: "/_projects/laive/index.html",
  },
  {
    title: "A La Cancino",
    imageSrc: "/images/cancino_small.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
    href: "/_projects/cancino/index.html",
  },
  {
    title: "Grupon",
    imageSrc: "/images/grupon_small.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
    href: "/",
  },
  {
    title: "Travelmax",
    imageSrc: "/images/travelmax_small.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
    href: "/_projects/travelmax/index.html",
  },
  {
    title: "Yachay",
    imageSrc: "/images/yachay_small.png",
    features: ["Frontend Development", "HTML5, CSS3, JS, GSAP, JQUERY"],
    href: "/",
  },
  {
    title: "Dashboard Yachay",
    imageSrc: "/images/dashboard-yachay_small.png",
    features: ["Frontend Development", "Node, HTML5, CSS3, JS, GSAP, JQUERY"],
    href: "/",
  },
];

const ProjectButton = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      style={{
        backgroundImage: "linear-gradient(120deg, #FFD301 0%, #fda085 100%)",
      }}
      rel="noreferrer"
      title={`${title} | Rafael Meza`}
      href={href}
      target="_blank"
      className="transition-all mt-10 ring-opacity-30 focus:ring-4 duration-200 ring-0 ring-gray-300 hover:ring-8 px-8 py-5 text-[32px] space-x-5 items-center flex font-druk tracking-wide justify-center"
    >
      <RiExternalLinkLine size={28} color="white" />
      <span className="underline">View Offline</span>
    </Link>
  );
};

export default function PortfolioPage() {
  return (
    <main className="lg:pl-[350px] md:pl-[250px] lg:h-[100vh] py-[100px] md:pt-0">
      {projects.map(({ title, href, imageSrc, features }, index) => {
        return (
          <PortfolioSection key={index} title={title} imageSrc={imageSrc}>
            <BulletList>
              <h3 className="mb-3 font-bold">I am focused on:</h3>
              {features.map((feature, index) => {
                return <ListStar key={index}>{feature}</ListStar>;
              })}
            </BulletList>
            {href !== "/" ? <ProjectButton href={href} title={title} /> : null}
          </PortfolioSection>
        );
      })}
      <div className="animate-bounce fixed bottom-10 left-1/2 -translate-x-1/2">
        <IoIosArrowRoundDown className="text-yellow10" size={80} />
      </div>
    </main>
  );
}
