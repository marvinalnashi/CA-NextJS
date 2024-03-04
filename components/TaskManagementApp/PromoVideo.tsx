"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import promoVideoThumb from "/public/images/promo-video-thumb.jpg";

const PromoVideo: React.FC = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);

  return (
    <>
      {/* Use here youtube Embed video link */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/kSJYu4njW8s?si=Af-uo9UkKXgl-bG7",
        ]}
      />

      <div className="container">
        <div 
          className="max-w-[1100px] mx-auto relative"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-once="false"
        >
          <Image
            src={promoVideoThumb}
            alt="Promo Video Thumb"
            className="rounded-[10px]"
          />

          <div className="absolute top-1/2 -translate-y-2/4 right-0 left-0 w-full text-center ">
            <div
              className="bg-primary-color text-white cursor-pointer w-[80px] md:w-[115px] h-[80px] md:h-[115px] mx-auto leading-[80px] md:leading-[115px] pl-[5px] rounded-full text-center text-[35px] md:text-[45px] transition duration-500 ease-in-out hover:bg-[#c4302b] hover:scale-[1.1]"
              onClick={() => setToggler(!toggler)}
            >
              <i className="flaticon-play-button"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoVideo;
