"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
 
const featuresData = [
  {
    id: "1",
    image: "/images/money-transfer-app/feature-img1.png",
    title: "Fund Transfers",
    shortText:
      "Our money transfer website is designed to simplify your financial transactions. Whether you need to send money to family abroad or make international",
    aosDelay: "100",
  },
  {
    id: "2",
    image: "/images/money-transfer-app/feature-img2.png",
    title: "Secure Authentication",
    shortText:
      "Our money transfer website is designed to simplify your financial transactions. Whether you need to send money to family abroad or make international",
    aosDelay: "200",
  },
  {
    id: "3",
    image: "/images/money-transfer-app/feature-img3.png",
    title: "Notifications and Alerts",
    shortText:
      "Our money transfer website is designed to simplify your financial transactions. Whether you need to send money to family abroad or make international",
    aosDelay: "300",
  },
  {
    id: "4",
    image: "/images/money-transfer-app/feature-img4.png",
    title: "Transaction History",
    shortText:
      "Our money transfer website is designed to simplify your financial transactions. Whether you need to send money to family abroad or make international",
    aosDelay: "400",
  },
];

const KeyFeatures: React.FC = () => {
  return (
    <>
      <div id="features" className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div 
            className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]"
            data-aos="fade-down"
            data-aos-delay='100'
            data-aos-duration="600"
            data-aos-once="false"
          >
            <h6 className="uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              Key Features
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              Say goodbye to borders, hello to instant transfers. Send money, share joy
            </h2>
          </div>

          {featuresData && (
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {featuresData &&
                featuresData.map((value, i) => (
                  <div
                    className="bg-white rounded-[15px] p-[30px] lg:p-[50px]"
                    data-aos="fade-down"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="false"
                    key={i}
                  >
                    <div className="grid gap-[30px] items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3">
                      <div className="xl:col-span-2">
                        <h3 className="text-[22px] md:text-[24px] mb-[15px]">
                          {value.title}
                        </h3>
                        <p>{value.shortText}</p>
                      </div>
                      <div>
                        <Image src={value.image} alt="feature" width={240} height={190} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          <div 
            className="text-center mt-[30px] md:mt-[50px]"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <Link
              href="/features"
              className="py-[15px] px-[30px] inline-block rounded-[6px] bg-[#00373E] text-[#FFF1CE] font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-[#CAFFF2] hover:text-[#384179]"
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
