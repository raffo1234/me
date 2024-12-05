import { FaDownload } from "react-icons/fa";
import Link from "next/link";

export default function Aside() {
  return (
    <aside
      style={{
        backgroundImage: "linear-gradient(120deg, #FFD301 0%, #fda085 100%)",
      }}
      className="fixed z-20 top-0 left-0 w-full pt-5 lg:w-[350px] md:w-[250px] self-start flex-shrink-0"
    >
      <header className="px-10 pb-5 md:h-[500px] flex items-center justify-center">
        <div>
          <h1 className="tracking-wider text-[50px] md:text-[100px] font-druk mb-2 leading-[2rem] md:leading-[5rem]">
            <Link href="/" title="Rafael Meza">
              RAFAEL MEZA
            </Link>
          </h1>
          <span className="block font-roboto text-sm tracking-tighter">
            SOFTWARE ENGINEER
          </span>
        </div>
      </header>
      <div className="h-4 w-full bg-gray10"></div>
      <a
        download
        title="Download Rafael Meza Resume | PDF"
        href="/pdfs/Rafael-Meza-Resume.pdf"
        className="hidden transition-all ring-opacity-30 focus:ring-4 duration-200 ring-0 ring-gray-300 hover:ring-8 px-8 py-5 text-[32px] space-x-5 items-center md:flex font-druk tracking-wide justify-center"
        target="_blank"
        rel="noreferrer"
      >
        <FaDownload size={28} color="white" />
        <span className="underline">Download Resume</span>
      </a>
    </aside>
  );
}
