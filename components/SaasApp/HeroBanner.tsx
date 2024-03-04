'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import heroApp from '/public/images/saas-app/hero-app.png'
import bannerVector from '/public/images/saas-app/banner-vector.png'
import userImg1 from '/public/images/users/user1.jpg'
import userImg2 from '/public/images/users/user2.jpg'
import userImg3 from '/public/images/users/user3.jpg'

const HeroBanner: React.FC = () => {
  return (
    <>
      <div id="home" className="relative overflow-hidden bg-white pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px] pb-[50px] md:pb-[80px] lg:pb-[80px] xl:pb-[120px]">
        <div id="home" className="container max-w-[1760px] xl:px-[30px] relative z-[1]">
          <div className="grid gap-[30px] items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3">
            <div className="space-y-[30px] md:space-y-[40px] sm:max-w-[570px] mx-auto xl:mx-0 text-center xl:text-start relative">
              <div>
                <h1
                  className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[55px] leading-[40px] sm:leading-[46px] md:leading-[50px] xl:leading-[50px] 2xl:leading-[64px] mb-[20px] md:mb-[25px] lg:mb-[20px] xl:mb-[30px]"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Simplify, Automate, and Thrive with our Intuitive SaaS App
                </h1>

                <p className="text-[18px]" data-aos="fade-right" data-aos-delay="200" data-aos-duration="600" data-aos-once="true">
                  Say goodbye to manual workarounds and hello to productivity with our cutting-edge SaaS App. Designed to revolutionize your workflow
                </p>
              </div>

              <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="600" data-aos-once="true">
                <Link
                  href="#"
                  className="py-[15px] px-[30px] inline-block rounded-[6px] bg-primary text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
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
                  <Image className="inline-block h-[45px] w-[45px] rounded-full ring-[3px] ring-white" src={userImg1} alt="user1" />
                  <Image className="inline-block h-[45px] w-[45px] rounded-full ring-[3px] ring-white" src={userImg2} alt="user2" />
                  <Image className="inline-block h-[45px] w-[45px] rounded-full ring-[3px] ring-white" src={userImg3} alt="user3" />
                </div>

                <div>
                  <div className="text-yellow-400 space-x-[3px] rtl:space-x-reverse text-[16px]">
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

            <div className="text-center xl:text-end xl:col-span-2" data-aos="fade-left" data-aos-delay="500" data-aos-duration="600" data-aos-once="true">
              <Image src={heroApp} alt="Hero Banner" className="inline-block" />
            </div>
          </div>
        </div>

        <Image src={bannerVector} alt="shape" className="absolute bottom-0 left-0 bg-white w-full" />
      </div>
    </>
  )
}

export default HeroBanner
