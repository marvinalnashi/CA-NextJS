import {categoriesData} from "@lib/categoriesData";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import VanillaTilt from "vanilla-tilt";

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
      <h1 className="text-align">All categories</h1>
      {categoriesData.map((category) => (
        <div key={category.name}>
          <h2 className="text-align">{category.name}</h2>
          <div className="items-container">
            {category.subcategories.map((subcategory, index) => (
              <div key={subcategory.name} className="tags-card-container">
                <div className="tags-content">
                  <Link key={index} href={subcategory.url}>
                    <a id="tag" className="tag-font">{subcategory.name}</a>
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