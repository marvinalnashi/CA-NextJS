"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavPages from "./NavPages";
import Image from "next/image";

import logo from "/public/images/logo2.png";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();

  // Sticky Navbar
  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("isSticky");
      } else {
        elementId?.classList.remove("isSticky");
      }
    });

    return () => {
      document.removeEventListener("scroll", () => {
        if (window.scrollY > 170) {
          elementId?.classList.add("isSticky");
        } else {
          elementId?.classList.remove("isSticky");
        }
      });
    };
  }, []);

  // Toggle active class
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        id="navbar"
        className="navbar-area navbar-style-two z-[2] py-[20px] lg:py-[15px] xl:py-0"
      >
        <div className="container mx-auto max-w-[1760px] xl:px-[30px]">
          <nav
            className={`navbar relative flex flex-wrap ${
              isActive ? "active" : ""
            }`}
          >
            <div className="self-center">
              <Link href="/money-transfer-app">
                <Image 
                  src={logo} 
                  className="inline md:max-w-[110px] lg:max-w-[140px]" 
                  alt="logo" 
                />
              </Link>
            </div>

            {/* Toggle button */}
            <button
              className="navbar-toggler absolute ml-auto rtl:ml-0 rtl:mr-auto right-0 rtl:right-auto rtl:left-0 top-[2px] md:hidden"
              type="button"
              onClick={handleToggleSearchModal}
            >
              <span className="burger-menu text-white cursor-pointer leading-none text-[30px]">
                <i className="ri-menu-line"></i>
              </span>
            </button>

            <div className="navbar-collapse flex self-center grow basis-auto md:space-x-[20px] lg:space-x-[50px] xl:space-x-[70px] 2xl:space-x-[100px] rtl:space-x-reverse">
              <ul className="navbar-nav self-center flex-row ml-auto rtl:ml-0 rtl:mr-auto md:flex md:space-x-[15px] lg:space-x-[25px] xl:space-x-[35px] 2xl:space-x-[50px] rtl:space-x-reverse">
                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="#home"
                    className="text-[#CBCBCB] text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-[#FBAD9C]"
                  >
                    Home
                  </Link>
                </li>

                {/* NavPages */}
                <NavPages />

                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="#about"
                    className="text-[#CBCBCB] text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-[#FBAD9C]"
                  >
                    About
                  </Link>
                </li>

                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="#features"
                    className="text-[#CBCBCB] text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-[#FBAD9C]"
                  >
                    Features
                  </Link>
                </li>

                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="#pricing"
                    className="text-[#CBCBCB] text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-[#FBAD9C]"
                  >
                    Pricing
                  </Link>
                </li>

                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="#blog"
                    className="text-[#CBCBCB] text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-[#FBAD9C]"
                  >
                    Blog
                  </Link>
                </li>

                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                  <Link
                    href="/contact/"
                    className={`text-[#CBCBCB] text-[16px] md:text-[16px] lg:text-[18px] font-medium transition-all hover:text-[#FBAD9C] ${
                      currentRoute === "/contact/" ? "text-[#FBAD9C]" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Other options */}
              <div className="other-options self-center space-x-[20px] lg:space-x-[25px] xl:space-x-[45px] rtl:space-x-reverse">
                <Link
                  href="/login"
                  className="text-[16px] md:text-[15px] lg:text-[18px] inline-block text-[#FBAD9C] font-semibold transition duration-500 ease-in-out hover:text-primary-color"
                >
                  Log In
                </Link>

                <Link
                  href="/register"
                  className="py-[10px] md:py-[8px] lg:py-[12px] xl:py-[15px] px-[20px] md:px-[15px] lg:px-[20px] xl:px-[30px] inline-block rounded-[6px] bg-[#FBAD9C] text-black-color font-semibold text-[14px] md:text-[13px] lg:text-[16px] xl:text-[18px] transition duration-500 ease-in-out hover:bg-primary-color hover:text-white"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
