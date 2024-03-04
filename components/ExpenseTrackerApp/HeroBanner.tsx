"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import heroBanner1 from "/public/images/expense-tracker-app/hero-banner1.png";
import bannerVector from "/public/images/expense-tracker-app/banner-vector.png";
import userImg1 from "/public/images/users/user1.jpg";
import userImg2 from "/public/images/users/user2.jpg";
import userImg3 from "/public/images/users/user3.jpg";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div id="home" className="relative overflow-hidden bg-white pt-[50px] md:pt-[80px] lg:pt-[100px] xl:pt-[100px]">
        <div id="home" className="container xl:max-w-[1980px] xl:px-[30px] relative z-[1]">
          <div className="grid gap-[30px] items-end grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
            <div
              className="space-y-[30px] md:space-y-[40px] lg:space-y-[30px] xl:space-y-[40px] md:max-w-[730px] xl:pb-[70px] 2xl:pb-[150px] xl:pr-[30px] 2xl:pr-[100px] ml-auto lg:mr-auto xl:mr-0 text-center xl:text-start relative"
            >
              <div>
                <h1
                  className="text-[30px] sm:text-[35px] md:text-[42px] lg:text-[40px] xl:text-[40px] 2xl:text-[55px] leading-[40px] sm:leading-[46px] md:leading-[55px] xl:leading-[50px] 2xl:leading-[64px] mb-[20px] md:mb-[30px] lg:mb-[20px] xl:mb-[30px]"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Track, analyze, and optimize your expenses with our App
                </h1>

                <p
                  className="text-[18px]"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Our Expense Tracker mobile app empowers you to gain a clear understanding of your financial situation. By tracking and categorizing your expenses, you can see exactly where your money is going, identify areas of overspending
                </p>
              </div>

              <div
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <Link
                  href="#"
                  className="py-[15px] px-[30px] inline-block rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
                >
                  Start Free Trial
                </Link>
              </div>

              <div
                className="flex items-center justify-center xl:justify-start space-x-[15px] rtl:space-x-reverse"
                data-aos="fade-right"
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
                  <p className="text-[15px]">Review 4.8/5.0</p>
                </div>
              </div>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Image
                src={heroBanner1}
                alt="Hero Banner"
              />
            </div>
          </div>
        </div>

        <Image
          src={bannerVector}
          alt="shape"
          className="absolute bottom-0 left-0 rtl:right-0 bg-[#fff] w-full"
        />
      </div>
    </>
  );
};

export default HeroBanner;
