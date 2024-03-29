import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { BsFillPersonFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { FaCcAmazonPay } from 'react-icons/fa';
import { GiConfirmed } from 'react-icons/gi';

const Process = () => {
  return (
    <div className="section-bg">
      <div className="max-w-7xl flex items-center justify-center mx-auto min-h-[30vh] my-16">
        <div className="w-full">
          <SectionTitle>Ordering Process</SectionTitle>
          <div className="flex flex-col lg:flex-row lg:gap-y-1 gap-y-5">
            <div className="w-2/3 mx-auto lg:w-1/3 text-center px-6">
              <div className="hover:scale-110 transition-all duration-300 bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                <div className="w-1/3 bg-transparent text-2xl flex items-center justify-center icon-step">
                 <BsFillPersonFill/>
                </div>
                <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                  <h2 className="font-bold text-sm">Personal Info</h2>
                  <p className="text-xs text-gray-600">Create Your Account</p>
                </div>
              </div>
            </div>
            <div className="rotate-90 lg:rotate-0 flex-1 flex items-center justify-center text-2xl">
              <i className="fa-solid fa-chevron-right"></i>
             
            </div>
            <div className="w-2/3 mx-auto lg:w-1/3 text-center px-6">
              <div className="hover:scale-110 transition-all duration-300 bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                <div className="w-1/3 bg-transparent h-20 text-2xl flex items-center justify-center icon-step">
                  <FaShoppingCart/>
                </div>
                <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                  <h2 className="font-bold text-sm">Place Order</h2>
                  <p className="text-xs text-gray-600">
                    Placing Order With Delivery Information
                  </p>
                </div>
              </div>
            </div>
            <div className="rotate-90 lg:rotate-0 flex-1 flex items-center justify-center text-2xl">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="w-2/3 mx-auto lg:w-1/3 text-center px-6">
              <div className="hover:scale-110 transition-all duration-300 bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                <div className="w-1/3 bg-transparent h-20 text-2xl flex items-center justify-center icon-step">
                  <FaCcAmazonPay/>
                </div>
                <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                  <h2 className="font-bold text-sm">Payment</h2>
                  <p className="text-xs text-gray-600">
                    Make Payment For Your Order
                  </p>
                </div>
              </div>
            </div>
            <div className="rotate-90 lg:rotate-0 flex-1 flex items-center justify-center text-2xl">
              <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className="w-2/3 mx-auto lg:w-1/3 text-center px-6">
              <div className="hover:scale-110 transition-all duration-300 bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                <div className="w-1/3 bg-transparent h-20 text-2xl flex items-center justify-center icon-step">
                <GiConfirmed/>
                </div>
                <div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                  <h2 className="font-bold text-sm">Confirmation</h2>
                  <p className="text-xs text-gray-600">Order Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
