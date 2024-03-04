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
      <div id="integrations" className="py-[50px] md:py-[70px] lg:py-[100px] xl:py-[120px]">
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
                <h6 className="text-primary-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
                  integrations
                </h6>
                <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px] mb-[20px]">
                  Seamlessly integrate all your tools under the ClickUp umbrella
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
                      <div className="flex space-x-[17px] rtl:space-x-reverse" key={i}>
                        <div className="text-center shrink-0 text-black-color text-[20px]">
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
