import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@components/Layout';
import { PostItems } from '@components/PostItems';
import { processEnv } from '@lib/processEnv';
import {
  getAllPosts,
  getAllSettings,
  getAllTagsWithNames,
  GhostPostOrPage,
  GhostPostsOrPages,
  GhostSettings
} from '@lib/ghost';
import { ISeoImage, seoImage } from '@meta/seoImage';
import { BodyClass } from '@helpers/BodyClass';
import TagsBar from '@components/TagsBar';
import { Tag } from "@pages/index";
import { BlogHeaderIndex } from "@components/BlogHeaderIndex";
import React from "react";

interface BlogProps {
  tags: Tag[];
  posts: GhostPostsOrPages;
  settings: GhostSettings;
  seoImage: ISeoImage;
  previewPosts?: GhostPostsOrPages;
  prevPost?: GhostPostOrPage;
  nextPost?: GhostPostOrPage;
  bodyClass: string;
}

export default function Blog(props: BlogProps) {
  let { tags, posts, settings, seoImage, previewPosts, prevPost, nextPost, bodyClass } = props;
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;

  return (
    <>
      <Layout {...{ bodyClass, settings, isHome: true }} header={<BlogHeaderIndex {...{ settings }} />}>
        <TagsBar tags={tags} />
        <PostItems {...{ settings, posts, isHome: true }} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let settings;
  let posts: GhostPostsOrPages | [];
  const tags = await getAllTagsWithNames();

  console.time('Index - getStaticProps');

  try {
    settings = await getAllSettings();
    posts = await getAllPosts();
  } catch (error) {
    throw new Error('Index creation failed.');
  }

  const cmsData = {
    settings,
    posts,
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
    bodyClass: BodyClass({ isHome: true }),
  };

  console.timeEnd('Index - getStaticProps');

  return {
    props: {
      cmsData,
      tags,
      settings,
      posts,
      bodyClass: BodyClass({}),
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }),
  };
};
