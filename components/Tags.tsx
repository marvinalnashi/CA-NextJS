import {categoriesData} from "@lib/categoriesData";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import VanillaTilt from "vanilla-tilt";

const categories: string[] = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

const Tags: React.FC = () => {

  useEffect(() => {
    const tiltNodes = Array.from(document.querySelectorAll("#tag")) as HTMLElement[];

    VanillaTilt.init(tiltNodes, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });

    // Clean up on component unmount
    return () => {
      tiltNodes.forEach((element) => {
        // @ts-ignore
        element.vanillaTilt.destroy();
      });
    };
  }, []);

  return (
    <div className="tags-container">
      <h1 className="text-align">Projects</h1>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-align">{category}</h2>
          <div className="items-container">
            {categoriesData.map((category, index) => (
              <div key={category.name} className="tags-card-container">
                  <div className="tags-content">
                    <Link key={index} href={category.url}>
                      <a id="tag">{category.name}</a>
                    </Link>
                  </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tags;
