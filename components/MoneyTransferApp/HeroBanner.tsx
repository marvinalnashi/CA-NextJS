"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import heroBannerImg from "/public/images/money-transfer-app/hero-banner.png";
import shapeImg from "/public/images/money-transfer-app/shape1.png";
import shapeImg2 from "/public/images/money-transfer-app/shape2.png";
import userImg1 from "/public/images/users/user1.jpg";
import userImg2 from "/public/images/users/user2.jpg";
import userImg3 from "/public/images/users/user3.jpg";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div id="home" className="relative bg-[#00373E] pt-[30px] md:pt-[40px] lg:pt-[30px] xl:pt-[30px] pb-[50px] md:pb-[80px] lg:pb-[100px]">
        <div className="container 2xl:max-w-[1400px] relative z-[1]">
          <div className="grid gap-[30px] sm:gap-[50px] lg:gap-[30px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div
              className="space-y-[30px] md:space-y-[40px] lg:space-y-[30px] xl:space-y-[40px] md:max-w-[590px] mx-auto lg:mx-0 text-center 
                lg:text-start relative lg:top-[-50px] xl:top-[-80px]"
            >
              <div>
                <h1
                  className="text-[#FFF1CE] text-[30px] sm:text-[35px] md:text-[42px] lg:text-[40px] xl:text-[50px] 2xl:text-[55px] leading-[40px] sm:leading-[46px] md:leading-[55px] xl:leading-[64px] mb-[20px] md:mb-[30px] lg:mb-[20px] xl:mb-[30px]"
                  data-aos="fade-down"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Transferring money made secure and swift
                </h1>

                <p
                  className="text-[#CBCBCB] text-[18px]"
                  data-aos="fade-down"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Welcome to our money transfer platform, where we provide
                  secure and convenient solutions for sending and receiving
                  money across borders.
                </p>
              </div>

              <div
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <Link
                  href="#"
                  className="py-[15px] px-[30px] inline-block rounded-[6px] bg-[#CAFFF2] text-[#00373E] font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color hover:text-white"
                >
                  Send Money Now
                </Link>
              </div>

              <div
                className="flex items-center justify-center lg:justify-start space-x-[15px] rtl:space-x-reverse"
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="flex -space-x-2 rtl:space-x-reverse">
                  <Image
                    className="inline-block h-[45px] w-[45px] rounded-full ring-[3px] ring-white"
                    src={userImg1}
                    alt="user1"
                  />
                  <Image
                    className="inline-block h-[45px] w-[45px] rounded-full ring-[3px] ring-white"
                    src={userImg2}
                    alt="user2"
                  />
                  <Image
                    className="inline-block h-[45px] w-[45px] rounded-full ring-[3px] ring-white"
                    src={userImg3}
                    alt="user3"
                  />
                </div>

                <div>
                  <div className="text-[#FFC107] space-x-[3px] rtl:space-x-reverse text-[16px]">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                  <p className="text-[15px] text-[#CAFFF2]">Review 4.8/5.0</p>
                </div>
              </div>
            </div>

            <div
              className="text-center relative"
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Image
                src={heroBannerImg}
                alt="Hero Banner"
                className="inline-block"
              />

              <Image
                src={shapeImg}
                alt="shape"
                className="absolute top-0 right-0 2xl:top-[-20px] 2xl:right-[-50px] z-[-1]"
              />
            </div>
          </div>
        </div>

        <Image
          src={shapeImg2}
          alt="shape"
          className="absolute bottom-0 left-0 rtl:right-0 bg-[#F8F6F5] w-full z-0"
        />
      </div>
    </>
  );
};

export default HeroBanner;
