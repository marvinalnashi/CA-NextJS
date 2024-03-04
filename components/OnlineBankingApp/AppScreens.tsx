"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const screenData = [
  {
    id: "1",
    image: "/images/online-banking-app/screen1.png", // Recommended image size 1095x684
  },
  {
    id: "2",
    image: "/images/online-banking-app/screen2.png", // Recommended image size 1095x684
  },
  {
    id: "3",
    image: "/images/online-banking-app/screen3.png", // Recommended image size 1095x684
  },
  {
    id: "4",
    image: "/images/online-banking-app/screen4.png", // Recommended image size 1095x684
  },
  {
    id: "5",
    image: "/images/online-banking-app/screen5.png", // Recommended image size 1095x684
  },
];

const AppScreens: React.FC = () => {
  return (
    <>
      <div 
        id="screens" 
        className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]"
        style={{ background: 'linear-gradient(180deg, #0A65FC 0%, rgba(117, 0, 208, 0.05) 100%)' }}
      >
        <div className="container">
          <div
            className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <h6 className="text-white uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              app screens
            </h6>
            <h2 className="text-white text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              A great SaaS App is the ability to customize your workflow
            </h2>
          </div>

          {screenData && (
            <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
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
                      width={1095}
                      height={684}
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
