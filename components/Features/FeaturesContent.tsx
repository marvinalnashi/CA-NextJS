"use client";

import React from "react";

const featuresData = [
  {
    id: "1",
    icon: "flaticon-task",
    title: "Task Planning",
    shortText:
      "Effective task management starts with appropriate planning. Depending on the budget, resources, scope, and timeline; efficient task planning requires",
  },
  {
    id: "2",
    icon: "flaticon-planning",
    title: "Task Scheduling",
    shortText:
      "Effective task management starts with appropriate planning. Depending on the budget, resources, scope, and timeline; efficient task planning requires",
  },
  {
    id: "3",
    icon: "flaticon-refresh",
    title: "Recurring Tasks",
    shortText:
      "Effective task management starts with appropriate planning. Depending on the budget, resources, scope, and timeline; efficient task planning requires",
  },
  {
    id: "4",
    icon: "flaticon-completed-task",
    title: "Task Tracking",
    shortText:
      "Effective task management starts with appropriate planning. Depending on the budget, resources, scope, and timeline; efficient task planning requires",
  },
  {
    id: "5",
    icon: "flaticon-time-tracking",
    title: "Time Tracking",
    shortText:
      "Effective task management starts with appropriate planning. Depending on the budget, resources, scope, and timeline; efficient task planning requires",
  },
  {
    id: "6",
    icon: "flaticon-third-party",
    title: "Third-Party Integrations",
    shortText:
      "Effective task management starts with appropriate planning. Depending on the budget, resources, scope, and timeline; efficient task planning requires",
  },
  {
    id: "7",
    icon: "flaticon-view",
    title: "High Resolution",
    shortText:
      "Effective task management starts with appropriate planning. Depending on the budget, resources, scope, and timeline; efficient task planning requires",
  },
  {
    id: "8",
    icon: "flaticon-layers",
    title: "Retina Ready Screen",
    shortText:
      "Effective task management starts with appropriate planning. Depending on the budget, resources, scope, and timeline; efficient task planning requires",
  },
  {
    id: "9",
    icon: "flaticon-edit",
    title: "Easy Editable Data",
    shortText:
      "Effective task management starts with appropriate planning. Depending on the budget, resources, scope, and timeline; efficient task planning requires",
  },
  {
    id: "10",
    icon: "flaticon-verified",
    title: "Fully Secured",
    shortText:
    "Effective task management starts with appropriate planning. Depending on the budget, resources, scope, and timeline; efficient task planning requires",
  },
  {
    id: "11",
    icon: "flaticon-cloud-storage",
    title: "Cloud Storage",
    shortText:
    "Effective task management starts with appropriate planning. Depending on the budget, resources, scope, and timeline; efficient task planning requires",
  },
  {
    id: "12",
    icon: "flaticon-diamond",
    title: "Responsive Ready",
    shortText:
    "Effective task management starts with appropriate planning. Depending on the budget, resources, scope, and timeline; efficient task planning requires",
  },
];

const FeaturesContent: React.FC = () => {
  return (
    <>
      <div id="features" className="py-[50px] md:py-[80px] lg:py-[100px] xl:py-[120px]">
        <div className="container">
          <div className="max-w-[650px] mx-auto text-center mb-[30px] md:mb-[40px] lg:mb-[60px]">
            <h6 className="text-primary-color uppercase text-[16px] md:text-[18px] font-medium mb-[5px]">
              Features
            </h6>
            <h2 className="text-[28px] md:text-[36px] leading-[36px] md:leading-[45px]">
              A great Task Management App is the ability to customize your
              workflow
            </h2>
          </div>

          {featuresData && (
            <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {featuresData &&
                featuresData.map((value, i) => (
                  <div
                    className="bg-[#F9F3EF] rounded-[15px] p-[30px] md:p-[40px] group hover:bg-primary-color"
                    key={i}
                  >
                    <div className="bg-[#D4EDFF] text-primary-color w-[70px] h-[70px] leading-[70px] rounded-full text-center text-[40px] mb-[25px] group-hover:bg-white">
                      <i className={value.icon}></i>
                    </div>
                    <h3 className="text-[22px] md:text-[24px] mb-[15px] group-hover:text-white">
                      {value.title}
                    </h3>
                    <p className="group-hover:text-white">{value.shortText}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturesContent;
