import BulletList from "../components/bulletList";
import ListStar from "../components/listStar";
import ListStart from "../components/listStar";

export default function Portfolio() {
  return (
    <main className="pl-[350px] h-[100vh]">
      <section className="relative mb-10 h-full flex justify-center">
        <figure className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
          <img src="images/tiger.png" alt="Rafael Meza" />
        </figure>
        <div className="relative z-10 items-center max-w-[1024px] w-full h-full flex justify-start py-6">
          <div>
            <h2 className="max-w-[360px] mb-20 leading-[5rem] font-druk text-[100px] tracking-wider">
              TIGER LATIN AMERICA
            </h2>

            <BulletList>
              <h3 className="mb-3 font-bold">I am focused on:</h3>
              <ListStar>Frontend Development</ListStar>
              <ListStar>HTML5, CSS3, JS, GSAP, JQUERY</ListStar>
            </BulletList>
          </div>
        </div>
      </section>
      <section className="relative mb-10 h-full flex justify-center">
        <figure className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
          <img src="images/tiger.png" alt="Rafael Meza" />
        </figure>
        <div className="relative z-10 items-center max-w-[1024px] w-full h-full flex justify-start py-6">
          <div>
            <h2 className="max-w-[360px] mb-20 leading-[5rem] font-druk text-[100px] tracking-wider">
              TIGER LATIN AMERICA
            </h2>

            <BulletList>
              <h3 className="mb-3 font-bold">I am focused on:</h3>
              <ListStar>Frontend Development</ListStar>
              <ListStar>HTML5, CSS3, JS, GSAP, JQUERY</ListStar>
            </BulletList>
          </div>
        </div>
      </section>
    </main>
  );
}
