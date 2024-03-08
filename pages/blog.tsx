import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { Layout } from '@components/Layout'
import { PostView } from '@components/PostView'
import { HeaderIndex } from '@components/HeaderIndex'
import { StickyNavContainer } from '@effects/StickyNavContainer'
import { SEO } from '@meta/seo'

import { processEnv } from '@lib/processEnv'
import { getAllPosts, getAllTagsWithNames, getAllSettings, GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '@lib/ghost'
import { seoImage, ISeoImage } from '@meta/seoImage'

import { BodyClass } from '@helpers/BodyClass'
import tags from "@components/Tags";
import {Tag} from "@pages/index";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {resolveUrl} from "@utils/routing";
import slug from "@pages/tag/[...slug]";
import {BlogHeaderIndex} from "@components/BlogHeaderIndex";

/**
 * Blog page
 *
 * Loads all posts from CMS
 *
 */

interface CmsData {
  posts: GhostPostsOrPages
  settings: GhostSettings
  seoImage: ISeoImage
  previewPosts?: GhostPostsOrPages
  prevPost?: GhostPostOrPage
  nextPost?: GhostPostOrPage
  bodyClass: string
}

interface IndexProps {
  cmsData: CmsData
}

interface BlogProps {
  tags: Tag[];
  cmsData: CmsData;
}

const Blog: React.FC<BlogProps> = ({ tags, cmsData }) => {
  const [displayedTags, setDisplayedTags] = useState<Tag[]>([]);
  const router = useRouter();

  useEffect(() => {
    setDisplayedTags(shuffleArray([...tags]).slice(0, 8));
  }, [tags]);

  const shuffleArray = (array: Tag[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (router.isFallback) return <div>Loading...</div>;

  const { settings, posts, seoImage, bodyClass } = cmsData;


  return (
    <>
          <Layout {...{bodyClass, settings, isHome: true}} header={<BlogHeaderIndex {...{settings}} />}>
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
            <PostView {...{settings, posts, isHome: true}} />
          </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let posts: GhostPostsOrPages | []
  const tags = await getAllTagsWithNames();

  console.time('Index - getStaticProps')

  try {
    settings = await getAllSettings()
    posts = await getAllPosts()
  } catch (error) {
    throw new Error('Index creation failed.')
  }

  const cmsData = {
    settings,
    posts,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
    bodyClass: BodyClass({ isHome: true }),
  }

  console.timeEnd('Index - getStaticProps')

  return {
    props: {
      cmsData,
      tags,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}

export default Blog;
