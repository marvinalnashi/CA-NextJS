'use client'

import React from 'react'

const featuresData = [
  {
    id: '1',
    icon: 'flaticon-smartphone',
    title: 'User Friendly',
    shortText: 'Introducing our revolutionary SaaS App, designed to unlock your business potential and propel you towards success. With its powerful features',
    aosDelay: '100',
  },
  {
    id: '2',
    icon: 'flaticon-trophy',
    title: 'Award Winning App',
    shortText: 'Introducing our revolutionary SaaS App, designed to unlock your business potential and propel you towards success. With its powerful features',
    aosDelay: '200',
  },
  {
    id: '3',
    icon: 'flaticon-refresh',
    title: 'Lifetime Update',
    shortText: 'Introducing our revolutionary SaaS App, designed to unlock your business potential and propel you towards success. With its powerful features',
    aosDelay: '300',
  },
]

const Features: React.FC = () => {
  return (
    <>
      {featuresData && (
        <div>
          <div className="container">
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuresData &&
                featuresData.map((value, i) => (
                  <div
                    className="bg-neutral-100 rounded-[10px] px-[20px] xl:px-[30px] 2xl:px-[40px] py-[40px] md:py-[50px] text-center"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="false"
                    key={i}
                  >
                    <div
                      className="w-[120px] h-[120px] mx-auto leading-[120px] text-[64px] text-white text-center rounded-full mb-[25px]"
                      style={{
                        background: 'linear-gradient(180deg, #A673EE 0%, #7497FF 100%)',
                      }}
                    >
                      <i className={value.icon} />
                    </div>
                    <h3 className="mb-[15px] text-[22px] md:text-[24px]">{value.title}</h3>
                    <p>{value.shortText}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Features
