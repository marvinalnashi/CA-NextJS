import React from 'react'
import { HomePostCard } from '@components/HomePostCard'
import { GhostPostsOrPages, GhostSettings } from '@lib/ghost'
import Link from 'next/link'

export interface HomeBlogProps {
  posts: GhostPostsOrPages
  settings: GhostSettings
  bodyClass: string
}

const HomeBlog: React.FC<HomeBlogProps> = ({ posts, settings, bodyClass }) => {
  return (
    <div>
      <div className="container">
        <div className="grid gap-[20px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <HomePostCard key={post.id} settings={settings} post={post} num={i} aosDelay={`${100 * (i + 1)}`}/>
          ))}
        </div>
        <div className="text-center mt-[30px] md:mt-[40px]" data-aos="fade-in" data-aos-delay="100"
             data-aos-duration="600" data-aos-once="false">
          <Link
            href="/blog"
            className="blog-btn-margin py-[15px] px-[30px] inline-block rounded-[6px] bg-primary text-white font-semibold text-[16px] md:text-[18px] transition duration-500 ease-in-out hover:bg-black-color hover:text-white"
          >
            See All News
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeBlog
