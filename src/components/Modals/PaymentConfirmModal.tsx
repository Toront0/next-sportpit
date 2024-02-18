import React, { useEffect, useState } from "react";
import ModalPortal from "./ModalPortal";
import { FaCircleCheck } from "react-icons/fa6";

interface IPaymentConfirmModal {
  onClose: () => void;
}

const PaymentConfirmModal = ({ onClose }: IPaymentConfirmModal) => {
  const [secBeforeCloseModal, setSecBeforeCloseModal] = useState(5);

  useEffect(() => {
    if (secBeforeCloseModal === 0) {
      onClose();
    }
    const id = setInterval(() => {
      setSecBeforeCloseModal((p) => p - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [secBeforeCloseModal]);

  return (
    <ModalPortal onClose={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="[width:clamp(400px,90%,500px)] bg-gray-12 p-6 rounded dark:bg-gray-2"
      >
        <div className="w-full flex items-center flex-col">
          <FaCircleCheck className="text-4xl text-[#1d9a42] dark:text-[#27fc67] " />
          <h3 className="text-xl text-black mt-2 font-bold dark:text-white">
            Спасибо, что выбрали нас!
          </h3>
          <p className="text-xs text-gray-6 dark:text-gray-9">
            *Это не полная оплата, т.к. это не полноценный проект.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="text-sm text-gray-2 dark:text-gray-14 px-4 py-1 rounded bg-opac-b-2 dark:bg-opac-w-2 font-semibold"
          >
            Закрыть <b>{secBeforeCloseModal}</b>
          </button>
        </div>
      </div>
    </ModalPortal>
  );
};

export default PaymentConfirmModal;
