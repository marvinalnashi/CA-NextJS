"use client";

import React from "react";
import Image from "next/image";

import appDownloadImg from "/public/images/online-banking-app/app-download.png"; 

const AppDownload: React.FC = () => {
  return (
    <>
      <div id="download">
        <div className="container">
          <div 
            className="rounded-[20px] pt-[60px] px-[20px] md:px-[100px] lg:px-[40px] xl:px-[70px] 2xl:px-[100px]"
            style={{ background: 'linear-gradient(180deg, #0A65FC 0%, rgba(117, 0, 208, 0.05) 100%)' }}
          >
            <div className="grid gap-[30px] md:gap-[50px] lg:gap-[60px] items-end grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
              <div 
                className="max-w-[560px] mx-auto lg:mx-0 text-center lg:text-left rtl:text-right rtl:lg:text-right lg:pb-[50px] xl:pb-[50px] 2xl:pb-[100px]"
                data-aos="fade-in"
                data-aos-delay='100'
                data-aos-duration="600"
                data-aos-once="false"
              >
                <h6 className="text-white uppercase text-[16px] md:text-[18px] font-medium mb-[10px]">
                  Download app
                </h6>

                <h2 className="text-white text-[28px] md:text-[36px] leading-[36px] md:leading-[45px] mb-[20px]">
                  Make every dollar count with our expense tracker
                </h2>

                <p className="text-white">
                  A task management application provides a centralized platform
                  to organize and track all your tasks in one place. It helps
                  you prioritize, categorize, and allocate resources
                  efficiently, ensuring nothing falls through the cracks.
                </p>

                <div className="mt-[30px] md:mt-[50px] space-x-[15px] md:space-x-[30px] rtl:space-x-reverse space-y-[15px] sm:space-y-[0]">
                  <a
                    href="https://www.apple.com/store"
                    target="_blank"
                    className="inline-block"
                  >
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse bg-[#A673EE] py-[10px] px-[34px] rounded-full transition duration-500 ease-in-out hover:bg-[#9870d1]">
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
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse bg-[#262A37] py-[10px] px-[34px] rounded-full transition duration-500 ease-in-out hover:bg-[#000]">
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
                className="relative text-center"
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
