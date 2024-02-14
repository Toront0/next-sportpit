import DropdownMenuProvider, {
  useDropdownContext
} from "@/lib/context/dropdownContext";
import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import React from "react";

export const Dropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownMenuProvider>
      <div className="relative">{children}</div>
    </DropdownMenuProvider>
  );
};
