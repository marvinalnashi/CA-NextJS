"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import Link from "next/link";

import heroBannerImg from "/public/images/task-management-app/hero-banner.png";
import userImg1 from "/public/images/users/user1.jpg";
import userImg2 from "/public/images/users/user2.jpg";
import userImg3 from "/public/images/users/user3.jpg";

const HeroBanner: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);

  return (
    <>
      {/* Use here youtube Embed video link */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/kSJYu4njW8s?si=Af-uo9UkKXgl-bG7",
        ]}
      />

      <div id="home" className="container max-w-[1760px] xl:px-[30px]">
        <div className="bg-[#F9F3EF] rounded-[20px] py-[40px] md:py-[75px] px-[30px] md:px-[60px] lg:px-[50px] xl:px-[70px] 2xl:px-[130px]">
          <div className="grid gap-[25px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="space-y-[30px] md:space-y-[40px] lg:space-y-[30px] xl:space-y-[50px] lg:max-w-[590px]">
              <div>
                <h1
                  className="text-[25px] md:text-[42px] lg:text-[40px] xl:text-[50px] 2xl:text-[55px] leading-[35px] md:leading-[46px] lg:leading-[55px] xl:leading-[64px] mb-[20px] md:mb-[30px] lg:mb-[20px] xl:mb-[40px]"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  Unlock your full potential, organize your tasks, live your
                  life
                </h1>

                <p
                  className="text-[18px]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  A task management application provides a centralized platform
                  to organize and track all your tasks in one place. It helps
                  you prioritize, categorize, and allocate resources
                  efficiently, ensuring nothing falls through the cracks.
                </p>
              </div>

              <div
                className="sm:flex items-center space-y-[20px] sm:space-y-[0] sm:space-x-[30px] rtl:space-x-reverse"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <Link
                  href="#"
                  className="py-[15px] px-[30px] inline-block rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
                >
                  Get Started Free
                </Link>

                <div
                  className="flex items-center space-x-[10px] rtl:space-x-reverse cursor-pointer group"
                  onClick={() => setToggler(!toggler)}
                >
                  <div className="bg-[#fff] w-[56px] h-[56px] leading-[56px] pl-[5px] rounded-full text-center text-[22px] transition duration-500 ease-in-out group-hover:bg-primary-color group-hover:text-white">
                    <i className="flaticon-play-button"></i>
                  </div>
                  <p className="font-semibold text-[16px] md:text-[18px]">
                    How It Work
                  </p>
                </div>
              </div>

              <div
                className="flex items-center space-x-[15px] rtl:space-x-reverse"
                data-aos="fade-up"
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
                  <p className="text-[15px] text-[#666]">Review 4.8/5.0</p>
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
                src={heroBannerImg}
                alt="Hero Banner"
                className="inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
