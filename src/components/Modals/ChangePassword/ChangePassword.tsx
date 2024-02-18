import React, { useState } from "react";
import ModalPortal from "../ModalPortal";
import MultiStepForm from "./MultiStepForm";

import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

interface IChangePassword {
  onClose: () => void;
}

const ChangePassword = ({ onClose }: IChangePassword) => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  return (
    <ModalPortal>
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="[width:_clamp(300px,90%,550px)] p-5 rounded bg-gray-15 dark:bg-gray-2 border border-opac-b-1 dark:border-opac-w-1"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-black dark:text-white">
            Забыли пароль?
          </h2>
          <button
            onClick={onClose}
            className="text-xl text-gray-4 dark:text-gray-12"
          >
            <MdClose />
          </button>
        </div>
        <div className="flex items-center justify-around my-8">
          <div className=" text-xl flex-col gap-1 font-semibold text-black dark:text-white  flex items-center justify-center">
            <div
              className={`w-12 h-12 rounded-full border-4 border-purple-7 ${
                activeStep > 1 ? "bg-purple-7" : "bg-transparent"
              } flex items-center justify-center`}
            >
              {activeStep > 1 ? <FaCheck className="text-white" /> : 1}
            </div>
            <span className="text-xs">Подтвердить почту</span>
          </div>
          <div className=" text-xl flex-col gap-1 font-semibold text-black dark:text-white  flex items-center justify-center">
            <div
              className={`w-12 h-12 rounded-full border-4 border-purple-7 ${
                activeStep > 2 ? "bg-purple-7" : "bg-transparent"
              } flex items-center justify-center`}
            >
              {activeStep > 2 ? <FaCheck className="text-white" /> : 2}
            </div>
            <span className="text-xs">Подтвердить код</span>
          </div>
          <div className=" text-xl flex-col gap-1 font-semibold text-black dark:text-white  flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-4 border-purple-7 flex items-center justify-center">
              3
            </div>
            <span className="text-xs">Новый пароль</span>
          </div>
        </div>

        <div className="mt-6">
          <MultiStepForm
            onClose={onClose}
            setActiveStep={setActiveStep}
            activeStep={activeStep}
          />
        </div>
      </div>
    </ModalPortal>
  );
};

export default ChangePassword;
