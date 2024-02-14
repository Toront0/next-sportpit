import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface IModalPortal {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalPortal = ({ children, onClose }: IModalPortal) => {
  const ref = useRef<HTMLElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById("modals") as HTMLElement;
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div
          onClick={onClose}
          className="w-full h-full flex backdrop-blur-sm items-center justify-center fixed top-0 z-50 bg-black bg-opacity-70 "
        >
          {children}
        </div>,
        ref.current
      )
    : null;
};

export default ModalPortal;
