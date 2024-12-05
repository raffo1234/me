import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
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
  );
}
