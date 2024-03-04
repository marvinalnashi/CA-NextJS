"use client";

import React from "react";
import Image from "next/image";

import appDownloadImg from "/public/images/game-app/app-download.png"; 

const AppDownload: React.FC = () => {
  return (
    <>
      <div id="download">
        <div className="container">
          <div className="bg-[#232323] rounded-[20px]">
            <div className="grid gap-[30px] md:gap-[50px] lg:gap-[30px] items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
              <div 
                className="px-[20px] md:px-[40px] xl:pr-[0] pt-[30px] md:pt-[50px] lg:py-[30px] lg:w-[480px] xl:w-[520px] relative z-[1] xl:left-[20px] 2xl:left-[60px] rtl:2xl:left-0 rtl:2xl:right-[60px] mx-auto lg:mx-0 text-center lg:text-left rtl:lg:text-right"
                data-aos="fade-up"
                data-aos-delay='100'
                data-aos-duration="600"
                data-aos-once="false"
              >
                <h6 className="text-red-color uppercase text-[16px] md:text-[18px] font-medium mb-[10px]">
                  Download app
                </h6>

                <h2 className="text-[#EBEBEB] text-[25px] md:text-[36px] lg:text-[26px] xl:text-[36px] leading-[36px] md:leading-[45px] lg:leading-[35px] xl:leading-[45px] mb-[20px]">
                  Get ready to redefine mobile gaming with game mobile app
                </h2>

                <p className="text-[#EBEBEB]">
                  Get ready to redefine mobile gaming with our groundbreaking game mobile app. We have revolutionized the gaming experience, combining cutting-edge technology with seamless gameplay.
                </p>

                <div className="mt-[30px] md:mt-[40px] lg:mt-[30px] xl:mt-[50px] space-x-[15px] md:space-x-[30px] rtl:space-x-reverse space-y-[15px] sm:space-y-[0]">
                  <a
                    href="https://www.apple.com/store"
                    target="_blank"
                    className="inline-block"
                  >
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse bg-red-color py-[10px] px-[34px] rounded-full transition duration-500 ease-in-out hover:bg-primary-color">
                      <i className="flaticon-apple text-white text-[28px]"></i>
                      <div>
                        <p className="text-white text-[12px] leading-none mb-[6px]">
                          available on
                        </p>
                        <h4 className="text-white text-[15px] font-medium leading-none">
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
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse bg-primary-color py-[10px] px-[34px] rounded-full transition duration-500 ease-in-out hover:bg-red-color">
                      <i className="flaticon-play-store text-white text-[28px]"></i>
                      <div>
                        <p className="text-white text-[12px] leading-none mb-[6px]">
                          available on
                        </p>
                        <h4 className="text-white text-[15px] font-medium leading-none">
                          Google Play
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div 
                className="lg:col-span-2 relative text-end lg:pl-[50px] rtl:lg:pl-[0] rtl:lg:pr-[130px] xl:pl-[0] rtl:xl:pr-[130px]"
                data-aos="fade-down"
                data-aos-delay='200'
                data-aos-duration="600"
                data-aos-once="false"
              >
                <Image
                  src={appDownloadImg}
                  alt="App Download"
                  className="inline-block"
                /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
