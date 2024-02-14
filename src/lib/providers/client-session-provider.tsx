"use client";

import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { useFavoriteState } from "../store/store";

export function ClientSessionProvider({
  children
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    useFavoriteState.getState().syncWithLocalStorage();
  }, []);

  return <SessionProvider>{children}</SessionProvider>;
}
