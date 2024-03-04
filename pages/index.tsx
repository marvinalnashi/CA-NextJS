import { GetStaticProps } from 'next'
import React from 'react'
import { useRouter } from 'next/router'

import { Layout } from '@components/Layout'
import { HomeHeaderIndex } from '@components/HomeHeaderIndex'
import { StickyNavContainer } from '@effects/StickyNavContainer'
import { SEO } from '@meta/seo'
import {getAllPosts, getAllSettings, getPostsByTag, GhostPostsOrPages, GhostSettings} from '@lib/ghost'
import { seoImage, ISeoImage } from '@meta/seoImage'
import { BodyClass } from '@helpers/BodyClass'
import Navbar from '@components/SaasApp/Navbar'
import HeroBanner from '@components/SaasApp/HeroBanner'
import Partner from '@components/SaasApp/Partner'
import Features from '@components/SaasApp/Features'
import AboutApp from '@components/SaasApp/AboutApp'
import PromoVideo from '@components/SaasApp/PromoVideo'
import KeyFeatures from '@components/SaasApp/KeyFeatures'
import AppScreens from '@components/SaasApp/AppScreens'
import Integrations from '@components/SaasApp/Integrations'
import AppDownload from '@components/SaasApp/AppDownload'
import PricingTable from '@components/SaasApp/PricingTable'
import Testimonials from '@components/SaasApp/Testimonials'
import OurLatestBlog from '@components/SaasApp/OurLatestBlog'
import Newsletter from '@components/SaasApp/Newsletter'
import Footer from '@components/SaasApp/Footer'
import HomeBlog, { HomeBlogProps } from "@components/SaasApp/OurLatestBlog";
import { processEnv } from '@lib/processEnv'

interface CmsData {
  posts: GhostPostsOrPages
  settings: GhostSettings
  seoImage: ISeoImage
  bodyClass: string
}

// Extending IndexProps with HomeBlogProps
interface IndexProps extends HomeBlogProps {
  cmsData: CmsData
}

export default function Index({ cmsData, settings, posts, bodyClass }: IndexProps) {
  return (
    <>
      <SEO {...{ settings: cmsData.settings, seoImage: cmsData.seoImage }} />
      <StickyNavContainer
        throttle={300}
        activeClass="fixed-nav-active"
        render={(sticky) => (
          <Layout {...{ bodyClass: cmsData.bodyClass, sticky, settings: cmsData.settings, isHome: true }} header={<HomeHeaderIndex {...{ settings: cmsData.settings }} />}>
            <Navbar />
            <HeroBanner />
            <Partner />
            <Features />
            <AboutApp />
            <PromoVideo />
            <KeyFeatures />
            <AppScreens />
            <Integrations />
            <AppDownload />
            <PricingTable />
            <Testimonials />
            <OurLatestBlog settings={settings} posts={posts} bodyClass={bodyClass} />
            <Newsletter />
            <Footer />
          </Layout>
        )}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  let settings, posts: GhostPostsOrPages | [], specificPosts: GhostPostsOrPages | []

  console.time('Index - getStaticProps')

  try {
    settings = await getAllSettings()
    posts = await getAllPosts()
    specificPosts = await getPostsByTag('parent-tag-2') // Fetching posts by specific tag
  } catch (error) {
    console.error(error)
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
      settings,
      posts: specificPosts,
      bodyClass: BodyClass({}),
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }),
  }
}
