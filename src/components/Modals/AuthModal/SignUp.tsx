import Input from "@/components/UI/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { MdError } from "react-icons/md";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import PasswordInput from "@/components/UI/PasswordInput";

const schema = z
  .object({
    firstName: z.string().min(1, "Поле обязательно"),
    lastName: z.string().min(1, "Поле обязательно"),
    email: z.string().email({ message: "Введите корректный почтовый адрес" }),
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

interface ISignUp {
  setCurrentAuthMethod: Dispatch<SetStateAction<"login" | "signUp">>;
}

const SignUp = ({ setCurrentAuthMethod }: ISignUp) => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid }
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: "onChange"
  });
  const [isEmailExist, setIsEmailExist] = useState(false);

  useEffect(() => {
    // if (errors.)
    if (errors.email) return;

    if (watch("email").length > 1) {
      const handler = async () => {
        const res = await fetch(
          `http://localhost:3000/api/check-email?email=${watch("email")}`
        );

        if (res.status === 409) {
          setIsEmailExist(true);
        } else {
          setIsEmailExist(false);
        }
      };
      handler();
    }
  }, [watch("email"), errors.email]);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);

    const res = await fetch("http://localhost:3000/api/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password
      })
    });

    if (res.status === 201) {
      setCurrentAuthMethod("login");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="my-3">
        <div className="flex mb-1 items-center justify-between">
          <label
            htmlFor="firstName"
            className="text-sm text-gray-4 dark:text-gray-12 font-medium"
          >
            Имя
          </label>
          {errors.firstName?.message && (
            <MdError className="text-xl text-rose-8 dark:text-rose-5" />
          )}
        </div>

        <Input
          register={register}
          name="firstName"
          placeholder="IvanZolo"
          id="firstName"
          error={!!errors.firstName?.message}
        />
        {errors.firstName?.message && (
          <p className="text-[13px] text-rose-8 dark:text-rose-5">
            {errors.firstName.message}
          </p>
        )}
      </div>
      <div>
        <div className="flex mb-1 items-center justify-between">
          <label
            htmlFor="lastName"
            className="text-sm text-gray-4 dark:text-gray-12 font-medium"
          >
            Фамилия
          </label>
          {errors.lastName?.message && (
            <MdError className="text-xl text-rose-8 dark:text-rose-5" />
          )}
        </div>

        <Input
          register={register}
          name="lastName"
          placeholder="IvanZolo"
          id="lastName"
          error={!!errors.lastName?.message}
        />
        {errors.lastName?.message && (
          <p className="text-[13px] text-rose-8 dark:text-rose-5">
            {errors.lastName.message}
          </p>
        )}
      </div>

      <div className="my-3">
        <div className="flex mb-1 items-center justify-between">
          <label
            htmlFor="email"
            className="text-sm text-gray-4 dark:text-gray-12 font-medium"
          >
            Электронная почта
          </label>
          {(errors.email?.message || isEmailExist) && (
            <MdError className="text-xl text-rose-8 dark:text-rose-5" />
          )}
        </div>

        <Input
          register={register}
          name="email"
          placeholder="IvanZolo"
          id="email"
          error={!!errors.email?.message || isEmailExist}
        />
        {errors.email?.message && (
          <p className="text-[13px] text-rose-8 dark:text-rose-5">
            {errors.email.message}
          </p>
        )}
        {!errors.email?.message && isEmailExist && (
          <p className="text-[13px] text-rose-8 dark:text-rose-5">
            Аккаунт с такой почтой уже существует
          </p>
        )}
      </div>
      <div className="mt-2">
        <div className="flex mb-1 items-center justify-between">
          <label
            htmlFor="password"
            className="text-sm text-gray-4 dark:text-gray-12 font-medium"
          >
            Пароль
          </label>
          {errors.password?.message && (
            <MdError className="text-xl text-rose-8 dark:text-rose-5" />
          )}
        </div>

        <PasswordInput
          register={register}
          placeholder="********"
          id="password"
          name="password"
          type="password"
          error={!!errors.password?.message}
        />
        {errors.password?.message && (
          <p className="text-[13px] text-rose-8 dark:text-rose-5">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="mt-2">
        <div className="flex mb-1 items-center justify-between">
          <label
            htmlFor="confirmPassword"
            className="text-sm text-gray-4 dark:text-gray-12 font-medium"
          >
            Подтвердите пароль
          </label>
          {errors.confirmPassword?.message && (
            <MdError className="text-xl text-rose-8 dark:text-rose-5" />
          )}
        </div>

        <PasswordInput
          register={register}
          placeholder="********"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          error={!!errors.confirmPassword?.message}
        />
        {errors.confirmPassword?.message && (
          <p className="text-[13px] text-rose-8 dark:text-rose-5">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={!isValid}
        className="w-full py-1.5 rounded disabled:bg-rose-5 disabled:text-gray-5 disabled:cursor-not-allowed disabled:dark:bg-rose-10 disabled:dark:text-gray-8 text-white bg-rose-8 mt-4 text-sm font-medium"
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default SignUp;
