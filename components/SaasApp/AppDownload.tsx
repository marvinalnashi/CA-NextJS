'use client'

import React from 'react'
import Image from 'next/image'

import appDownloadImg from '/public/images/saas-app/app-download.png'

const AppDownload: React.FC = () => {
  return (
    <>
      <div id="download">
        <div className="container">
          <div className="bg-primary rounded-[20px] py-[50px] pl-[30px] pr-[30px]">
            <div className="grid gap-[30px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
              <div
                className="max-w-[530px] mx-auto lg:mx-0 text-center lg:text-left rtl:lg:text-right relative pl-[20px] rtl:pl-[0] 2xl:pl-[0] 2xl:left-[80px] rtl:2xl:left-0 rtl:2xl:right-[60px]"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <h6 className="text-gray-200 uppercase text-[16px] md:text-[18px] font-medium mb-[10px]">Download app</h6>

                <h2 className="text-white text-[25px] md:text-[36px] leading-[36px] md:leading-[45px] mb-[20px]">
                  Effortless Collaboration, Superior Results: Choose our SaaS App
                </h2>

                <p className="text-gray-200">
                  At the heart of every successful business lies efficiency, and our SaaS App is here to redefine it. Experience a streamlined and agile approach to your operations
                  as our app simplifies and automates repetitive tasks
                </p>

                <div className="mt-[20px] md:mt-[30px] lg:mt-[50px] space-x-[15px] md:space-x-[30px] rtl:space-x-reverse space-y-[15px] sm:space-y-[0]">
                  <a href="https://www.apple.com/store" target="_blank" className="inline-block">
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse bg-violet-400 py-[10px] px-[34px] rounded-full transition duration-500 ease-in-out hover:bg-violet-500">
                      <i className="flaticon-apple text-white text-[28px]"></i>
                      <div>
                        <p className="text-white text-[12px] leading-none mb-[6px]">available on</p>
                        <h4 className="text-white text-[15px] font-medium leading-none">Apple Store</h4>
                      </div>
                    </div>
                  </a>

                  <a href="https://play.google.com/store/games" target="_blank" className="inline-block">
                    <div className="flex items-center space-x-[10px] rtl:space-x-reverse bg-gray-800 py-[10px] px-[34px] rounded-full transition duration-500 ease-in-out hover:bg-black">
                      <i className="flaticon-play-store text-white text-[28px]"></i>
                      <div>
                        <p className="text-white text-[12px] leading-none mb-[6px]">available on</p>
                        <h4 className="text-white text-[15px] font-medium leading-none">Google Play</h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="relative text-center xl:text-end" data-aos="fade-down" data-aos-delay="200" data-aos-duration="600" data-aos-once="false">
                <Image src={appDownloadImg} alt="App Download" className="inline-block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppDownload
