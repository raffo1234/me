import React, { ReactNode } from "react";
import { MdStar } from "react-icons/md";

const ListStart = ({ children }: { children: ReactNode }) => {
  return (
    <li className="flex space-x-4 items-start pl-4">
      <MdStar className="mt-2 flex-shrink-0" size={10} />
      <span>{children}</span>
    </li>
  );
};

export default ListStart;
