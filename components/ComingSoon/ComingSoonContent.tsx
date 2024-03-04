"use client";

import React from "react";
import Image from "next/image";

import logo from "/public/images/white-logo.png";
import shapeImg1 from "/public/images/shape1.png";
import shapeImg2 from "/public/images/shape2.png";

// Social Links
const socialLinksData = [
  {
    id: "1",
    icon: "flaticon-facebook",
    link: "https://www.facebook.com/",
  },
  {
    id: "2",
    icon: "flaticon-twitter",
    link: "https://www.twitter.com/",
  },
  {
    id: "3",
    icon: "flaticon-linkedin",
    link: "https://www.linkedin.com/",
  },
  {
    id: "4",
    icon: "flaticon-instagram",
    link: "https://www.instagram.com/",
  },
  {
    id: "5",
    icon: "flaticon-tik-tok",
    link: "https://www.tiktok.com/en/",
  },
];

const ComingSoonContent: React.FC = () => {
  return (
    <>
      <div
        className="relative z-[9999999] h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5"
        style={{
          backgroundImage: "url(/images/coming-soon.jpg)",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 rtl:right-0 bg-gray-900 opacity-75"></div>

        <div className="z-50 flex flex-col justify-center text-white w-full h-screen">
          <div className="mb-[30px]">
            <Image src={logo} alt="Plama" className="inline-block" />
          </div>

          <h1 className="text-white text-[30px] md:text-[40px]">
            We Are Launching Soon!
          </h1>
          <p className="text-white text-[18px]">Stay tuned for something amazing!</p>

          <div className="mt-[30px] md:mt-[40px] lg:mt-[50px] xllg:mt-[60px]">
            <form className="w-full max-w-xl mx-auto">
              <div className="flex items-center border-b border-indigo-500 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-white placeholder-[#fff] mr-3 py-1 leading-tight focus:outline-none"
                  type="email"
                  placeholder="Your email"
                  aria-label="Full name"
                />
                <button
                  className="flex-shrink-0 py-[10px] px-[20px] inline-block rounded-[6px] bg-primary-color text-white font-semibold text-[15px] transition duration-500 ease-in-out hover:bg-black-color"

                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="mt-[30px] text-center">
            {socialLinksData && (
              <ul
                className="space-x-[10px] rtl:space-x-reverse"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-once="false"
              >
                {socialLinksData &&
                  socialLinksData.map((value, i) => (
                    <li className="inline-block" key={i}>
                      <a
                        href={value.link}
                        target="_blank"
                        className="
                      bg-[#384179]
                        w-[30px]
                        h-[30px]
                        leading-[30px]
                        text-center
                        rounded-full
                        text-[14px]
                        text-[#BFC3E1]
                        inline-block
                        transition duration-500 ease-in-out
                        hover:bg-primary-color
                        hover:text-white
                      "
                      >
                        <i className={value.icon}></i>
                      </a>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>

        {/* Shape Image */}
        <Image
          src={shapeImg1}
          alt="shape"
          className="absolute bottom-0 left-0 rtl:right-0 max-w-[120px] lg:max-w-[150px] xl:max-w-[200px] 2xl:max-w-[250px] hidden sm:block"
        />
        <Image
          src={shapeImg2}
          alt="shape"
          className="absolute top-0 right-0 max-w-[120px] lg:max-w-[150px] xl:max-w-[200px] 2xl:max-w-[250px] hidden sm:block"
        />            
      </div>
    </>
  );
};

export default ComingSoonContent;
