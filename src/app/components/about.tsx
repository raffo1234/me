interface Props {
  page: number;
}

export default function About({ page }: Props) {
  return (
    <div
      className={`${
        page === 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"
      } transition duration-500 ease-in-out flex overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray20 bg-opacity-50 w-[60%] h-[60%]`}
    >
      <div className="flex justify-end w-1/2 shrink-0">
        <p
          className={`${
            page === 1 ? "opacity-100" : "opacity-50"
          } transition text-right leading-[4.5rem] h-full items-center flex justify-end pr-6 tracking-wider text-[90px] font-druk mb-2 w-full shrink-0 bg-gray100 duration-500 ease-in-out delay-200 text-yellow10`}
        >
          RAFAEL <br />
          MEZA
        </p>
      </div>
      <div className="px-8 flex justify-center items-center">
        <div>
          <p
            className={`${
              page === 1
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-50"
            } transition mb-4 duration-500 ease-in-out delay-200 text-gray100`}
          >
            Known for delivering efficient, high-quality solutions and
            collaborating effectively with cross-functional teams.
          </p>
          <p
            className={`${
              page === 1
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
