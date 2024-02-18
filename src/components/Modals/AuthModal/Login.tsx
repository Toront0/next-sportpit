import Input from "@/components/UI/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import WrongCredentials from "./WrongCredentials";
import ChangePassword from "../ChangePassword/ChangePassword";
import PasswordInput from "@/components/UI/PasswordInput";

const schema = z.object({
  email: z.string().min(1),
  password: z.string().min(1)
});

type FormFields = z.infer<typeof schema>;

interface ILogin {
  onClose: () => void;
}

const Login = ({ onClose }: ILogin) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormFields>({ resolver: zodResolver(schema) });
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [openPasswordForgetModal, setOpenPasswordForgetModal] = useState(false);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log("res", data);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false
    });

    if (res?.status === 401) {
      setWrongCredentials(true);
      return;
    }
    onClose();

    console.log("res", res);
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      {openPasswordForgetModal && (
        <ChangePassword onClose={() => setOpenPasswordForgetModal(false)} />
      )}
      {wrongCredentials && <WrongCredentials />}
      <div>
        <label
          htmlFor="email"
          className="text-sm text-gray-4 dark:text-gray-12 font-medium"
        >
          Электронная почта
        </label>

        <Input
          name="email"
          register={register}
          placeholder="IvanZolo"
          id="email"
        />
      </div>
      <div className="mt-2">
        <label
          htmlFor="password"
          className="text-sm text-gray-4 dark:text-gray-12 font-medium"
        >
          Пароль
        </label>

        <PasswordInput
          name="password"
          register={register}
          placeholder="********"
          id="password"
        />
      </div>
      <button
        type="button"
        onClick={() => setOpenPasswordForgetModal(true)}
        className="dark:text-blue-10 text-blue-8 text-xs hover:underline"
      >
        Забыли пароль?
      </button>
      <button
        disabled={!isValid}
        type="submit"
        className="w-full py-1.5 rounded disabled:cursor-not-allowed disabled:dark:bg-rose-10 disabled:dark:text-gray-8 text-white bg-rose-8 mt-4 text-sm font-medium"
      >
        Войти
      </button>
    </form>
  );
};

export default Login;
