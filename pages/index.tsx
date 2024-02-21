import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import React, { useCallback, useEffect, useState } from 'react';

import { Layout } from '@components/Layout';
import { HomeHeaderIndex } from '@components/HomeHeaderIndex';
import { StickyNavContainer } from '@effects/StickyNavContainer';
import { SEO } from '@meta/seo';

import { processEnv } from '@lib/processEnv';
import { getAllPosts, getAllSettings, GhostPostsOrPages, GhostSettings } from '@lib/ghost';
import { seoImage, ISeoImage } from '@meta/seoImage';

import { BodyClass } from '@helpers/BodyClass';
import {Item, items} from "@lib/portfolioData";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";

interface CmsData {
  posts: GhostPostsOrPages;
  settings: GhostSettings;
  seoImage: ISeoImage;
  bodyClass: string;
}

interface IndexProps {
  cmsData: CmsData;
}

export default function Index({ cmsData }: IndexProps) {
  const { settings, posts, seoImage, bodyClass } = cmsData
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, align: 'center', containScroll: "trimSnaps" }, [Autoplay({ delay: 40000, stopOnInteraction: false, stopOnMouseEnter: false })]);
  const [dots, setDots] = useState<boolean[]>([]);

  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla]);

  const router = useRouter();

  useEffect(() => {
    const tiltNodes = Array.from(document.querySelectorAll('.home-project-card')) as HTMLElement[];
    VanillaTilt.init(tiltNodes, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    });

    if (!embla) return;
    const onSelect = () => {
      setDots(embla.scrollSnapList().map((_, index) => embla.selectedScrollSnap() === index));
    };
    onSelect();
    embla.on('select', onSelect);

    return () => {
      tiltNodes.forEach((element) => {
        element.vanillaTilt?.destroy();
      });
    };
    }, [embla]);

  if (router.isFallback) return <div>Loading...</div>;

  const slideBackgrounds = [
    "url('https://images.unsplash.com/photo-1626021985704-5409b06084a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1592290435338-682c400cb6f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    "url('https://images.unsplash.com/photo-1422466654108-5e533f591881?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
  ];

  const customSlideTexts = [
    "Your Custom Text for Slide 1",
    "Your Custom Text for Slide 2",
    "Your Custom Text for Slide 3",
  ];


  return (
    <>
      <SEO {...{ settings, seoImage }} />
      <StickyNavContainer
        throttle={300}
        activeClass="fixed-nav-active"
        render={(sticky) => (
          <Layout {...{bodyClass, sticky, settings, isHome: true}} header={<HomeHeaderIndex {...{settings}} />}>
            <div className="embla" ref={viewportRef}>
              <div className="embla__container">
                {slideBackgrounds.map((background, index) => (
                  <div
                    key={index}
                    className="embla__slide"
                    style={{backgroundImage: background, backgroundSize: 'cover'}}
                  >
                    <h2>{customSlideTexts[index]}</h2>
                  </div>
                ))}
              </div>
              <div className="embla__dots">
                {dots.map((isActive, index) => (
                  <button
                    key={index}
                    className={`embla__dot ${isActive ? 'is-active' : ''}`}
                    onClick={() => scrollTo(index)}
                  />
                ))}
              </div>
            </div>

            <div className="home-items-container">
              <div id="particle-container">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
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
              <div className="home-project-card-container">
                <div className="home-project-card">
                  <div className="home-project-content">
                    <p>Test 1</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="parallax-container">
              <section className="parallax-section section-image"
                       style={{backgroundImage: "url('https://images.unsplash.com/photo-1504357121897-47698286288d?ixlib=rb-0.3.5&s=29c6dcd6a6f6c6a76c101e4336ae7c2d&auto=format&fit=crop&w=2851&q=80')"}}></section>
              <section className="parallax-section section-heading">
                <h1>So green!</h1>
              </section>
              <section className="parallax-section section-text" data-bg="#c8c8bc">
                <h1>Armenian highlands</h1>
              </section>
              <section className="parallax-section section-image"
                       style={{backgroundImage: "url('https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-0.3.5&s=e2f0390d79969aaf31e155bd1f7138b0&auto=format&fit=crop&w=1275&q=80')"}}></section>
              <section className="parallax-section section-heading">
                <h1>Hot! hot! hot!</h1>
              </section>
              <section className="parallax-section section-text" data-bg="#638a87">
                <h1>Paradise on earth</h1>
              </section>
              <section className="parallax-section section-image"
                       style={{backgroundImage: "url('https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-0.3.5&s=2950e56dc2bba8a65b82f130aa4e47ea&auto=format&fit=crop&w=900&q=60')"}}></section>
              <section className="parallax-section section-heading">
                <h1>In a galaxy...</h1>
              </section>
              <section className="parallax-section section-text" data-bg="#384558">
                <h1>Far, far away...</h1>
              </section>
              <section className="parallax-section section-image"
                       style={{backgroundImage: "url('https://images.unsplash.com/photo-1538982198821-0714ff3d74ba?ixlib=rb-0.3.5&s=0550cf3351896481de327a10971739f1&auto=format&fit=crop&w=1251&q=80')"}}></section>
              <section className="parallax-section section-heading">
                <h1>Suits..</h1>
              </section>
              <section className="parallax-section section-text" data-bg="#9dbdc4">
                <h1>Up into the sky</h1>
              </section>
            </div>

          </Layout>
        )}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let settings;
  let posts: GhostPostsOrPages | [];

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
    seoImage: await seoImage({siteUrl: settings.processEnv.siteUrl}),
    bodyClass: BodyClass({isHome: true}),
  };

  console.timeEnd('Index - getStaticProps');

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && {revalidate: processEnv.isr.revalidate}),
  };
};
