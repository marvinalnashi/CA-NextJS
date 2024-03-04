"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import aboutAppImg from "/public/images/expense-tracker-app/about-app.jpg";

const featuresData = [
  {
    id: "1",
    icon: "flaticon-cloud-computing",
    title: "Free Download App",
    shortText:
      "Just log in with your mail account from play store and using whatever you want for your business purpose.",
  },
  {
    id: "2",
    icon: "flaticon-translation",
    title: "Trusted and Reliable",
    shortText:
      "Just log in with your mail account from play store and using whatever you want for your business purpose.",
  },
  {
    id: "3",
    icon: "flaticon-cloud",
    title: "Cloud Storage",
    shortText:
      "Just log in with your mail account from play store and using whatever you want for your business purpose.",
  },
];

const AboutApp: React.FC = () => {
  return (
    <>
      <div id="about" className="container xl:p-0 xl:max-w-[1920px]">
        <div className="grid gap-[40px] items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
          <div className="space-y-[30px] md:space-y-[50px] lg:max-w-[630px] lg:mr-auto xl:mr-0 lg:ml-auto rtl:lg:mr-auto">
            <div
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px] mb-[20px]">
                Unlock the world of seamless money transfers App
              </h2>
              <p>
                Our Expense Tracker mobile app empowers you to gain a clear
                understanding of your financial situation. By tracking and
                categorizing your expenses, you can see exactly where your money
                is going, identify areas of overspending
              </p>
            </div>

            {featuresData && (
              <div
                className="space-y-[30px]"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="false"
              >
                {featuresData &&
                  featuresData.slice(0, 3).map((value, i) => (
                    <div className="flex space-x-[18px] rtl:space-x-reverse group" key={i}>
                      <div className="bg-[#F5F5F5] w-[60px] h-[60px] leading-[60px] rounded-full text-center shrink-0 text-primary-color text-[30px] transition duration-500 ease-in-out group-hover:bg-primary-color group-hover:text-white">
                        <i className={value.icon}></i>
                      </div>
                      <div>
                        <h3 className="text-[18px] mb-[5px]">{value.title}</h3>
                        <p>{value.shortText}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            <div
              className="space-y-[15px] sm:space-y-[0] space-x-[15px] md:space-x-[30px] rtl:space-x-reverse"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-once="false"
            >
              <Link
                href="#"
                className="py-[15px] px-[30px] inline-block rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
              >
                Get Started 7 Days Free Trial
              </Link>

              <Link
                href="#features"
                className="inline-block text-primary-color font-semibold text-[16px] md:text-[18px] underline underline-offset-1 transition duration-500 ease-in-out hover:text-black-color"
              >
                See All Features
              </Link>
            </div>
          </div>

          <div
            className="text-center"
            data-aos="fade-in"
            data-aos-delay="400"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <Image
              src={aboutAppImg}
              alt="About App"
              className="inline-block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutApp;
