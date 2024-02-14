"use client";

import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

interface IAccordion {
  children: React.ReactNode;
  title: string;
}

const Accordion = ({ children, title }: IAccordion) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsExpanded((p) => !p)}
        className="flex items-center w-full justify-between text-gray-2 dark:text-gray-14 font-medium"
      >
        {title}
        <IoIosArrowDown
          className={`text-xl transition-transform ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid] ${
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className=" overflow-hidden mt-2">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
