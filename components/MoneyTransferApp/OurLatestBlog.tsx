"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const blogData = [
  {
    id: "1",
    image: "/images/blog/blog-post1.jpg", // Recommended image size 1270x900
    category: "Time management",
    title: "15 Time Management Tips that will Change your Life",
    previewLink: "/blog/blog-details",
    author: "Admin",
    date: "20 May, 2023",
    aosDelay: "100",
  },
  {
    id: "2",
    image: "/images/blog/blog-post2.jpg", // Recommended image size 1270x900
    category: "Time management",
    title: "11 Steps to Help College Students With Task Management System",
    previewLink: "/blog/blog-details",
    author: "Admin",
    date: "21 May, 2023",
    aosDelay: "200",
  },
  {
    id: "3",
    image: "/images/blog/blog-post3.jpg", // Recommended image size 1270x900
    category: "Customer Service",
    title: "5 Things I Learned About Task Management as a Business Leader",
    previewLink: "/blog/blog-details",
    author: "Admin",
    date: "22 May, 2023",
    aosDelay: "300",
  },
];

const OurLatestBlog: React.FC = () => {
  return (
    <>
      <div id="blog" className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div
            className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px]"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <h6 className="uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              our blog
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              Our latest insights are on top of all times
            </h2>
          </div>

          {blogData && (
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {blogData &&
                blogData.slice(0, 3).map((value, i) => (
                  <div 
                    className="bg-white rounded-[20px]"
                    data-aos="fade-down"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="false"
                    key={i}
                  >
                    <Link href={value.previewLink}>
                      <Image
                        src={value.image}
                        alt="blog"
                        className="rounded-t-[20px]"
                        width={1270}
                        height={900}
                      />
                    </Link>

                    <div className="bg-white rounded-[20px] py-[40px] px-[30px] relative mt-[-16px]">
                      <p className="uppercase text-[15px] mb-[10px]">
                        {value.category}
                      </p>

                      <h3 className="text-[20px] xl:text-[22px] leading-[32px] mb-[15px]">
                        <Link
                          href={value.previewLink}
                          className="transition duration-500 ease-in-out hover:text-primary-color"
                        >
                          {value.title}
                        </Link>
                      </h3>

                      <div className="flex items-center space-x-[15px] md:space-x-[30px] rtl:space-x-reverse">
                        <div className="flex items-center space-x-[8px] rtl:space-x-reverse">
                          <i className="flaticon-user-1"></i>
                          <p>{value.author}</p>
                        </div>

                        <div className="flex items-center space-x-[8px] rtl:space-x-reverse">
                          <i className="flaticon-calendar"></i>
                          <p>{value.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          <div 
            className="text-center mt-[30px] md:mt-[40px]"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="false"
          >
            <Link
              href="/blog"
              className="py-[15px] px-[30px] inline-block rounded-[6px] bg-[#00373E] text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-[#CAFFF2] hover:text-[#00373E]"
            >
              See All News
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurLatestBlog;
