"use client";

import React from "react";
import Image from "next/image";

const featuresData = [
  {
    id: "1",
    image: "/images/task-management-app/feature-icon1.png", // Recommended image size 150x130
    title: "Task Organization & Prioritization",
    shortText:
      "One of the key features of a task management app is its ability to help you organize and prioritize your tasks effectively. You can create tasks, assign due dates",
    aosDelay: "100",
  },
  {
    id: "2",
    image: "/images/task-management-app/feature-icon2.png", // Recommended image size 150x130
    title: "Collaboration & Teamwork",
    shortText:
      "One of the key features of a task management app is its ability to help you organize and prioritize your tasks effectively. You can create tasks, assign due dates",
    aosDelay: "200",
  },
  {
    id: "3",
    image: "/images/task-management-app/feature-icon3.png", // Recommended image size 150x130
    title: "Reminders & Notifications",
    shortText:
      "One of the key features of a task management app is its ability to help you organize and prioritize your tasks effectively. You can create tasks, assign due dates",
    aosDelay: "300",
  },
];

const Features: React.FC = () => {
  return (
    <>
      {featuresData && (
        <div className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
          <div className="container">
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuresData &&
                featuresData.map((value, i) => (
                  <div
                    className="group"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="false"
                    key={i}
                  >
                    <Image
                      src={value.image}
                      alt="Feature"
                      className="mb-[25px] transition duration-500 ease-in-out group-hover:scale-[1.1]"
                      width={150}
                      height={130}
                    />
                    <h3 className="mb-[15px] text-[22px] md:text-[24px]">
                      {value.title}
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Features;
