import { Toast } from "@/lib/store/types";
import React from "react";
import { MdError } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const Toast = ({ id, title, subtitle, type }: Toast) => {
  return (
    <div className="w-[300px] p-4 flex gap-2 rounded border border-opac-b-2 dark:border-opac-w-1 bg-white dark:bg-gray-3 ">
      <div className="w-6 h-6 ">
        {type === "error" ? (
          <MdError className="w-full h-full text-[#f00]" />
        ) : (
          <FaCircleCheck className="w-4/5 h-4/5 text-[#23ff2a]" />
        )}
      </div>
      <div>
        <h4 className="font-semibold text-sm text-black dark:text-white">
          {title}
        </h4>
        <p className="text-sm text-gray-4 dark:text-gray-12">{subtitle}</p>
      </div>
    </div>
  );
};

export default Toast;
