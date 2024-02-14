import React from "react";

interface IDropdownButtonItem
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const DropdownButtonItem = ({ children, ...rest }: IDropdownButtonItem) => {
  return (
    <button
      {...rest}
      className="flex items-center justify-between text-gray-4 dark:text-gray-12 text-sm p-2 rounded hover:bg-opac-b-1 dark:hover:bg-opac-w-1 w-full"
    >
      {children}
    </button>
  );
};

export default DropdownButtonItem;
