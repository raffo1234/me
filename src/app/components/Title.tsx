import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="uppercase mb-8 lg:mb-20 leading-[3.8rem] font-druk md:text-[70px] text-[60px] tracking-wider">
      {children}
    </h2>
  );
}
