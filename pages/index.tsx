import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Layout } from '@components/Layout'
import { HomeHeaderIndex } from '@components/HomeHeaderIndex'
import { StickyNavContainer } from '@effects/StickyNavContainer'
import { SEO } from '@meta/seo'

import { processEnv } from '@lib/processEnv'
import { getAllPosts, getAllSettings, GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '@lib/ghost'
import { seoImage, ISeoImage } from '@meta/seoImage'

import { BodyClass } from '@helpers/BodyClass'
import Slider from 'react-slick';
import {useState} from "react";

/**
 * Main index page (home page)
 */

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
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    autoplay: true,
    speed: 800,
    lazyLoad: 'progressive' as const,
    arrows: false,
    dots: true,
    afterChange: setCurrentSlide,
  };

  const { settings, posts, seoImage, bodyClass } = cmsData;

  return (
    <>
      <SEO {...{ settings, seoImage }} />
      <StickyNavContainer
        throttle={300}
        activeClass="fixed-nav-active"
        render={(sticky) => (
          <Layout {...{ bodyClass, sticky, settings, isHome: true }} header={<HomeHeaderIndex {...{ settings }} />}>
            <div className="slider stick-dots">
              <Slider {...sliderSettings}>
                {[1, 2].map((slide, index) => (
                  <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
                    <div className="slide__img">
                      <img src={`https://alexandrebuffet.fr/codepen/images/full/nature_0${slide}.jpg`} alt=""
                           className={`full-image animated ${currentSlide === index ? 'zoomInImage' : ''}`} />
                    </div>
                    <div className="slide__content">
                      <div className="slide__content--headings">
                        <h2 className={`animated ${currentSlide === index ? 'fadeInUp' : ''}`}>Slide me to the moon</h2>
                        <p className={`animated ${currentSlide === index ? 'fadeInUp' : ''}`} style={{ animationDelay: '0.3s' }}>With awesome animations</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Layout>
        )}
      />
    </>
  );
};

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
