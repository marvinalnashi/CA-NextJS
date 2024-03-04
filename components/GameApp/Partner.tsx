"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const partnerData = [
  {
    id: "1",
    image: "/images/partner-black1.png", // Recommended image size 168x62
  },
  {
    id: "2",
    image: "/images/partner-black2.png", // Recommended image size 168x62
  },
  {
    id: "3",
    image: "/images/partner-black3.png", // Recommended image size 168x62
  },
  {
    id: "4",
    image: "/images/partner-black4.png", // Recommended image size 168x62
  },
  {
    id: "5",
    image: "/images/partner-black5.png", // Recommended image size 168x62
  },
  {
    id: "6",
    image: "/images/partner-black6.png", // Recommended image size 168x62
  },
  {
    id: "7",
    image: "/images/partner-black2.png", // Recommended image size 168x62
  },
];

const Partner: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="max-w-[450px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]">
            <h2 className="text-[#EBEBEB] text-[20px] font-medium">
              More than 2.5 million global brands trusted us
            </h2>
          </div>

          {partnerData && (
            <Swiper
              slidesPerView={1}
              spaceBetween={60}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                576: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {partnerData &&
                partnerData.map((value, i) => (
                  <SwiperSlide className="text-center" key={i}>
                    <Image
                      src={value.image}
                      alt="partner"
                      width={162}
                      height={62} 
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

export default Partner;
