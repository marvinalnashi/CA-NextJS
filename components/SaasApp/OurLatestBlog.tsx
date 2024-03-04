import React from 'react';
import { HomePostCard } from "@components/HomePostCard";
import { GhostPostsOrPages, GhostSettings } from '@lib/ghost';

interface HomeBlogProps {
  posts: GhostPostsOrPages;
  settings: GhostSettings;
  bodyClass: string;
}

const HomeBlog: React.FC<HomeBlogProps> = ({ posts, settings, bodyClass }) => {
  return (
    <div className="inner">
      <div className="post-feed grid grid-cols-1 gap-[25px]">
        {posts.map((post, i) => (
          <HomePostCard key={post.id} settings={settings} post={post} num={i} aosDelay={`${100 * (i + 1)}`} />
        ))}
      </div>
    </div>
  );
}

export default HomeBlog;
