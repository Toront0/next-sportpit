import Input from "@/components/UI/Input";
import React, { Dispatch, SetStateAction, useState } from "react";

import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordInput from "@/components/UI/PasswordInput";

import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const schema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Пароль должен содержать как минимум 8 символов" }),
    confirmPassword: z.string().min(1, { message: "Пароли не совпадают" })
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Пароли не совпадают"
  });

type FormFields = z.infer<typeof schema>;

interface IChangePasswordInputs {
  onClose: () => void;
  email: string;
  setActiveStep: Dispatch<SetStateAction<1 | 2 | 3>>;
}

const ChangePasswordInputs = ({
  onClose,
  email,
  setActiveStep
}: IChangePasswordInputs) => {
  const {
    register,
    getValues,
    formState: { errors, isValid }
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: "onChange"
  });
  const [isPasswordChanged, setIsPasswordChanged] = useState<null | boolean>(
    null
  );

  const handleChangePassword = async () => {
    if (isPasswordChanged) return;

    const res = await fetch(`${window.location.origin}/api/new-password`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: getValues().password
      })
    });

    if (res.status === 200) {
      setIsPasswordChanged(true);
      setActiveStep(3);
    } else {
      setIsPasswordChanged(false);
    }

    await new Promise((resolve) => resolve(setTimeout(() => onClose(), 3000)));
  };

  return (
    <>
      <p className="text-xs text-gray-6 text-center mb-3 dark:text-gray-9">
        Придумайте новый, надежный пароль и обязательно запишите его, чтобы не
        забыть.
      </p>

      <div>
        <label
          className="text-sm text-gray-4 dark:text-gray-12 font-medium"
          htmlFor="password"
        >
          Новый пароль
        </label>
        <PasswordInput name="password" register={register} />
        {errors.password?.message && (
          <p className="text-[13px] text-rose-8 dark:text-rose-5">
            {errors.password.message}
          </p>
        )}
      </div>
      <div>
        <label
          className="text-sm text-gray-4 dark:text-gray-12 font-medium"
          htmlFor="confirmPassword"
        >
          Новый пароль
        </label>
        <PasswordInput name="confirmPassword" register={register} />
        {errors.confirmPassword?.message && (
          <p className="text-[13px] text-rose-8 dark:text-rose-5">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={onClose}
          className="text-sm text-gray-4 dark:text-gray-12 font-medium rounded bg-opac-b-1 dark:bg-opac-w-1 px-3 py-1.5"
        >
          Отменить
        </button>
        <button
          disabled={!isValid}
          onClick={handleChangePassword}
          className={`px-3 text-sm font-medium py-1 disabled:cursor-not-allowed disabled:bg-rose-5 disabled:text-gray-5 disabled:dark:bg-rose-10 ${
            isPasswordChanged === true ? "bg-[#1d9a42] dark:bg-[#299f4d]" : ""
          } disabled:dark:text-gray-8 flex items-center gap-1 rounded text-white bg-rose-7 dark:bg-rose-8`}
        >
          {isPasswordChanged === null ? (
            "Изменить пароль"
          ) : isPasswordChanged === false ? (
            <>
              Произошла ошибка
              <MdClose />
            </>
          ) : (
            <>
              Успешно обновлен
              <FaCheck />
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default ChangePasswordInputs;
