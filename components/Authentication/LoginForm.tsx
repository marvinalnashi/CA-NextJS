"use client";

import React from "react";
import Link from "next/link";

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container mx-auto max-w-[700px]">
          <div className="space-y-[15px] mb-[20px] max-w-[450px] mx-auto text-center">
            <h2 className="font-bold text-[25px] md:text-[30px] lg:text-[35px] leading-none">
              Login Your Account
            </h2>
            <p>
              Welcome Back Plama! Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt.
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
                  placeholder="Email address"
                  className="bg-white text-[#4A4E4B] border border-[#bbb4b4] rounded-[6px] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="font-bold text-black text-[14px] md:text-[16px] block mb-[10px]"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-white text-[#4A4E4B] border border-[#bbb4b4] rounded-[6px] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-[16px] h-[16px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2 rtl:ml-0 rtl:mr-2 text-[15px]"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-[15px]">
                  <Link
                    href="/forgot-password"
                    className="hover:text-primary-color"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="py-[15px] px-[30px] block w-full rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
                >
                  Login Now
                </button>
              </div>

              <p>
                Did not create an account?{" "}
                <Link
                  href="/register"
                  className="font-medium hover:text-[#717FF8]"
                >
                  Register Now
                </Link>
              </p>
            </form>

            <div className="mt-[20px] sm:flex items-center space-y-[10px] sm:space-y-[0] ">
              <h3 className="text-black font-bold text-[18px] mr-[15px] rtl:mr-0 rtl:ml-[15px]">
                Or Register with
              </h3>

              <div className="space-x-[15px] rtl:space-x-reverse">
                <Link
                  href="#"
                  target="_black"
                  className="inline-block bg-[#dc4c64] text-white px-[22px] py-[7px] rounded-[30px] hover:bg-[#cf3e56]"
                >
                  Google
                </Link>

                <Link
                  href="#"
                  target="_black"
                  className="inline-block bg-[#3b71ca] text-white px-[22px] py-[7px] rounded-[30px] hover:bg-[#275eb9]"
                >
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
