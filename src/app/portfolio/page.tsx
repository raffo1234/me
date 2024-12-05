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
      <figure className="absolute right-0 top-1/2 -translate-y-1/2">
        <img src={imageSrc} alt={title} />
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

export default function Portfolio() {
  return (
    <main className="pl-[350px] h-[100vh]">
      <PortfolioSection title="TIGER LATIN AMERICA" imageSrc="images/tiger.png">
        <BulletList>
          <h3 className="mb-3 font-bold">I am focused on:</h3>
          <ListStar>Frontend Development</ListStar>
          <ListStar>HTML5, CSS3, JS, GSAP, JQUERY</ListStar>
        </BulletList>
      </PortfolioSection>
      <PortfolioSection
        title="Sunat Renta 2014"
        imageSrc="images/renta-2014.png"
      >
        <BulletList>
          <h3 className="mb-3 font-bold">I am focused on:</h3>
          <ListStar>Frontend Development</ListStar>
          <ListStar>HTML5, CSS3, JS, GSAP, JQUERY</ListStar>
        </BulletList>
      </PortfolioSection>
      <PortfolioSection
        title="Golden Palace"
        imageSrc="images/goldenpalace.png"
      >
        <BulletList>
          <h3 className="mb-3 font-bold">I am focused on:</h3>
          <ListStar>Frontend Development</ListStar>
          <ListStar>HTML5, CSS3, JS, GSAP, JQUERY</ListStar>
        </BulletList>
      </PortfolioSection>
      <PortfolioSection title="Laive" imageSrc="images/laive.png">
        <BulletList>
          <h3 className="mb-3 font-bold">I am focused on:</h3>
          <ListStar>Frontend Development</ListStar>
          <ListStar>HTML5, CSS3, JS, GSAP, JQUERY</ListStar>
        </BulletList>
      </PortfolioSection>
      <PortfolioSection title="A La Cancino" imageSrc="images/cancino.png">
        <BulletList>
          <h3 className="mb-3 font-bold">I am focused on:</h3>
          <ListStar>Frontend Development</ListStar>
          <ListStar>HTML5, CSS3, JS, GSAP, JQUERY</ListStar>
        </BulletList>
      </PortfolioSection>
      <PortfolioSection title="Grupon" imageSrc="images/grupon.png">
        <BulletList>
          <h3 className="mb-3 font-bold">I am focused on:</h3>
          <ListStar>Frontend Development</ListStar>
          <ListStar>HTML5, CSS3, JS, GSAP, JQUERY</ListStar>
        </BulletList>
      </PortfolioSection>
      <PortfolioSection title="Travelmax" imageSrc="images/travelmax.png">
        <BulletList>
          <h3 className="mb-3 font-bold">I am focused on:</h3>
          <ListStar>Frontend Development</ListStar>
          <ListStar>HTML5, CSS3, JS, GSAP, JQUERY</ListStar>
        </BulletList>
      </PortfolioSection>
      <PortfolioSection title="Yachay" imageSrc="images/yachay.png">
        <BulletList>
          <h3 className="mb-3 font-bold">I am focused on:</h3>
          <ListStar>Frontend Development</ListStar>
          <ListStar>HTML5, CSS3, JS, GSAP, JQUERY</ListStar>
        </BulletList>
      </PortfolioSection>
      <PortfolioSection
        title="Dashboard Yachay"
        imageSrc="images/dashboard-yachay.png"
      >
        <BulletList>
          <h3 className="mb-3 font-bold">I am focused on:</h3>
          <ListStar>Frontend Development</ListStar>
          <ListStar>HTML5, CSS3, JS, GSAP, JQUERY</ListStar>
        </BulletList>
      </PortfolioSection>

      <div className="animate-bounce fixed bottom-10 left-1/2 -translate-x-1/2">
        <IoIosArrowRoundDown className="text-yellow10" size={80} />
      </div>
    </main>
  );
}
