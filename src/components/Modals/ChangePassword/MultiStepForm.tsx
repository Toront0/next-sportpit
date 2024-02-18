import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/UI/Input";
import VerifyCode from "./VerifyCode";
import ChangePasswordInputs from "./ChangePasswordInputs";

const formSchema = z.object({
  email: z.string().email({ message: "Введите корректный почтовый адрес" })
});

type FormFields = z.infer<typeof formSchema>;

interface IMultiStepForm {
  onClose: () => void;
  setActiveStep: Dispatch<SetStateAction<1 | 2 | 3>>;
  activeStep: number;
}

const MultiStepForm = ({
  onClose,
  setActiveStep,
  activeStep
}: IMultiStepForm) => {
  const {
    register,
    getValues,
    watch,
    formState: { errors, isValid }
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    mode: "onChange"
  });
  const [emailExist, setEmailExist] = useState<null | boolean>(null);

  const checkEmail = async () => {
    const res = await fetch(
      `${window.location.origin}/api/check-email?email=${getValues().email}`
    );

    if (res.status === 200) {
      setEmailExist(false);
    }

    if (res.status === 409) {
      const res = await fetch(
        `${window.location.origin}/api/send-code?email=${getValues().email}`
      );

      if (res.status === 200) {
        setEmailExist(true);
        setActiveStep(2);
      }
    }
  };

  useEffect(() => {
    if (emailExist !== null) {
      setEmailExist(null);
    }
  }, [watch("email")]);

  return (
    <>
      {activeStep === 1 ? (
        <>
          <p className="text-xs text-gray-6 mb-3 dark:text-gray-9">
            Введите привязанный к вашему аккаунта электронный адрес, вы получите
            6-значный код для верификации, что именно вы являетесь владельцем
            почты.
          </p>
          <Input
            name="email"
            id="email"
            register={register}
            placeholder="Электронный адрес вашего аккаунта"
            error={!!errors.email?.message}
          />
          {errors.email?.message && (
            <p className="text-[13px] text-rose-8 dark:text-rose-5">
              {errors.email.message}
            </p>
          )}
          {!errors.email?.message &&
            getValues().email &&
            emailExist === false && (
              <p className="text-[13px] text-rose-8 dark:text-rose-5">
                Аккаунт с такой почтой не существует.
              </p>
            )}
          <div className="flex gap-2 mt-4">
            <button
              onClick={onClose}
              className="text-sm text-gray-4 dark:text-gray-12 font-medium rounded bg-opac-b-1 dark:bg-opac-w-1 w-1/2 py-1.5"
            >
              Отменить
            </button>
            <button
              onClick={checkEmail}
              disabled={!isValid || emailExist === false}
              className="text-sm text-white disabled:cursor-not-allowed disabled:bg-rose-5 disabled:text-gray-5 disabled:dark:bg-rose-10 disabled:dark:text-gray-8 font-medium rounded bg-rose-7 dark:bg-rose-8 w-1/2 py-1.5"
            >
              Дальше
            </button>
          </div>
        </>
      ) : activeStep === 2 ? (
        <VerifyCode
          email={getValues().email}
          onClose={onClose}
          setActiveStep={setActiveStep}
        />
      ) : (
        <ChangePasswordInputs
          email={getValues().email}
          onClose={onClose}
          setActiveStep={setActiveStep}
        />
      )}
    </>
  );
};

export default MultiStepForm;
