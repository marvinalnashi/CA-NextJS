"use client";

import React from "react";

const featuresData = [
  {
    id: "1",
    icon: "flaticon-smartphone",
    title: "User Frindly",
    aosDelay: "100",
  },
  {
    id: "2",
    icon: "flaticon-trophy",
    title: "Award Winning App",
    aosDelay: "200",
  },
  {
    id: "3",
    icon: "flaticon-fingerprint",
    title: "Privacy Protected",
    aosDelay: "300",
  },
  {
    id: "4",
    icon: "flaticon-refresh",
    title: "Lifetime Update",
    aosDelay: "400",
  },
  {
    id: "5",
    icon: "flaticon-support",
    title: "24/7 Support",
    aosDelay: "500",
  },
];

const Features: React.FC = () => {
  return (
    <>
      {featuresData && (
        <div className="pt-[50px] md:pt-[80px] lg:pt-[100px] xl:pt-[120px]">
          <div className="container">
            <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
              {featuresData &&
                featuresData.map((value, i) => (
                  <div
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="false"
                    key={i}
                  >
                    <div
                      className="w-[120px] h-[120px] mx-auto leading-[120px] text-[64px] text-white text-center rounded-full mb-[25px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #F2002E 0%, #7497FF 100%)",
                      }}
                    >
                      <i className={value.icon} />
                    </div>
                    <h3 className="text-[#EBEBEB] text-[20px] md:text-[22px] lg:text-[19px] xl:text-[22px] 2xl:text-[24px]">
                      {value.title}
                    </h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Features;
