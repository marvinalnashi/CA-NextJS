"use client";

import React from "react";

const featuresData = [
  {
    id: "1",
    icon: "flaticon-secure",
    title: "Secure Encryption",
    shortText:
      "One of the top features of a reliable money transfer app is robust security measures. Look for an app that uses advanced encryption protocols",
    aosDelay: "100",
  },
  {
    id: "2",
    icon: "flaticon-credit-card",
    title: "Credit & Debit Card",
    shortText:
      "One of the top features of a reliable money transfer app is robust security measures. Look for an app that uses advanced encryption protocols",
    aosDelay: "200",
  },
  {
    id: "3",
    icon: "flaticon-bank",
    title: "Local Bank Transfer",
    shortText:
      "One of the top features of a reliable money transfer app is robust security measures. Look for an app that uses advanced encryption protocols",
    aosDelay: "300",
  },
];

const Features: React.FC = () => {
  return (
    <>
      {featuresData && (
        <div className="container">
          <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {featuresData &&
              featuresData.map((value, i) => (
                <div
                  className="bg-white rounded-[40px] py-[50px] px-[40px] group hover:bg-[#CAFFF2]"
                  data-aos="fade-down"
                  data-aos-delay={value.aosDelay}
                  data-aos-duration="600"
                  data-aos-once="false"
                  key={i}
                >
                  <div className="bg-[#CAFFF2] w-[82px] h-[82px] leading-[82px] text-[55px] text-[#00373E] text-center rounded-tl-[34px] rounded-tr-[34px] rounded-br-[34px] mb-[25px] group-hover:bg-white">
                    <i className={value.icon} />
                  </div>
                  <h3 className="mb-[15px] text-[22px] md:text-[24px]">
                    {value.title}
                  </h3>
                  <p>{value.shortText}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Features;
