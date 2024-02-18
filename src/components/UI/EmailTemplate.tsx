import React from "react";
import Logo from "./Icons/Logo";

interface IEmailTemplate {
  firstName: string;
  lastName: string;
  code: number;
}

const EmailTemplate = ({ firstName, lastName, code }: IEmailTemplate) => {
  return (
    <div className="bg-white h-96 w-full">
      <div className="p-2 border-b border-b-opac-b-2">
        <Logo />
      </div>
      <div className="flex items-center justify-center">
        <h1>Ваш код верификации</h1>
        <span className="font-semibold text-black">{code}</span>
      </div>
    </div>
  );
};

export default EmailTemplate;
