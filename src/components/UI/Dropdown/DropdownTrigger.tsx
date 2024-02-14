import { useDropdownContext } from "@/lib/context/dropdownContext";
import React from "react";

export const DropdownTrigger = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { setIsOpen } = useDropdownContext();

  return (
    <div onClick={() => setIsOpen((p) => !p)} className="flex justify-center">
      {children}
    </div>
  );
};
