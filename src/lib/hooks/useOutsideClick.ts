import { useRef, useEffect } from "react";

export const useOutsideClick = (cb: () => void) => {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const handler = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        cb();
        console.log("123");
      }
    };

    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  }, [cb, ref]);

  return ref;
};
