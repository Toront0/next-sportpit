"use client";

import { useCartState } from "@/lib/store/store";
import React, { useState } from "react";
import ModalPortal from "../Modals/ModalPortal";

import { FaCircleCheck } from "react-icons/fa6";
import PaymentConfirmModal from "../Modals/PaymentConfirmModal";

const CartTotal = () => {
  const cartState = useCartState();
  const [showPaymentCompleteModal, setShowPaymentCompleteModal] =
    useState(false);

  const totalPrice = cartState.items.reduce((acc, val) => {
    return acc + val.qty * val.price;
  }, 0);

  return (
    <div className="w-full p-6 rounded-xl  flex justify-between bg-opac-b-2 dark:bg-opac-w-2">
      {showPaymentCompleteModal && (
        <PaymentConfirmModal
          onClose={() => setShowPaymentCompleteModal(false)}
        />
      )}
      <div></div>
      <div className="w-1/2 xl:w-1/5">
        <ul>
          <li className="flex items-center justify-between">
            <span className="text-sm text-gray-6 dark:text-gray-9">
              SUBTOTAL TTC
            </span>
            <span className="text-sm text-gray-3 font-medium dark:text-gray-13">
              {totalPrice} ₽
            </span>
          </li>
          <li className="flex items-center my-4 justify-between">
            <span className="text-sm text-gray-6 dark:text-gray-9">
              SHIPPING
            </span>
            <span className="text-sm text-gray-3 font-medium dark:text-gray-13">
              Free
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-sm text-gray-6 dark:text-gray-9">TOTAL</span>
            <span className="text-sm text-gray-3 font-medium dark:text-gray-13">
              {totalPrice} ₽
            </span>
          </li>
        </ul>
        <button
          onClick={() => setShowPaymentCompleteModal(true)}
          className="flex items-center w-full mt-2 justify-between py-2 px-3 rounded-lg bg-[#be123c] font-medium text-white"
        >
          Оплатить
          <span>{totalPrice} ₽</span>
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
