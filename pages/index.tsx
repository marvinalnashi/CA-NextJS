import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { Layout } from '@components/Layout'
import { PostView } from '@components/PostView'
import { HeaderIndex } from '@components/HeaderIndex'
import { StickyNavContainer } from '@effects/StickyNavContainer'
import { SEO } from '@meta/seo'
import React from 'react';
import Script from 'next/script'

import { processEnv } from '@lib/processEnv'
import { getAllPosts, getAllSettings, GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '@lib/ghost'
import { seoImage, ISeoImage } from '@meta/seoImage'

import { BodyClass } from '@helpers/BodyClass'

/**
 * Main index page (home page)
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

export default function Index({ cmsData }: IndexProps) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>

  const { settings, posts, seoImage, bodyClass } = cmsData

  return (
    <>

      <div>
        {/* PRELOADER */}
        <div className="preloader">
          {/* SPINNER */}
          <div className="spinner">
            <div className="bounce-1"></div>
            <div className="bounce-2"></div>
            <div className="bounce-3"></div>
          </div>
          {/* /SPINNER */}
        </div>
        {/* /PRELOADER */}

        {/* HERO */}
        <div className="hero">
          {/* FRONT CONTENT */}
          <div className="front-content">
            {/* CONTAINER MID */}
            <div className="container-mid">
              {/* ANIMATION CONTAINER */}
              <div className="animation-container animation-fade-down" data-animation-delay="0">
                <img className="img-responsive logo" src="public/ghost-icon.png" alt="image" />
              </div>
              {/* /ANIMATION CONTAINER */}
              {/* ANIMATION CONTAINER */}
              <div className="animation-container animation-fade-right" data-animation-delay="300">
                <h1>Coming Soon</h1>
              </div>
              {/* /ANIMATION CONTAINER */}
              {/* ANIMATION CONTAINER */}
              <div className="animation-container animation-fade-left" data-animation-delay="600">
                <p className="subline">This website is under construction...</p>
              </div>
              {/* /ANIMATION CONTAINER */}
              {/* ANIMATION CONTAINER */}
              <div className="animation-container animation-fade-up" data-animation-delay="900">
                <div className="open-popup">Notify Me</div>
              </div>
              {/* /ANIMATION CONTAINER */}
            </div>
            {/* /CONTAINER MID */}
            {/* FOOTER */}
            <div className="footer">
              {/* ANIMATION CONTAINER */}
              <div className="animation-container animation-fade-up" data-animation-delay="1200">
                <p>© 2017 Your Brand | Design by <a href="https://templatefoundation.com">Template Foundation</a></p>
              </div>
              {/* /ANIMATION CONTAINER */}
            </div>
            {/* /FOOTER */}
          </div>
          {/* /FRONT CONTENT */}
          {/* BACKGROUND CONTENT */}
          <div className="background-content parallax-on">
            <div className="background-overlay"></div>
            <div className="background-img layer" data-depth="0.05"></div>
          </div>
          {/* /BACKGROUND CONTENT */}
        </div>
        {/* /HERO */}
        {/* POPUP ( SUBSCRIBE ) */}
        <div className="popup">
          {/* CARD */}
          <div className="card">
            {/* CARD CLOSE BUTTON */}
            <div className="close-popup close-button"></div>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <h3>Sign Up</h3>
            <p className="subline">Signing up to our newsletter gives you exclusive access to our Website Launch!</p>
          </div>
          {/* /CARD */}
        </div>
        {/* /POPUP ( SUBSCRIBE ) */}
        <Script src="wip-main.js"></Script>
        <Script src="wip-plugins.js"></Script>
      </div>

      {/*<SEO {...{ settings, seoImage }} />*/}
      {/*<StickyNavContainer*/}
      {/*  throttle={300}*/}
      {/*  activeClass="fixed-nav-active"*/}
      {/*  render={(sticky) => (*/}
      {/*    <Layout {...{ bodyClass, sticky, settings, isHome: true }} header={<HeaderIndex {...{ settings }} />}>*/}
      {/*      <PostView {...{ settings, posts, isHome: true }} />*/}
      {/*    </Layout>*/}
      {/*  )}*/}
      {/*/>*/}
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
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }), // re-generate at most once every revalidate second
  }
}
