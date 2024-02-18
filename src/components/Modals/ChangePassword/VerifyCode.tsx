import React, { Dispatch, SetStateAction, useRef, useState } from "react";

interface IVerifyCode {
  onClose: () => void;
  email: string;
  setActiveStep: Dispatch<SetStateAction<1 | 2 | 3>>;
}

const VerifyCode = ({ onClose, email, setActiveStep }: IVerifyCode) => {
  const [code, setCode] = useState("");
  const [isCodeCorrect, setIsCodeCorrect] = useState<null | boolean>(null);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];

  const handleInput = (e: any, index: number) => {
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    const newCode = [];

    for (let i = 0; i < code.length; i++) {
      newCode.push(code[i]);
    }

    // const newCode = [...code];

    if (/^[a-z]+$/.test(e.target.value)) {
      const uc = e.target.value.toUpperCase();
      newCode[index] = uc;
      // @ts-ignore: Object is possibly 'null'.
      inputRefs[index].current.value = uc;
    } else {
      newCode[index] = e.target.value;
    }
    setCode(newCode.join(""));

    e.target.select();

    if (e.target.value === "") {
      if (previousInput) {
        // @ts-ignore: Object is possibly 'null'.
        previousInput.current.focus();
      }
    } else if (nextInput) {
      // @ts-ignore: Object is possibly 'null'.
      nextInput.current.select();
    }
  };

  function handleKeyDown(e: any, index: number) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];

    if ((e.keyCode === 8 || e.keyCode === 46) && input.value === "") {
      e.preventDefault();
      setCode(
        (prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1)
      );
      if (previousInput) {
        // @ts-ignore: Object is possibly 'null'.
        previousInput.current.focus();
      }
    }
  }

  const onSubmit = async () => {
    const res = await fetch(`${window.location.origin}/api/verify-code`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: +code,
        email: email
      })
    });

    console.log("res", res);

    if (res.status === 200) {
      setActiveStep(3);
    }

    if (res.status === 400) {
      setIsCodeCorrect(false);
    }
  };

  console.log(code);

  return (
    <>
      <p className="text-xs text-gray-6 dark:text-gray-9 ">
        Мы отправили код верификации на вашу почту.
      </p>
      <p className="text-xs mt-1 text-gray-4 dark:text-gray-12 ">
        *Вы можете проверить свою почту на наличие кода, но возможно вы его не
        получите т.к. это тестовый проект и некоторые сторонние сервисы
        используются в бесплатном тарифе, и возможно лимит на отправку писем
        превышен. <br /> В таком случае можете использовать универсальный код -
        1-1-1-1-1-1.
      </p>
      <div className="flex gap-2 my-4 justify-center">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <input
            className="w-14 h-14 rounded flex items-center justify-center text-black dark:text-white text-2xl text-center bg-opac-b-1 dark:bg-opac-w-1"
            key={index}
            type="text"
            maxLength={1}
            onChange={(e) => handleInput(e, index)}
            ref={inputRefs[index]}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      {isCodeCorrect === false && (
        <p className="text-[13px] text-rose-8 dark:text-rose-5 text-center">
          Код неверен
        </p>
      )}
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={() => setActiveStep(1)}
          className="text-sm text-gray-4 dark:text-gray-12 font-medium rounded bg-opac-b-1 dark:bg-opac-w-1 px-3 py-1.5"
        >
          Назад
        </button>
        <button
          onClick={onSubmit}
          disabled={code.length < 6}
          className="px-3 text-sm font-medium disabled:bg-rose-5 disabled:text-gray-5 disabled:dark:bg-rose-10 disabled:dark:text-gray-8 py-1 rounded text-white bg-rose-7 dark:bg-rose-8"
        >
          Продолжить
        </button>
      </div>
    </>
  );
};

export default VerifyCode;
