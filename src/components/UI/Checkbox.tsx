import React from "react";
import { BsCheck } from "react-icons/bs";

interface ICheckbox {
  label: string;
  checked: boolean;
  onChange: (n: string) => void;
  name: string;
}

const Checkbox = ({ label, checked, onChange, name }: ICheckbox) => {
  return (
    <div className="flex items-center select-none gap-2">
      <button
        type="button"
        role="checkbox"
        aria-checked="true"
        data-state={checked ? "checked" : "unchecked"}
        onClick={(e) =>
          e.currentTarget.getAttribute("data-state") === "checked"
            ? (e.currentTarget.setAttribute("data-state", "unchecked"),
              onChange(name))
            : (e.currentTarget.setAttribute("data-state", "checked"),
              onChange(name))
        }
        id="terms"
        className="w-5 h-5 group rounded border-2 border-gray-2 dark:border-gray-14"
      >
        <span className="w-full hidden dark:bg-gray-14 dark:text-black h-full group-data-[state=checked]:flex items-center justify-center text-white bg-gray-1 text-2xl">
          <BsCheck />
        </span>
      </button>
      <label
        htmlFor="terms"
        className="text-sm cursor-pointer text-gray-2 dark:text-gray-14 font-medium"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
