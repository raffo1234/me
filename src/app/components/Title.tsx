import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h2 className="uppercase mb-8 lg:mb-20 leading-[5rem] font-druk md:text-[100px] text-[60px] tracking-wider">
      {children}
    </h2>
  );
}
