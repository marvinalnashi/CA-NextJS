import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { Layout } from '@components/Layout'
import { HomeHeaderIndex } from '@components/HomeHeaderIndex'
import { StickyNavContainer } from '@effects/StickyNavContainer'
import { SEO } from '@meta/seo'

import { processEnv } from '@lib/processEnv'
import { getAllPosts, getAllSettings, GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '@lib/ghost'
import { seoImage, ISeoImage } from '@meta/seoImage'

import { BodyClass } from '@helpers/BodyClass'

/**
 * Main index page (home page)
 */

interface CmsData {
  posts: GhostPostsOrPages
  settings: GhostSettings
  seoImage: ISeoImage
  bodyClass: string
}

interface IndexProps {
  cmsData: CmsData
}

export default function Index({ cmsData }: IndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, posts, seoImage, bodyClass } = cmsData

  return (
    <>
      <SEO {...{ settings, seoImage }} />
      <StickyNavContainer
        throttle={300}
        activeClass="fixed-nav-active"
        render={(sticky) => (
          <Layout {...{ bodyClass, sticky, settings, isHome: true }} header={<HomeHeaderIndex {...{ settings }} />}>
          </Layout>
        )}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let settings
  let posts: GhostPostsOrPages | []

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
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }),
  }
}
