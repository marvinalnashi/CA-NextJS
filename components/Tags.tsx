import React, { useState, useEffect } from 'react';
import {categoriesData} from "@lib/categoriesData";
import Link from "next/link";

const Tags: React.FC = () => {
  return (
    <div className="tags-container">
      {categoriesData.map((category, index) => (
        <Link key={index} href={category.url} passHref>
          <a className="tag-button">{category.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default Tags;
