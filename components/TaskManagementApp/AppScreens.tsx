"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const screenData = [
  {
    id: "1",
    image: "/images/task-management-app/screen1.png", // Recommended image size 234x480
  },
  {
    id: "2",
    image: "/images/task-management-app/screen2.png", // Recommended image size 234x480
  },
  {
    id: "3",
    image: "/images/task-management-app/screen3.png", // Recommended image size 234x480
  },
  {
    id: "4",
    image: "/images/task-management-app/screen4.png", // Recommended image size 234x480
  },
  {
    id: "5",
    image: "/images/task-management-app/screen5.png", // Recommended image size 234x480
  },
  {
    id: "6",
    image: "/images/task-management-app/screen2.png", // Recommended image size 234x480
  },
];

const AppScreens: React.FC = () => {
  return (
    <>
      <div id="screens" className="pt-[50px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px] relative before:content-[''] before:bg-[#F9F3EF] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[35%]">
        <div className="container">
          <div
            className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <h6 className="text-primary-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              app screens
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              A great Task Management App is the ability to customize your
              workflow
            </h2>
          </div>

          {screenData && (
            <Swiper
              spaceBetween={35}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="tm-app-screens-slider"

              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="false"
            >
              {screenData &&
                screenData.map((value, i) => (
                  <SwiperSlide key={i} className="text-center">
                    <Image
                      src={value.image}
                      alt="Screen"
                      width={234}
                      height={480}
                      className="inline-block"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default AppScreens;
