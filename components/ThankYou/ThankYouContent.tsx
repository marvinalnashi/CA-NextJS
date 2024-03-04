"use client";

import Link from "next/link"; 
import Image from "next/image";

import thankYou from "/public/images/thank-you.png";
import shapeImg2 from "/public/images/shape2.png";

const ThankYouContent = () => {
  return (
    <>
      <div className="bg-[#F8F6F5] text-center relative h-[100vh] max-h-[100vh] overflow-auto py-[50px] md:py-[60px] lg:py-[70px] xl:py-[80px]">
        <div className="container mx-auto">
          <Image src={thankYou} alt="Thank You" className="inline" />

          <h3 className="text-black text-[25px] lg:text-[30px] font-bold mt-[20px] mb-[15px] leading-[1.3]">
            Thank you for download the Plama!
          </h3>

          <p className="text-[14px] md:text-[15px] lg:text-[16px] md:max-w-[540px] text-[#4c4c4c] leading-[1.7] ml-auto mr-auto mb-[15px] lg:mb-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Link
            href="/"
            className="py-[15px] px-[40px] inline-block rounded-[6px] bg-primary-color text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color"
          >
            Back To Home
          </Link>
        </div>

        {/* Shape Image */}

        <Image
          src={shapeImg2}
          alt="shape"
          className="absolute top-0 right-0 max-w-[120px] lg:max-w-[150px] xl:max-w-[200px] 2xl:max-w-[250px] hidden sm:block"
        />     
      </div>
    </>
  );
};

export default ThankYouContent;
