import React, { useState } from "react";
import ModalPortal from "../ModalPortal";
import Login from "./Login";
import SignUp from "./SignUp";

interface IAuthModal {
  onClose: () => void;
}

const AuthModal = ({ onClose }: IAuthModal) => {
  const [currentAuthMethod, setCurrentAuthMethod] = useState<
    "signUp" | "login"
  >("login");

  return (
    <ModalPortal onClose={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="[width:clamp(400px,90%,550px)] bg-gray-12 p-6 rounded dark:bg-gray-2"
      >
        <h2 className="text-xl text-center font-bold text-gray-1 dark:text-gray-15">
          Добро пожаловать!
        </h2>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setCurrentAuthMethod("login")}
            className={` ${
              currentAuthMethod === "login"
                ? "text-gray-2 dark:text-gray-14"
                : "text-gray-6 dark:text-gray-9"
            } font-semibold`}
          >
            Войти
          </button>
          <span className="text-gray-4 dark:text-gray-12">/</span>
          <button
            onClick={() => setCurrentAuthMethod("signUp")}
            className={` ${
              currentAuthMethod === "signUp"
                ? "text-gray-2 dark:text-gray-14"
                : "text-gray-6 dark:text-gray-9"
            } font-semibold`}
          >
            Регистрация
          </button>
        </div>
        {currentAuthMethod === "login" ? (
          <Login onClose={onClose} />
        ) : (
          <SignUp setCurrentAuthMethod={setCurrentAuthMethod} />
        )}
      </div>
    </ModalPortal>
  );
};

export default AuthModal;
