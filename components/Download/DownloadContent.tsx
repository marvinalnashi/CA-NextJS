"use client";

import Link from "next/link";
import Image from "next/image";

import appDownloadImg from "/public/images/expense-tracker-app/app-download.png";
import shapeImg2 from "/public/images/shape2.png";

const DownloadContent = () => {
  return (
    <>
      <div className="bg-[#F8F6F5] relative h-[100vh] max-h-[100vh] overflow-auto py-[50px] md:py-[60px] lg:py-[70px] xl:py-[100px]">
        <div className="container">
          <div className="bg-white rounded-[20px] pt-[60px] px-[20px] md:px-[100px] lg:px-[40px] xl:px-[70px] 2xl:px-[100px]">
            <div className="grid gap-[30px] md:gap-[50px] lg:gap-[60px] items-end grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
              <div className="max-w-[560px] mx-auto lg:mx-0 text-center lg:text-left rtl:lg:text-right lg:pb-[50px] xl:pb-[50px] 2xl:pb-[100px]">
                <h6 className="text-pimary-color uppercase text-[16px] md:text-[18px] font-medium mb-[10px]">
                  Download app
                </h6>

                <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px] mb-[20px]">
                  Let’s get Free download From Apple and Play Store
                </h2>

                <p>
                  A task management application provides a centralized platform
                  to organize and track all your tasks in one place. It helps
                  you prioritize, categorize, and allocate resources
                  efficiently, ensuring nothing falls through the cracks.
                </p>

                <div className="mt-[30px] space-x-[15px] md:space-x-[30px] rtl:space-x-reverse space-y-[15px] sm:space-y-[0]">
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

                <div className="mt-[30px]">
                  <Link
                    href="/"
                    className="inline-block text-primary-color font-semibold text-[16px] underline underline-offset-1 transition duration-500 ease-in-out hover:text-black-color"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>

              <div className="relative text-center">
                <Image
                  src={appDownloadImg}
                  alt="App Download"
                  className="inline-block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Image */}
        <Image
          src={shapeImg2}
          alt="shape"
          className="absolute top-0 right-0 max-w-[120px] lg:max-w-[150px] xl:max-w-[200px] 2xl:max-w-[250px] hidden sm:block"
        />     
      </div>
    </>
  );
};

export default DownloadContent;
