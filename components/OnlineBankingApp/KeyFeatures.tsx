"use client";

import React from "react";
import Link from "next/link";

const featuresData = [
  {
    id: "1",
    icon: "flaticon-view",
    title: "High Resolution",
    shortText:
      "Say goodbye to complicated spreadsheets and manual calculations. With our app, budgeting becomes a breeze. Set up your budget categories",
    aosDelay: "100",
  },
  {
    id: "2",
    icon: "flaticon-layers",
    title: "Retina Ready Screen",
    shortText:
      "Say goodbye to complicated spreadsheets and manual calculations. With our app, budgeting becomes a breeze. Set up your budget categories",
    aosDelay: "200",
  },
  {
    id: "3",
    icon: "flaticon-edit",
    title: "Easy Editable Data",
    shortText:
      "Say goodbye to complicated spreadsheets and manual calculations. With our app, budgeting becomes a breeze. Set up your budget categories",
    aosDelay: "300",
  },
  {
    id: "4",
    icon: "flaticon-verified",
    title: "Fully Secured",
    shortText:
      "Say goodbye to complicated spreadsheets and manual calculations. With our app, budgeting becomes a breeze. Set up your budget categories",
    aosDelay: "400",
  },
  {
    id: "5",
    icon: "flaticon-cloud-storage",
    title: "Cloud Storage",
    shortText:
      "Say goodbye to complicated spreadsheets and manual calculations. With our app, budgeting becomes a breeze. Set up your budget categories",
    aosDelay: "500",
  },
  {
    id: "6",
    icon: "flaticon-diamond",
    title: "Responsive Ready",
    shortText:
      "Say goodbye to complicated spreadsheets and manual calculations. With our app, budgeting becomes a breeze. Set up your budget categories",
    aosDelay: "600",
  },
];

const KeyFeatures: React.FC = () => {
  return (
    <>
      <div
        id="features"
        className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]"
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
              Key Features
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              SaaS Made Simple: Drive efficiency and boost performance
            </h2>
          </div>

          {featuresData && (
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuresData &&
                featuresData.map((value, i) => (
                  <div
                    className="bg-[#F5F6F7] rounded-[15px] text-center p-[30px] md:p-[40px] group hover:bg-primary-color"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="false"
                    key={i}
                  >
                    <div 
                      className="text-white w-[75px] h-[75px] mx-auto leading-[75px] rounded-full text-center text-[40px] mb-[25px] group-hover:bg-white"
                      style={{
                        background: 'linear-gradient(180deg, #A673EE 0%, #7497FF 100%)'
                      }}
                    >
                      <i className={value.icon}></i>
                    </div>
                    <h3 className="text-[22px] md:text-[24px] mb-[15px] group-hover:text-white">
                      {value.title}
                    </h3>
                    <p className="group-hover:text-white">{value.shortText}</p>
                  </div>
                ))}
            </div>
          )}

          <div
            className="text-center mt-[30px] md:mt-[50px]"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <Link
              href="/features"
              className="py-[15px] px-[30px] inline-block rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
            >
              See All Features
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
