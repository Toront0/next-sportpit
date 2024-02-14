"use client";

import { useToaster } from "@/lib/store/store";
import React from "react";
import Toast from "./Toast";

const Toaster = () => {
  const toasts = useToaster((s) => s.toasts);

  return (
    <div className="fixed top-14 right-2 flex flex-col gap-2 z-40">
      <Toast
        id={1}
        title="Whey protein"
        subtitle="Был успешно добавлен в корзину"
        type="error"
      />
      <Toast
        id={1}
        title="Whey protein"
        subtitle="Был успешно добавлен в корзину"
        type="success"
      />
    </div>
  );
};

export default Toaster;
