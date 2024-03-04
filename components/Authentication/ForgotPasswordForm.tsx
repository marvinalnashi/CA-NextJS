"use client";

import React from "react";

const ForgotPasswordForm: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container mx-auto max-w-[700px]">
          <div className="space-y-[15px] mb-[20px] max-w-[450px] mx-auto text-center">
            <h2 className="font-bold text-[25px] md:text-[35px] lg:text-[40px] leading-none">
              Reset Your Password
            </h2>
            <p>
              Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
            </p>
          </div>

          <div className="bg-[#F8F6F5] rounded-[20px] p-[30px] sm:p-[55px]">
            <form className="space-y-[25px]">
              <div>
                <label
                  htmlFor="email"
                  className="font-bold text-black text-[14px] md:text-[16px] block mb-[10px]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white text-[#4A4E4B] border border-[#bbb4b4] rounded-[6px] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                />
              </div>
   
              <div>
                <button
                  type="submit"
                  className="py-[15px] px-[30px] block w-full rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
