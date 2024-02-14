import { useDropdownContext } from "@/lib/context/dropdownContext";
import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import React from "react";

export const DropdownContent = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { isOpen, setIsOpen } = useDropdownContext();
  const ref = useOutsideClick(() => setIsOpen((p) => !p));

  return (
    <>
      {isOpen && (
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="absolute top-full mt-2 right-0 w-72 z-30 rounded bg-white dark:bg-gray-1 p-2 border border-opac-b-2 dark:border-opac-w-1"
        >
          {children}
        </div>
      )}
    </>
  );
};
