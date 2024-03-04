"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import howItWork from "/public/images/money-transfer-app/how-it-work.jpg";

const HowItWork: React.FC = () => {
  return (
    <>
      <div id="howItWork" className="pb-[50px] md:pb-[70px] lg:pb-[100px] xl:pb-[120px]">
        <div className="container">
          <div className="grid gap-[40px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div
              className="text-center 2xl:pr-[60px] rtl:2xl:pr-0 rtl:2xl:pl-[60px]"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <Image
                src={howItWork}
                alt="how It Work"
                className="bg-white rounded-[20px] p-[24px] inline-block"
              />
            </div>

            <div className="space-y-[30px] md:space-y-[40px]">
              <div
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <h6 className="uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
                  How It work
                </h6>

                <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px] mb-[20px]">
                  How to transfer money internationally?
                </h2>
                <p>
                  Join millions of satisfied customers who rely on our money
                  transfer website for their financial needs. With our robust
                  infrastructure and industry expertise, we have established
                  ourselves as a trusted partner in facilitating
                </p>
              </div>

              <div
                className="space-y-[5px]"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <div className="font-bold text-[18px] rounded-[50px] py-[15px] px-[40px] transition duration-500 ease-in-out bg-white hover:bg-white">
                  1. Create an account
                </div>

                <div className="font-bold text-[18px] rounded-[50px] py-[15px] px-[40px] transition duration-500 ease-in-out hover:bg-white">
                  2. We’ll verify your details
                </div>

                <div className="font-bold text-[18px] rounded-[50px] py-[15px] px-[40px] transition duration-500 ease-in-out hover:bg-white">
                  3. Start your transfer
                </div>

                <div className="font-bold text-[18px] rounded-[50px] py-[15px] px-[40px] transition duration-500 ease-in-out hover:bg-white">
                  4. Enter your receiver’s details
                </div>

                <div className="font-bold text-[18px] rounded-[50px] py-[15px] px-[40px] transition duration-500 ease-in-out hover:bg-white">
                  5. Pay for your transfer
                </div>
              </div>

              <div
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <Link
                  href="#"
                  className="py-[15px] px-[30px] inline-block rounded-[6px] bg-[#00373E] text-[#FFF1CE] font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-[#CAFFF2] hover:text-[#00373E]"
                >
                  Get Started 7 Days Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;
