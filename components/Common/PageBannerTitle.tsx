"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg1 from "/public/images/shape1.png";
import shapeImg2 from "/public/images/shape2.png";

interface PageBannerTitleProps {
  title: string;
  homeText: string;
  homeUrl: string;
}

const PageBannerTitle: React.FC<PageBannerTitleProps> = ({
  title,
  homeText,
  homeUrl,
}) => {
  return (
    <div className="bg-[#F8F6F5] relative py-[50px] md:py-[80px] lg:py-[120px]">
      <div className="container mx-auto relative">
        <div className="relative text-center">
          <h2 className="text-[25px] md:text-[35px] lg:text-[40px] xl:text-[48px] leading-[1.1] mb-[10px]">
            {title}
          </h2>

          <ul className="space-x-[25px] rtl:space-x-reverse">
            <li className="inline-block text-primary-color relative before:content-['/'] before:absolute before:right-[-17px] rtl:before:right-auto rtl:before:left-[-17px] before:top-0">
              <Link
                href={homeUrl}
                className="text-black-color hover:text-primary-color"
              >
                {homeText}
              </Link>
            </li>
            <li className="inline-block text-primary-color relative before:content-['/'] before:absolute before:right-[-17px] before:top-0 last:before:hidden">
              {title}
            </li>
          </ul>
        </div>
      </div>

      {/* Shape Images */}
      <Image
        src={shapeImg1}
        alt="shape"
        className="absolute bottom-0 left-0 rtl:right-0 max-w-[70px] md:max-w-[150px] xl:max-w-[200px] animate-pulse"
      />
      <Image
        src={shapeImg2}
        alt="shape"
        className="absolute top-0 right-0 max-w-[70px] md:max-w-[150px] xl:max-w-[200px] animate-pulse"
      />
    </div>
  );
};

export default PageBannerTitle;
