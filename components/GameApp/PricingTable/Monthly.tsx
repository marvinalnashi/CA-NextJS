"use client";

import React from "react";
import Link from "next/link";

const Monthly: React.FC = () => {
  return (
    <>
      <div className="mt-[30px] md:mt-[50px]">
        <div className="container">
          <div className="grid gap-[25px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div 
              className="group border-2 border-[#232323] rounded-[20px] bg-[#232323] relative overflow-hidden p-[30px] md:p-[60px] lg:p-[30px] xl:p-[40px] 2xl:p-[60px] space-y-[30px] md:space-y-[40px] lg:space-y-[40px] xl:space-y-[50px] transition duration-500 ease-in-out hover:border-black hover:bg-black"

              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <div>
                <h3 className="text-[#EBEBEB] text-[28px] leading-[45px]">Basic</h3>
                <p className="text-[#EBEBEB]">Core task management features for single users</p>
              </div>

              <div>
                <h2 className="text-[#EBEBEB] text-[32px] leading-[0] mb-[25px]">
                  Free{" "}
                  <span className="text-[15px] text-[#EBEBEB] font-normal">
                    /Forever
                  </span>
                </h2>
                <Link
                  href="#"
                  className="py-[15px] px-[20px] block rounded-[6px] bg-red-color text-white text-center border border-red-color font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out group-hover:bg-primary-color group-hover:text-white group-hover:border-primary-color"
                >
                  Get Started
                </Link>
              </div>

              <div>
                <h4 className="text-[#EBEBEB] text-[18px] font-semibold mb-[15px]">
                  Task management with:
                </h4>

                <ul className="text-[#EBEBEB] space-y-[10px]">
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Up to 3 projects</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Unlimited project members</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Customizable project boards</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Community support</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Multiple team members</p>
                  </li>
                </ul>
              </div>
            </div>

            <div 
              className="group border-2 border-[#232323] rounded-[20px] bg-[#232323] relative overflow-hidden p-[30px] md:p-[60px] lg:p-[30px] xl:p-[40px] 2xl:p-[60px] space-y-[30px] md:space-y-[40px] lg:space-y-[40px] xl:space-y-[50px] transition duration-500 ease-in-out hover:border-black hover:bg-black"

              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <div>
                <div className="bg-primary-color text-white uppercase text-center text-[15px] lg:text-[10px] xl:text-[10px] 2xl:text-[15px] py-[4px] md:absolute md:top-0 md:left-0 w-full md:rotate-[-35deg] mb-[15px] md:mb-[0] md:mt-[25px] lg:mt-[8px] xl:mt-[10px] 2xl:mt-[25px] md:ml-[-284px] lg:ml-[-117px] xl:ml-[-145px] 2xl:ml-[-152px]">
                  Popular
                </div>

                <h3 className="text-[#EBEBEB] text-[28px] leading-[45px]">Pro</h3>
                <p className="text-[#EBEBEB]">Simple, collaborative task management for teams</p>
              </div>

              <div>
                <h2 className="text-[#EBEBEB] text-[32px] leading-[0] mb-[25px]">
                  $9.99{" "}
                  <span className="text-[15px] text-[#EBEBEB] font-normal">
                    /Month
                  </span>
                </h2>
                <Link
                  href="#"
                  className="py-[15px] px-[20px] block rounded-[6px] bg-red-color text-white text-center border border-red-color font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out group-hover:bg-primary-color group-hover:text-white group-hover:border-primary-color"
                >
                  Get Started
                </Link>
              </div>

              <div>
                <h4 className="text-[#EBEBEB] text-[18px] font-semibold mb-[15px]">
                  Task management with:
                </h4>

                <ul className="text-[#EBEBEB] space-y-[10px]">
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Up to 3 projects</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Unlimited project members</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Customizable project boards</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Community support</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Multiple team members</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Private projects</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Statistics and reports</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Priority email & phone support</p>
                  </li>
                </ul>
              </div>
            </div>

            <div 
              className="group border-2 border-[#232323] rounded-[20px] bg-[#232323] relative overflow-hidden p-[30px] md:p-[60px] lg:p-[30px] xl:p-[40px] 2xl:p-[60px] space-y-[30px] md:space-y-[40px] lg:space-y-[40px] xl:space-y-[50px] transition duration-500 ease-in-out hover:border-black hover:bg-black"

              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <div>
                <h3 className="text-[#EBEBEB] text-[28px] leading-[45px]">Business</h3>
                <p className="text-[#EBEBEB]">Extended collaboration features for larger teams</p>
              </div>

              <div>
                <h2 className="text-[#EBEBEB] text-[32px] leading-[0] mb-[25px]">
                  $14.99{" "}
                  <span className="text-[15px] text-[#EBEBEB] font-normal">
                    /Month
                  </span>
                </h2>
                <Link
                  href="#"
                  className="py-[15px] px-[20px] block rounded-[6px] bg-red-color text-white text-center border border-red-color font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out group-hover:bg-primary-color group-hover:text-white group-hover:border-primary-color"
                >
                  Get Started
                </Link>
              </div>

              <div>
                <h4 className="text-[#EBEBEB] text-[18px] font-semibold mb-[15px]">
                  Task management with:
                </h4>

                <ul className="text-[#EBEBEB] space-y-[10px]">
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Up to 3 projects</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Unlimited project members</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Customizable project boards</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Community support</p>
                  </li>
                  <li className="flex items-center space-x-[10px] rtl:space-x-reverse">
                    <i className="flaticon-check-mark"></i>
                    <p>Multiple team members</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Monthly;
