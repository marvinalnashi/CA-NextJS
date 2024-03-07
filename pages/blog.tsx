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
import React from "react";
import Link from "next/link";
import {resolveUrl} from "@utils/routing";
import slug from "@pages/tag/[...slug]";

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

// export default function Index({ cmsData }: IndexProps) {
//   const router = useRouter()
//   if (router.isFallback) return <div>Loading...</div>
//
//   const { settings, posts, seoImage, bodyClass } = cmsData
//
//   return (
//     <>
//       <SEO {...{ settings, seoImage }} />
//       <StickyNavContainer
//         throttle={300}
//         activeClass="fixed-nav-active"
//         render={(sticky) => (
//           <Layout {...{bodyClass, sticky, settings, isHome: true}} header={<HeaderIndex {...{settings}} />}>
//             <div>
//               <h2>Tags</h2>
//               <ul>
//                 {tags.map((tag: Tag) => (
//                   <li key={tag.id}>{tag.name}</li>
//                 ))}
//               </ul>
//             </div>
//             <PostView {...{settings, posts, isHome: true}} />
//           </Layout>
//         )}
//       />
//     </>
//   )
// }

const Blog: React.FC<BlogProps> = ({ tags, cmsData }) => {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  const { settings, posts, seoImage, bodyClass } = cmsData;

  return (
    <>
      <SEO {...{ settings, seoImage }} />
      <StickyNavContainer
        throttle={300}
        activeClass="fixed-nav-active"
        render={(sticky) => (
          <Layout {...{bodyClass, sticky, settings, isHome: true}} header={<HeaderIndex {...{settings}} />}>
            <div>
              <h2>Tags</h2>
              <ul>
                {tags.map((tag) => (
                  <li key={tag.id}>
                    <Link legacyBehavior href={`/tag/${tag.slug}`}>
                      <a>{tag.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <PostView {...{settings, posts, isHome: true}} />
          </Layout>
        )}
      />
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
