'use client'

import React, { useState } from 'react'
import Monthly from './Monthly'
import Yearly from './Yearly'

const PricingTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <>
      <div id="pricing" className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px]" data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" data-aos-once="false">
            <h6 className="text-primary uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">Pricing table</h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">What does your team need? Choose your Taran plan.</h2>
          </div>

          {/* Tab menu */}
          <div className="text-center">
            <div className="bg-red-50 rounded-[30px] inline-block">
              <ul className="flex items-center justify-center">
                <li
                  onClick={() => handleTabClick(0)}
                  className={`cursor-pointer text-[16px] font-medium uppercase px-[45px] py-[10px] rounded-l-[30px] ${activeTab === 0 ? 'bg-blue-100 rounded-r-[30px]' : ''}`}
                >
                  Monthly
                </li>
                <li
                  onClick={() => handleTabClick(1)}
                  className={`cursor-pointer text-[16px] font-medium uppercase px-[45px] py-[10px] rounded-r-[30px] ${activeTab === 1 ? 'bg-blue-100 rounded-l-[30px]' : ''}`}
                >
                  Yearly
                </li>
              </ul>
            </div>
          </div>

          {/* Tab content */}
          <div>
            {activeTab === 0 && (
              <>
                <Monthly />
              </>
            )}
            {activeTab === 1 && (
              <>
                <Yearly />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingTable
