"use client";

import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        onClick={scrollTop}
        style={{
          display: showScroll ? "block" : "none",
        }}
        className="bg-primary text-white fixed right-0 rtl:right-auto rtl:left-0 bottom-[30px] cursor-pointer w-[40px] h-[35px] rounded-l-full rtl:rounded-l-[0] rtl:rounded-r-full text-center leading-[35px] text-[20px] z-50 hover:bg-black"
      >
        <i className="ri-arrow-up-line"></i>
      </div>
    </>
  );
};

export default BackToTop;
