interface Props {
  page: number;
}

export default function Portfolio({ page }: Props) {
  const currentPage = 2;

  return (
    <div
      className={`${
        page === currentPage ? "opacity-100 scale-100" : "opacity-0 scale-75"
      } transition duration-500 ease-in-out flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray20 bg-opacity-50 w-[60%] h-[60%]`}
    >
      <button className="absolute -left-[52px] group top-1/2 -translate-y-1/2 flex space-x-[3px] items-center rounded-l-[20] p-4">
        <div className="w-2 h-6 border-l-8 rounded-l-full group-hover:border-yellow10 border-gray100 transition-colors duration-500"></div>
        <div className="w-2 h-10 border-l-8 rounded-l-full group-hover:border-yellow10 border-gray100 transition-colors duration-500"></div>
        <div className="w-2 h-14 border-l-8 rounded-l-full group-hover:border-yellow10 border-gray100 transition-colors duration-500"></div>
      </button>
      <button className="absolute -right-[52px] group top-1/2 -translate-y-1/2 flex space-x-[3px] items-center rounded-l-[20] p-4">
        <div className="w-2 h-14 border-l-8 rounded-r-full group-hover:border-yellow10 border-gray100 transition-colors duration-500"></div>
        <div className="w-2 h-10 border-l-8 rounded-r-full group-hover:border-yellow10 border-gray100 transition-colors duration-500"></div>
        <div className="w-2 h-6 border-l-8 rounded-r-full group-hover:border-yellow10 border-gray100 transition-colors duration-500"></div>
      </button>
      <div className="flex justify-end w-1/2 shrink-0 rounded-l-full bg-gray100">
        <p
          className={`${
            page === currentPage ? "opacity-100" : "opacity-50"
          } transition text-right leading-[4.5rem] h-full items-center flex justify-end pr-6 tracking-wider text-[90px] font-druk mb-2 w-full shrink-0 duration-500 ease-in-out delay-200 text-yellow10`}
        >
          RAFAEL <br />
          MEZA
        </p>
      </div>
      <div className="px-8 flex justify-center items-center">
        <div>
          <p
            className={`${
              page === currentPage
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-50"
            } transition mb-4 duration-500 ease-in-out delay-200 text-gray100`}
          >
            Known for delivering efficient, high-quality solutions and
            collaborating effectively with cross-functional teams.
          </p>
          <p
            className={`${
              page === currentPage
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-50"
            } transition duration-500 ease-in-out delay-200 text-gray100`}
          >
            Highly proficient in ReactJS, HTML5, CSS3, and adept at developing
            reusable code and optimizing UI/UX design feasibility.
          </p>
        </div>
      </div>
    </div>
  );
}
