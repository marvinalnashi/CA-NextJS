"use client";

import React from "react";
import Image from "next/image";

import heroAppImg from "/public/images/game-app/hero-app.png";
import circleShape from "/public/images/game-app/circle-shape.png";
import userImg1 from "/public/images/users/user1.jpg";
import userImg2 from "/public/images/users/user2.jpg";
import userImg3 from "/public/images/users/user3.jpg";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div
        id="home"
        className="relative overflow-hidden bg-red-color pt-[30px] md:pt-[40px] lg:pt-[30px] xl:pt-[50px]"
      >
        <div className="container">
          <div className="grid gap-[30px] items-end grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="space-y-[30px] md:space-y-[40px] lg:space-y-[30px] xl:space-y-[40px] md:max-w-[590px] mx-auto lg:mx-0 text-center lg:text-start lg:pb-[60px] xl:pb-[70px] 2xl:pb-[150px]">
              <div>
                <h1
                  className="text-[#EBEBEB] text-[30px] sm:text-[35px] md:text-[42px] lg:text-[35px] xl:text-[44px] 2xl:text-[50px] leading-[40px] sm:leading-[46px] md:leading-[55px] lg:leading-[40px] xl:leading-[50px] 2xl:leading-[64px] mb-[20px] md:mb-[30px] lg:mb-[20px] xl:mb-[30px]"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Dive into a World of Mobile Gaming Adventure!
                </h1>

                <p
                  className="text-[#EBEBEB] text-[18px]"
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Welcome to the world of gaming on your mobile device! Our game
                  mobile app is your gateway to endless excitement and
                  entertainment.
                </p>
              </div>

              <div
                className="space-x-[15px] md:space-x-[30px] rtl:space-x-reverse space-y-[15px] sm:space-y-[0]"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <a
                  href="https://www.apple.com/store"
                  target="_blank"
                  className="inline-block"
                >
                  <div className="flex items-center space-x-[10px] rtl:space-x-reverse bg-[#EBEBEB] py-[10px] px-[34px] rounded-full transition duration-500 ease-in-out group hover:bg-black-color">
                    <i className="flaticon-apple text-black-color group-hover:text-[#EBEBEB] text-[28px]"></i>
                    <div>
                      <p className="text-black-color text-[12px] leading-none mb-[6px] group-hover:text-[#EBEBEB]">
                        available on
                      </p>
                      <h4 className="text-black-color text-[15px] font-medium leading-none group-hover:text-[#EBEBEB]">
                        Apple Store
                      </h4>
                    </div>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/games"
                  target="_blank"
                  className="inline-block"
                >
                  <div className="flex items-center space-x-[10px] rtl:space-x-reverse bg-primary-color py-[10px] px-[34px] rounded-full transition duration-500 ease-in-out hover:bg-black-color">
                    <i className="flaticon-play-store text-white text-[28px]"></i>
                    <div>
                      <p className="text-[12px] text-white leading-none mb-[6px]">
                        available on
                      </p>
                      <h4 className="text-[15px] text-white font-medium leading-none">
                        Google Play
                      </h4>
                    </div>
                  </div>
                </a>
              </div>

              <div
                className="flex items-center justify-center lg:justify-start space-x-[15px] rtl:space-x-reverse"
                data-aos="fade-left"
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
                  <p className="text-[15px] text-[#EBEBEB]">Review 4.8/5.0</p>
                </div>
              </div>
            </div>

            <div className="text-center relative">
              <Image
                src={heroAppImg}
                alt="Hero Banner"
                className="inline-block px-[30px] relative z-[1]"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="600"
                data-aos-once="true"
              />
              <Image
                src={circleShape}
                alt="shape"
                className="absolute bottom-0 right-0 left-0 rtl:right-0 z-0 animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
