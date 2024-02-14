import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState
} from "react";

const DropdownContext = createContext<IDropdownMenu | null>(null);

type IDropdownMenu = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const DropdownMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownMenuProvider;

export const useDropdownContext = () => {
  const ctx = useContext(DropdownContext);

  if (!ctx) {
    throw new Error(
      "useDropdownContext must be within the DropdownMenuProvider"
    );
  }

  return ctx;
};
