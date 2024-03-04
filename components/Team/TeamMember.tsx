"use client";

import React from "react";
import Image from "next/image";

const teamData = [
  {
    id: "1",
    image: "/images/team/team1.jpg", // Recommended image size 510x510
    socials: [
      {
        id: "1",
        icon: "flaticon-linkedin",
        link: "https://www.linkedin.com/",
      },
      {
        id: "2",
        icon: "flaticon-twitter",
        link: "https://www.twitter.com/",
      },
      {
        id: "3",
        icon: "flaticon-facebook",
        link: "https://www.facebook.com/",
      },
      {
        id: "4",
        icon: "flaticon-instagram",
        link: "https://www.instagram.com/",
      },
    ],
    name: "Anderson",
    alternativeText: "Anderson",
    designation: "CEO at Founder",
  },
  {
    id: "2",
    image: "/images/team/team2.jpg", // Recommended image size 510x510
    socials: [
      {
        id: "1",
        icon: "flaticon-linkedin",
        link: "https://www.linkedin.com/",
      },
      {
        id: "2",
        icon: "flaticon-twitter",
        link: "https://www.twitter.com/",
      },
      {
        id: "3",
        icon: "flaticon-facebook",
        link: "https://www.facebook.com/",
      },
      {
        id: "4",
        icon: "flaticon-instagram",
        link: "https://www.instagram.com/",
      },
    ],
    name: "Olivia",
    alternativeText: "Olivia",
    designation: "Manager",
  },
  {
    id: "3",
    image: "/images/team/team3.jpg", // Recommended image size 510x510
    socials: [
      {
        id: "1",
        icon: "flaticon-linkedin",
        link: "https://www.linkedin.com/",
      },
      {
        id: "2",
        icon: "flaticon-twitter",
        link: "https://www.twitter.com/",
      },
      {
        id: "3",
        icon: "flaticon-facebook",
        link: "https://www.facebook.com/",
      },
      {
        id: "4",
        icon: "flaticon-instagram",
        link: "https://www.instagram.com/",
      },
    ],
    name: "Rodriguez",
    alternativeText: "Rodriguez",
    designation: "Backend Team Lead",
  },
  {
    id: "4",
    image: "/images/team/team4.jpg", // Recommended image size 510x510
    socials: [
      {
        id: "1",
        icon: "flaticon-linkedin",
        link: "https://www.linkedin.com/",
      },
      {
        id: "2",
        icon: "flaticon-twitter",
        link: "https://www.twitter.com/",
      },
      {
        id: "3",
        icon: "flaticon-facebook",
        link: "https://www.facebook.com/",
      },
      {
        id: "4",
        icon: "flaticon-instagram",
        link: "https://www.instagram.com/",
      },
    ],
    name: "Amelia",
    alternativeText: "Amelia",
    designation: "Front-end Team Lead",
  },
  {
    id: "5",
    image: "/images/team/team5.jpg", // Recommended image size 510x510
    socials: [
      {
        id: "1",
        icon: "flaticon-linkedin",
        link: "https://www.linkedin.com/",
      },
      {
        id: "2",
        icon: "flaticon-twitter",
        link: "https://www.twitter.com/",
      },
      {
        id: "3",
        icon: "flaticon-facebook",
        link: "https://www.facebook.com/",
      },
      {
        id: "4",
        icon: "flaticon-instagram",
        link: "https://www.instagram.com/",
      },
    ],
    name: "James White",
    alternativeText: "James White",
    designation: "React JS Developer",
  },
  {
    id: "6",
    image: "/images/team/team6.jpg", // Recommended image size 510x510
    socials: [
      {
        id: "1",
        icon: "flaticon-linkedin",
        link: "https://www.linkedin.com/",
      },
      {
        id: "2",
        icon: "flaticon-twitter",
        link: "https://www.twitter.com/",
      },
      {
        id: "3",
        icon: "flaticon-facebook",
        link: "https://www.facebook.com/",
      },
      {
        id: "4",
        icon: "flaticon-instagram",
        link: "https://www.instagram.com/",
      },
    ],
    name: "Emma",
    alternativeText: "Emma",
    designation: "Marketing Manager",
  },
  {
    id: "7",
    image: "/images/team/team7.jpg", // Recommended image size 510x510
    socials: [
      {
        id: "1",
        icon: "flaticon-linkedin",
        link: "https://www.linkedin.com/",
      },
      {
        id: "2",
        icon: "flaticon-twitter",
        link: "https://www.twitter.com/",
      },
      {
        id: "3",
        icon: "flaticon-facebook",
        link: "https://www.facebook.com/",
      },
      {
        id: "4",
        icon: "flaticon-instagram",
        link: "https://www.instagram.com/",
      },
    ],
    name: "Sophia",
    alternativeText: "Sophia",
    designation: "SEO Specialist",
  },
  {
    id: "8",
    image: "/images/team/team8.jpg", // Recommended image size 510x510
    socials: [
      {
        id: "1",
        icon: "flaticon-linkedin",
        link: "https://www.linkedin.com/",
      },
      {
        id: "2",
        icon: "flaticon-twitter",
        link: "https://www.twitter.com/",
      },
      {
        id: "3",
        icon: "flaticon-facebook",
        link: "https://www.facebook.com/",
      },
      {
        id: "4",
        icon: "flaticon-instagram",
        link: "https://www.instagram.com/",
      },
    ],
    name: "Taylor",
    alternativeText: "Taylor",
    designation: "Graphics Designer",
  },
  {
    id: "9",
    image: "/images/team/team9.jpg", // Recommended image size 510x510
    socials: [
      {
        id: "1",
        icon: "flaticon-linkedin",
        link: "https://www.linkedin.com/",
      },
      {
        id: "2",
        icon: "flaticon-twitter",
        link: "https://www.twitter.com/",
      },
      {
        id: "3",
        icon: "flaticon-facebook",
        link: "https://www.facebook.com/",
      },
      {
        id: "4",
        icon: "flaticon-instagram",
        link: "https://www.instagram.com/",
      },
    ],
    name: "Chloe",
    alternativeText: "Chloe",
    designation: "QA Engineer",
  },
];

const TeamMember: React.FC = () => {
  return (
    <>
      <div className="py-[50px] md:py-[70px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          {teamData && (
            <div className="grid gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {teamData &&
                teamData.map((value, i) => (
                  <div className="bg-white text-center rounded-[20px]" key={i}>
                    <Image
                      src={value.image}
                      alt={value.alternativeText}
                      width={510}
                      height={510}
                      className="inline-block rounded-[20px] mb-[20px]"
                    />
                 
                    <h3 className="font-semibold text-[22px] md:text-[25px]">
                      {value.name}
                    </h3>
                    <p>{value.designation}</p>

                    {value && (
                      <ul className="space-x-[10px] rtl:space-x-reverse mt-[15px]">
                        {value &&
                          value.socials.map((value, i) => (
                            <li className="inline-block" key={i}>
                              <a
                                href={value.link}
                                target="_blank"
                                className="
                                bg-[#384179]
                                  w-[30px]
                                  h-[30px]
                                  leading-[30px]
                                  text-center
                                  rounded-full
                                  text-[14px]
                                  text-[#BFC3E1]
                                  inline-block
                                  transition duration-500 ease-in-out
                                  hover:bg-primary-color
                                  hover:text-white
                                "
                              >
                                <i className={value.icon}></i>
                              </a>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TeamMember;
