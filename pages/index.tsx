import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

import { Layout } from '@components/Layout';
import { HomeHeaderIndex } from '@components/HomeHeaderIndex';
import { StickyNavContainer } from '@effects/StickyNavContainer';
import { SEO } from '@meta/seo';

import { processEnv } from '@lib/processEnv';
import { getAllPosts, getAllSettings, GhostPostsOrPages, GhostSettings } from '@lib/ghost';
import { seoImage, ISeoImage } from '@meta/seoImage';

import { BodyClass } from '@helpers/BodyClass';

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
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: false })]);
  const [dots, setDots] = useState<boolean[]>([]);

  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [embla]);

  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      setDots(embla.scrollSnapList().map((_, index) => embla.selectedScrollSnap() === index));
    };
    onSelect();
    embla.on('select', onSelect);
  }, [embla]);

  // Background images from Unsplash
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
          <Layout {...{ bodyClass, sticky, settings, isHome: true }} header={<HomeHeaderIndex {...{ settings }} />}>
            <div className="embla" ref={viewportRef}>
              <div className="embla__container">
                {slideBackgrounds.map((background, index) => (
                  <div
                    key={index}
                    className="embla__slide"
                    style={{ backgroundImage: background, backgroundSize: 'cover' }}
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
            <button onClick={scrollPrev}>Prev</button>
            <button onClick={scrollNext}>Next</button>
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
    seoImage: await seoImage({ siteUrl: settings.processEnv.siteUrl }),
    bodyClass: BodyClass({ isHome: true }),
  };

  console.timeEnd('Index - getStaticProps');

  return {
    props: {
      cmsData,
    },
    ...(processEnv.isr.enable && { revalidate: processEnv.isr.revalidate }),
  };
};
