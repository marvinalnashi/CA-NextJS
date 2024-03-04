import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import React, { useCallback, useEffect, useState } from 'react'

import { Layout } from '@components/Layout'
import { HomeHeaderIndex } from '@components/HomeHeaderIndex'
import { StickyNavContainer } from '@effects/StickyNavContainer'
import { SEO } from '@meta/seo'

import { processEnv } from '@lib/processEnv'
import { getAllPosts, getAllSettings, GhostPostsOrPages, GhostSettings } from '@lib/ghost'
import { seoImage, ISeoImage } from '@meta/seoImage'

import { BodyClass } from '@helpers/BodyClass'
import VanillaTilt from 'vanilla-tilt'
import GradientBg from '@utils/gradientbg'

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
  const { settings, posts, seoImage, bodyClass } = cmsData
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, align: 'center', containScroll: 'trimSnaps' }, [
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: false }),
  ])
  const [dots, setDots] = useState<boolean[]>([])

  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla])

  const router = useRouter()

  useEffect(() => {
    const tiltNodes = Array.from(document.querySelectorAll('.home-project-card')) as HTMLElement[]
    VanillaTilt.init(tiltNodes, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    })

    if (!embla) return
    const onSelect = () => {
      setDots(embla.scrollSnapList().map((_, index) => embla.selectedScrollSnap() === index))
    }
    onSelect()
    embla.on('select', onSelect)

    return () => {
      tiltNodes.forEach((element) => {
        element.vanillaTilt?.destroy()
      })
    }
  }, [embla])

  if (router.isFallback) return <div>Loading...</div>

  const slideBackgrounds = [
    "url('https://images.unsplash.com/photo-1626021985704-5409b06084a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1592290435338-682c400cb6f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1422466654108-5e533f591881?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  ]

  const customSlideTexts = ['Your Custom Text for Slide 1', 'Your Custom Text for Slide 2', 'Your Custom Text for Slide 3']

  return (
    <>
      <SEO {...{ settings, seoImage }} />
      <StickyNavContainer
        throttle={300}
        activeClass="fixed-nav-active"
        render={(sticky) => (
          <Layout {...{ bodyClass, sticky, settings, isHome: true }} header={<HomeHeaderIndex {...{ settings }} />}>
            <div className="embla" ref={viewportRef}>
              <div className="embla__container">
                {slideBackgrounds.map((background, index) => (
                  <div key={index} className="embla__slide" style={{ backgroundImage: background, backgroundSize: 'cover' }}>
                    <h2>{customSlideTexts[index]}</h2>
                  </div>
                ))}
              </div>
              <div className="embla__dots">
                {dots.map((isActive, index) => (
                  <button key={index} className={`embla__dot ${isActive ? 'is-active' : ''}`} onClick={() => scrollTo(index)} />
                ))}
              </div>
            </div>

            <div className="gradient-bg">
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-filter">
                <defs>
                  <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                  </filter>
                </defs>
              </svg>
              <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive"></div>
              </div>
              <GradientBg />
              <div className="home-items-container">
                <div className="home-project-card-container">
                  <div className="home-project-card">
                    <div className="home-project-content">
                      <p>Test 1</p>
                    </div>
                  </div>
                </div>
                <div className="home-project-card-container">
                  <div className="home-project-card">
                    <div className="home-project-content">
                      <p>Test 1</p>
                    </div>
                  </div>
                </div>
                <div className="home-project-card-container">
                  <div className="home-project-card">
                    <div className="home-project-content">
                      <p>Test 1</p>
                    </div>
                  </div>
                </div>
                <div className="home-project-card-container">
                  <div className="home-project-card">
                    <div className="home-project-content">
                      <p>Test 1</p>
                    </div>
                  </div>
                </div>
                <div className="home-project-card-container">
                  <div className="home-project-card">
                    <div className="home-project-content">
                      <p>Test 1</p>
                    </div>
                  </div>
                </div>
                <div className="home-project-card-container">
                  <div className="home-project-card">
                    <div className="home-project-content">
                      <p>Test 1</p>
                    </div>
                  </div>
                </div>
                <div className="home-project-card-container">
                  <div className="home-project-card">
                    <div className="home-project-content">
                      <p>Test 1</p>
                    </div>
                  </div>
                </div>
                <div className="home-project-card-container">
                  <div className="home-project-card">
                    <div className="home-project-content">
                      <p>Test 1</p>
                    </div>
                  </div>
                </div>
                <div className="home-project-card-container">
                  <div className="home-project-card">
                    <div className="home-project-content">
                      <p>Test 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="parallax-container">
              <div className="parallax-section">
                <section className="section-hero">
                  <div className="hero">
                    <div className="hero-text-box">
                      <h1 className="heading-primary">
                        A healthy meal delivered to your door, every single day
                      </h1>
                      <p className="hero-description">
                        The smart 365-days-per-year food subscription that will make you eat
                        healthy again. Tailored to your personal tastes and nutritional
                        needs.
                      </p>
                      <a href="#" className="hero-btn hero-btn--fill margin-right-btn"
                      >Learn more &darr;
                      </a>
                    </div>
                    <div className="big-box">
                      <div className="small-box" style={{backgroundColor: 'rgba(0, 0, 255, 0.4)'}}>Blue</div>
                      <div className="small-box" style={{backgroundColor: 'rgba(0, 255, 0, 0.4)'}}>Green</div>
                      <div className="small-box" style={{backgroundColor: 'rgba(255, 0, 0, 0.4)'}}>Red</div>
                      <div className="small-box" style={{backgroundColor: 'rgba(255, 255, 0, 0.4)'}}>Yellow</div>
                      <div className="small-box" style={{backgroundColor: 'rgba(128, 0, 128, 0.4)'}}>Purple</div>
                      <div className="small-box" style={{backgroundColor: 'rgba(255, 165, 0, 0.4)'}}>Orange</div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="parallax-section parallax bg">
                <h1>The sound that occurs when you snap your fingers is made by your middle finger hitting your
                  palm!</h1>
              </div>
              <div className="parallax-section">
                <h1>Have a nice day!</h1>
              </div>
            </div>
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
    seoImage: await seoImage({siteUrl: settings.processEnv.siteUrl}),
    bodyClass: BodyClass({isHome: true}),
  }

  console.timeEnd('Index - getStaticProps')

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && {revalidate: processEnv.isr.revalidate}),
  }
}
