import React from 'react';
import Link from "next/link";
import { Tag } from "@pages/index";

interface TagsBarProps {
  tags: Tag[];
}

const TagsBar: React.FC<TagsBarProps> = ({ tags }) => {
  const shuffleArray = (array: Tag[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const displayedTags = shuffleArray([...tags]).slice(0, 8);

  return (
    <div className="tags-bar-container">
      <div className="tags-bar">
        {displayedTags.map((tag) => (
          <div key={tag.id}>
            <Link legacyBehavior href={`/tag/${tag.slug}`}>
              <a className="tags-bar-tag">
                {tag.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagsBar;
