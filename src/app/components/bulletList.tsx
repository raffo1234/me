import { ReactNode } from "react";

export default function BulletList({ children }: { children: ReactNode }) {
  return (
    <section className="pb-12 relative pl-10">
      <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-yellow10"></div>
      <div className="w-1 h-full bg-yellow10 absolute left-0 top-5 translate-x-2"></div>
      <div>{children}</div>
    </section>
  );
}
