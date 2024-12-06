import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";

export default function Footer() {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <footer className="fixed p-4 right-0 bottom-0 w-full">
      <a
        style={{
          backgroundImage: "linear-gradient(120deg, #FFD301 0%, #fda085 100%)",
        }}
        download
        title="Download Rafael Meza Resume | PDF"
        href="/pdfs/Rafael-Meza-Resume.pdf"
        className="w-full lg:hidden transition-all ring-opacity-30 focus:ring-4 duration-200 ring-0 ring-gray-300 hover:ring-8 px-5 py-3 text-[24px] space-x-5 items-center flex font-druk tracking-wide justify-center"
        target="_blank"
        rel="noreferrer"
      >
        <FaDownload size={18} color="white" />
        <span className="underline">Download Resume</span>
      </a>
      <div className="hidden lg:block">
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
      </div>
    </footer>
  );
}
