"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import appBenefitsImg from "/public/images/task-management-app/app-benefits.png";

const benefitsData = [
  {
    id: "1",
    icon: "flaticon-check-mark",
    title: "Enhanced Organization",
    shortText:
      "A task management application provides a centralized platform to organize and track all your tasks in one place.",
  },
  {
    id: "2",
    icon: "flaticon-check-mark",
    title: "Improved Productivity",
    shortText:
      "A task management application provides a centralized platform to organize and track all your tasks in one place.",
  },
  {
    id: "3",
    icon: "flaticon-check-mark",
    title: "Reduced Stress",
    shortText:
      "A task management application provides a centralized platform to organize and track all your tasks in one place.",
  },
];

const AppBenefits: React.FC = () => {
  return (
    <>
      <div id="benefits" className="py-[50px] md:py-[70px] lg:py-[100px] xl:py-[120px]">
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
                src={appBenefitsImg}
                alt="About App"
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
                <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px] mb-[20px]">
                  Task by task, step by step, success is within reach
                </h2>
                <p>
                  A task management application provides a centralized platform
                  to organize and track all your tasks in one place. It helps
                  you prioritize, categorize, and allocate resources
                  efficiently, ensuring nothing falls through the cracks.
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
                      <div className="flex space-x-[18px] rtl:space-x-reverse group" key={i}>
                        <div className="bg-[#D4EDFF] w-[60px] h-[60px] leading-[60px] rounded-full text-center shrink-0 text-primary-color text-[30px] transition duration-500 ease-in-out group-hover:bg-primary-color group-hover:text-white">
                          <i className={value.icon}></i>
                        </div>

                        <div>
                          <h3 className="text-[18px] mb-[5px]">
                            {value.title}
                          </h3>
                          <p>{value.shortText}</p>
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
                  className="py-[15px] px-[30px] inline-block rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
                >
                  Get Started 7 Days Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBenefits;
