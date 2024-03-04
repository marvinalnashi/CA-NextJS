"use client";

import React from "react";
import Image from "next/image";

import appDownloadImg from "/public/images/money-transfer-app/app-download.png";
import shape3 from "/public/images/money-transfer-app/shape3.png";

const AppDownload: React.FC = () => {
  return (
    <>
      <div id="download" className="px-[15px] xl:px-[30px]">
        <div className="bg-[#00373E] max-w-[1700px] mx-auto rounded-[20px] py-[60px] overflow-hidden">
          <div className="container">
            <div className="grid gap-[40px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
              <div 
                className="max-w-[560px] mx-auto lg:mx-0 text-center lg:text-left rtl:lg:text-right"
                data-aos="fade-down"
                data-aos-delay='100'
                data-aos-duration="600"
                data-aos-once="false"
              >
                <h6 className="text-white uppercase text-[16px] md:text-[18px] font-medium mb-[10px]">
                  Download app
                </h6>

                <h2 className="text-[#FFF1CE] text-[28px] md:text-[36px] leading-[36px] md:leading-[45px] mb-[20px]">
                  Task by task, step by step, success is within reach
                </h2>

                <p className="text-[#CBCBCB]">
                  Join millions of satisfied customers who rely on our money transfer website for their financial needs. With our robust infrastructure and industry expertise, we have established ourselves as a trusted partner in facilitating
                </p>

                <div className="mt-[30px] md:mt-[50px] space-x-[15px] md:space-x-[30px] rtl:space-x-reverse space-y-[15px] sm:space-y-[0]">
                  <a
                    href="https://www.apple.com/store"
                    target="_blank"
                    className="inline-block"
                  >
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse bg-[#FBAD9C] py-[10px] px-[34px] rounded-full transition duration-500 ease-in-out group hover:bg-[#000]">
                      <i className="flaticon-apple text-[#00373E] text-[28px] group-hover:text-white"></i>
                      <div>
                        <p className="text-[#00373E] text-[12px] leading-none mb-[6px] group-hover:text-white">
                          available on
                        </p>
                        <h4 className="text-[#00373E] text-[15px] font-medium leading-none group-hover:text-white">
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
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse bg-[#CAFFF2] py-[10px] px-[34px] rounded-full transition duration-500 ease-in-out hover:bg-[#f9e3e3]">
                      <i className="flaticon-play-store text-[#00373E] text-[28px]"></i>
                      <div>
                        <p className="text-[12px] text-[#00373E] leading-none mb-[6px]">
                          available on
                        </p>
                        <h4 className="text-[15px] text-[#00373E] font-medium leading-none">
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
                <Image
                  src={shape3}
                  alt="shape"
                  className="absolute top-0 right-0 lg:top-[-35px] lg:right-[-70px] z-[-1]"
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
