"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
 
const testimonialsData = [
  {
    id: "1",
    ratingTitle: "Excellent",
    rating: [
      {
        id: "1",
        icon: "flaticon-star",
      },
      {
        id: "2",
        icon: "flaticon-star",
      },
      {
        id: "3",
        icon: "flaticon-star",
      },
      {
        id: "4",
        icon: "flaticon-star",
      },
      {
        id: "5",
        icon: "flaticon-star-1",
      },
    ],
    feedbackText:
      "I was amazed by the AI content writing services provided by Alvi. As a busy entrepreneur, I often struggled to find the time to create quality content for my website. However, with their AI-powered solution, I was able to generate engaging and well-written articles in a matter of minutes.",
    image: "/images/users/user4.jpg", // Recommended image size 100x100
    name: "Jasika Maya",
    designation: "CTO at Envato",
  },
  {
    id: "2",
    ratingTitle: "Excellent",
    rating: [
      {
        id: "1",
        icon: "flaticon-star",
      },
      {
        id: "2",
        icon: "flaticon-star",
      },
      {
        id: "3",
        icon: "flaticon-star",
      },
      {
        id: "4",
        icon: "flaticon-star",
      },
      {
        id: "5",
        icon: "flaticon-star",
      },
    ],
    feedbackText:
      "I was amazed by the AI content writing services provided by Alvi. As a busy entrepreneur, I often struggled to find the time to create quality content for my website. However, with their AI-powered solution, I was able to generate engaging and well-written articles in a matter of minutes.",
    image: "/images/users/user5.jpg", // Recommended image size 100x100
    name: "James",
    designation: "React Developer",
  },
  {
    id: "3",
    ratingTitle: "Excellent",
    rating: [
      {
        id: "1",
        icon: "flaticon-star",
      },
      {
        id: "2",
        icon: "flaticon-star",
      },
      {
        id: "3",
        icon: "flaticon-star",
      },
      {
        id: "4",
        icon: "flaticon-star-1",
      },
      {
        id: "5",
        icon: "flaticon-star-1",
      },
    ],
    feedbackText:
      "I was amazed by the AI content writing services provided by Alvi. As a busy entrepreneur, I often struggled to find the time to create quality content for my website. However, with their AI-powered solution, I was able to generate engaging and well-written articles in a matter of minutes.",
    image: "/images/users/user6.jpg", // Recommended image size 100x100
    name: "Olivia",
    designation: "Vue.js Developer",
  },
  {
    id: "4",
    ratingTitle: "Excellent",
    rating: [
      {
        id: "1",
        icon: "flaticon-star",
      },
      {
        id: "2",
        icon: "flaticon-star",
      },
      {
        id: "3",
        icon: "flaticon-star",
      },
      {
        id: "4",
        icon: "flaticon-star-1",
      },
      {
        id: "5",
        icon: "flaticon-star-1",
      },
    ],
    feedbackText:
      "I was amazed by the AI content writing services provided by Alvi. As a busy entrepreneur, I often struggled to find the time to create quality content for my website. However, with their AI-powered solution, I was able to generate engaging and well-written articles in a matter of minutes.",
    image: "/images/users/user7.jpg", // Recommended image size 100x100
    name: "Jammy Smith",
    designation: "QA Specialist",
  },
];

const Testimonials: React.FC = () => {
  return (
    <>
      <div
        id="testimonials"
        className="bg-[#F7F1FF] py-[50px] md:py-[70px] lg:py-[100px] xl:py-[120px]"
      >
        <div className="container">
          <div
            className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <h6 className="text-primary-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              testimonials
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              Most of our satisfied clients leave their feedback
            </h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-once="false"
          >
            {testimonialsData && (
              <Swiper
                loop={true}
                spaceBetween={24}
                navigation={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1366: {
                    slidesPerView: 3,
                  },
                }}
                modules={[Autoplay, Navigation]}
                className="tm-testimonials-slider"
              >
                {testimonialsData &&
                  testimonialsData.map((value, i) => (
                    <SwiperSlide key={i}>
                      <div className="bg-white rounded-[20px] py-[50px] md:py-[60px] px-[30px] md:px-[50px]">
                        <div className="flex items-center space-x-[10px] rtl:space-x-reverse mb-[20px] md:mb-[30px]">
                          <h5 className="text-[18px]">{value.ratingTitle}</h5>

                          {value && (
                            <div className="space-x-[2px] rtl:space-x-reverse">
                              {value.rating.map((value, i) => (
                                <div
                                  className="bg-[#00B67A] text-white text-[15px] w-[24px] h-[24px] leading-[24px] inline-block text-center"
                                  key={i}
                                >
                                  <i className={value.icon}></i>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <p>{value.feedbackText}</p>

                        <div className="flex items-center space-x-[15px] rtl:space-x-reverse mt-[20px] md:mt-[30px]">
                          <div>
                            <Image
                              src={value.image}
                              alt="user"
                              width={55}
                              height={55}
                              className="rounded-full"
                            />
                          </div>

                          <div>
                            <h3 className="font-semibold text-[18px] md:text-[20px]">
                              {value.name}
                            </h3>
                            <p className="text-[15px]">{value.designation}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
