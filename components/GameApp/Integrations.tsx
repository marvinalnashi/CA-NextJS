"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import appIntegrationsImg from "/public/images/app-integrations.png";

const benefitsData = [
  {
    id: "1",
    icon: "flaticon-check-mark",
    title: "Cloud Storage Integration",
    shortText:
      "A task management application provides a centralized platform to organize and track all your tasks in one place.",
  },
  {
    id: "2",
    icon: "flaticon-check-mark",
    title: "Automation and Workflow Integration",
    shortText:
      "A task management application provides a centralized platform to organize and track all your tasks in one place.",
  },
];

const Integrations: React.FC = () => {
  return (
    <>
      <div
        id="integrations"
        className="py-[50px] md:py-[70px] lg:py-[100px] xl:py-[120px]"
      >
        <div className="container">
          <div className="grid gap-[25px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <Image
                src={appIntegrationsImg}
                alt="App Integrations"
                className="inline-block"
              />
            </div>

            <div className="space-y-[30px] md:space-y-[50px]">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <h6 className="text-red-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
                  integrations
                </h6>
                <h2 className="text-[#EBEBEB] text-[28px] md:text-[36px] leading-[36px] md:leading-[45px] mb-[20px]">
                  Seamlessly integrate all your tools under the ClickUp umbrella
                </h2>
                <p className="text-[#EBEBEB]">
                  Get ready to redefine mobile gaming with our groundbreaking
                  game mobile app. We have revolutionized the gaming experience,
                  combining cutting-edge technology with seamless gameplay. Our
                  app offers a diverse collection of games meticulously
                </p>
              </div>

              {benefitsData && (
                <div
                  className="space-y-[30px]"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="600"
                  data-aos-once="false"
                >
                  {benefitsData &&
                    benefitsData.slice(0, 3).map((value, i) => (
                      <div className="flex space-x-[17px] rtl:space-x-reverse" key={i}>
                        <div className="text-center shrink-0 text-[#EBEBEB] text-[20px]">
                          <i className={value.icon}></i>
                        </div>

                        <div>
                          <h3 className="text-[#EBEBEB] text-[18px] mb-[5px]">
                            {value.title}
                          </h3>
                          <p className="text-[#EBEBEB]">{value.shortText}</p>
                        </div>
                      </div>
                    ))}
                </div>
              )}

              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
                data-aos-once="false"
              >
                <Link
                  href="#"
                  className="py-[15px] px-[30px] inline-block rounded-[6px] bg-red-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-primary-color"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrations;
