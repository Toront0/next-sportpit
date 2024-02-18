import Link from "next/link";
import React from "react";

interface IDropdownLinkItem
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

const DropdownLinkItem = ({ href, children, ...rest }: IDropdownLinkItem) => {
  return (
    <Link
      href={href}
      {...rest}
      className="flex items-center justify-between text-gray-4 dark:text-gray-12 text-sm p-2 rounded hover:bg-opac-b-1 dark:hover:bg-opac-w-1 w-full"
    >
      {children}
    </Link>
  );
};

export default DropdownLinkItem;
