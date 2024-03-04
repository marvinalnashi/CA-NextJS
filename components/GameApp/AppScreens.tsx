"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const screenData = [
  {
    id: "1",
    image: "/images/game-app/screen1.png", // Recommended image size 296x618
  },
  {
    id: "2",
    image: "/images/game-app/screen2.png", // Recommended image size 296x618
  },
  {
    id: "3",
    image: "/images/game-app/screen3.png", // Recommended image size 296x618
  },
  {
    id: "4",
    image: "/images/game-app/screen4.png", // Recommended image size 296x618
  },
  {
    id: "5",
    image: "/images/game-app/screen1.png", // Recommended image size 296x618
  },
  {
    id: "6",
    image: "/images/game-app/screen2.png", // Recommended image size 296x618
  },
];

const AppScreens: React.FC = () => {
  return (
    <>
      <div id="screens" className="bg-[#232323] py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div
            className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <h6 className="text-red-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              app screens
            </h6>
            <h2 className="text-[#EBEBEB] text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              A great Task Management App is the ability to customize your
              workflow
            </h2>
          </div>

          {screenData && (
            <Swiper
              spaceBetween={30}
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
              }}
              modules={[Autoplay, Pagination]}
              className="game-app-screens-slider"

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
                      width={296}
                      height={618}
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
