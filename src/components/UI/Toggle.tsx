import React from "react";
import { BsCheck } from "react-icons/bs";

interface IToggle {
  checked: boolean;
  onClick?: () => void;
}

const Toggle = ({ checked, onClick }: IToggle) => {
  return (
    <button
      onClick={onClick}
      className={`w-11 h-[22px] border-2 rounded-full ${
        checked
          ? " border-rose-8 "
          : "border-black dark:border-white bg-opac-b-2 dark:bg-opac-w-2"
      } relative`}
    >
      <div
        className={`absolute text-[#25ff46] text-lg top-1/2 ${
          checked ? "block" : "hidden"
        } -translate-y-1/2 left-0`}
      >
        <BsCheck />
      </div>
      <span
        className={`absolute transition-[left] top-1/2 -translate-y-1/2 ${
          checked
            ? "bg-rose-8 left-[calc(100%-17px)]"
            : "bg-black  left-px dark:bg-white"
        }  w-4 h-4 rounded-full `}
      ></span>
    </button>
  );
};

export default Toggle;
