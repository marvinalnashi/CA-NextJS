'use client'

import React from 'react'
import Image from 'next/image'

import shapeImg1 from '/public/images/shape1.png'
import shapeImg2 from '/public/images/shape2.png'

const Newsletter: React.FC = () => {
  return (
    <>
      <div className="px-[15px] xl:px-[30px] pb-[50px] md:pb-[80px] lg:pb-[100px] xl:pb-[120px]">
        <div
          className="max-w-[1700px] mx-auto rounded-[20px] relative py-[50px] md:py-[70px] lg:py-[112px]"
          style={{
            background: 'linear-gradient(277deg, #19AFFF 17.64%, #0A65FC 76.53%)',
          }}
        >
          <div className="container">
            <div className="max-w-[872px] mx-auto text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" data-aos-once="false">
              <h6 className="text-white uppercase text-[16px] md:text-[18px] font-medium mb-[10px]">FREE TRIAL</h6>

              <h2 className="text-white text-[28px] md:text-[36px] leading-[36px] md:leading-[45px] mb-[20px] max-w-[648px] mx-auto">
                Unlock your full potential: Embrace structured task management.
              </h2>

              <p className="text-white">
                A task management application provides a centralized platform to organize and track all your tasks in one place. It helps you prioritize, categorize, and allocate
                resources efficiently, ensuring nothing falls through the cracks.
              </p>

              <div className="mt-[30px] md:mt-[50px] max-w-[620px] mx-auto">
                <form>
                  <div className="relative sm:pr-[200px]">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-white rounded-[6px] text-[15px] py-[17.2px] px-[22px] block w-full focus:outline-none placeholder-indigo-900"
                    />
                    <button
                      type="submit"
                      className="py-[15px] px-[30px] inline-block rounded-[6px] bg-black text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-primary sm:absolute top-0 right-0 mt-[20px] sm:mt-[0]"
                    >
                      Get Started Free
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Shape Image */}
          <Image src={shapeImg1} alt="shape" className="absolute bottom-0 left-0 lg:max-w-[220px] xl:max-w-[300px] 2xl:max-w-[368px] hidden lg:block" />
          <Image src={shapeImg2} alt="shape" className="absolute top-0 right-0 lg:max-w-[220px] xl:max-w-[300px] 2xl:max-w-[368px] hidden lg:block" />
        </div>
      </div>
    </>
  )
}

export default Newsletter
