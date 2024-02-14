"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoMdSunny } from "react-icons/io";

import { signOut, useSession } from "next-auth/react";

import { FaMoon } from "react-icons/fa";
import { useCartState, useTheme } from "@/lib/store/store";

import { FiUser } from "react-icons/fi";

import AuthModal from "../Modals/AuthModal/AuthModal";

import Logo from "../UI/Icons/Logo";
import { Dropdown } from "../UI/Dropdown/Dropdown";
import { DropdownTrigger } from "../UI/Dropdown/DropdownTrigger";
import { DropdownContent } from "../UI/Dropdown/DropdownContent";
import DropdownButtonItem from "../UI/Dropdown/DropdownButtonItem";

import { RiLoginBoxLine } from "react-icons/ri";
import { authOptions } from "@/lib/types/next_auth";
import Toggle from "../UI/Toggle";

const getLocalTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light";
  }

  // return "light";
};

const Header = () => {
  const { data, status } = useSession();
  // const [theme, setTheme] = useState(() => getLocalTheme());
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // const toggleDarkmode = () => {
  //   if (localStorage.getItem("theme") === "dark") {
  //     localStorage.setItem("theme", "light");
  //     setTheme("light");
  //   } else {
  //     localStorage.setItem("theme", "dark");
  //     setTheme("dark");
  //   }

  //   document.documentElement.classList.toggle("dark");
  // };

  const cartItemsQty = useCartState((s) => s.items).length;
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
    <div className="w-full h-12 flex items-center justify-between px-2 bg-gray-15 dark:bg-gray-1">
      {openLoginModal && <AuthModal onClose={() => setOpenLoginModal(false)} />}
      <Link
        href="/"
        className="text-lg text-gray-1 dark:text-gray-15 font-extrabold"
      >
        <Logo />
      </Link>
      <div className="flex gap-3 items-center">
        <Link
          href="/cart"
          className="text-xl relative text-gray-4 dark:text-gray-12"
        >
          <PiShoppingCartSimpleBold />
          {cartItemsQty > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-[17px] h-[17px] rounded-full bg-rose-7 text-[11px] text-white flex items-center justify-center  font-medium">
              {cartItemsQty}
            </span>
          )}
        </Link>
        <Link
          href="/favorites"
          className="text-xl text-gray-4 dark:text-gray-12"
        >
          <FaRegHeart />
        </Link>
        {!data?.user ? (
          <button
            onClick={() => setOpenLoginModal(true)}
            className="px-2 py-1 rounded bg-rose-7 text-white text-sm font-medium"
          >
            Войти
          </button>
        ) : (
          <Dropdown>
            <DropdownTrigger>
              <button className="text-xl  text-gray-4 dark:text-gray-12">
                <FiUser />
              </button>
            </DropdownTrigger>
            <DropdownContent>
              <DropdownButtonItem onClick={theme.toggleTheme}>
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center  gap-2">
                    <FaMoon className="w-5 h-5" />
                    Темный режим
                  </div>
                  <Toggle checked={theme.theme === "dark"} />
                </div>
              </DropdownButtonItem>
              <DropdownButtonItem onClick={() => signOut()}>
                <div className="flex items-center  gap-2">
                  <RiLoginBoxLine className="w-5 h-5" />
                  Выйти
                </div>
              </DropdownButtonItem>
            </DropdownContent>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default Header;
