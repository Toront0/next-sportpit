import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface IPasswordInput extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  error?: boolean;
  name: string;
}

const PasswordInput = ({ register, error, name, ...rest }: IPasswordInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div
      className={`relative flex border items-center p-2 text-gray-4 dark:text-gray-12 bg-opac-b-1 ${
        error
          ? "border-rose-5 dark:border-rose-8"
          : " border-opac-b-1 dark:border-opac-w-1"
      }  dark:bg-opac-w-1 rounded`}
    >
      <input
        {...rest}
        {...register(name)}
        autoComplete="off"
        type={isPasswordVisible ? "text" : "password"}
        className={`w-full text-sm bg-transparent  focus:outline-none`}
      />
      <button
        type="button"
        onClick={() => setIsPasswordVisible((p) => !p)}
        className="h-full aspect-square text-xl"
      >
        {isPasswordVisible ? <MdVisibilityOff /> : <MdVisibility />}
      </button>
    </div>
  );
};

export default PasswordInput;
