"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import heroApp from "/public/images/online-banking-app/hero-app.png";
import bannerVector from "/public/images/online-banking-app/banner-vector.png";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div
        id="home"
        className="relative overflow-hidden bg-white pt-[50px] pb-[50px] md:pb-[80px] lg:pb-[80px] xl:pb-[120px]"
      >
        <div
          id="home"
          className="container relative z-[1]"
        >
          <div className="grid gap-[30px] items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="space-y-[30px] md:space-y-[40px] sm:max-w-[570px] mx-auto xl:mx-0 text-center lg:text-start relative">
              <div>
                <h1
                  className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[55px] leading-[40px] sm:leading-[46px] md:leading-[50px] xl:leading-[50px] 2xl:leading-[64px] mb-[20px] md:mb-[25px] lg:mb-[20px] xl:mb-[30px]"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Stay connected to your money with our mobile banking App
                </h1>

                <p
                  className="text-[18px]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Say goodbye to manual workarounds and hello to productivity with our cutting-edge SaaS App. Designed to revolutionize your workflow
                </p>
              </div>

              <div
                data-aos="fade-up"
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
            </div>

            <div
              className="text-center xl:text-end"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Image src={heroApp} alt="Hero Banner" className="inline-block" />
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
