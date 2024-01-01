import React from 'react';
import GradientBg from '../utils/gradientbg';
import Portfolio from '@components/Portfolio';
import { HeaderPage } from '@components/HeaderPage'

import { getAllPosts, getAllSettings, GhostSettings, GhostPostsOrPages } from '@lib/ghost'
import { getLang, get } from '@utils/use-lang'
import { BodyClass } from '@helpers/BodyClass'
import {GetStaticProps} from "next";
import {Layout} from "@components/Layout";
import Link from "next/link";
import {PostCard} from "@components/PostCard";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts({ limit: 3 })
  const settings = await getAllSettings()

  return {
    props: {
      settings,
      posts,
      bodyClass: BodyClass({}),
    },
  }
}

interface ProjectsPageProps {
  posts: GhostPostsOrPages
  settings: GhostSettings
  bodyClass: string
}

export default function ProjectsPage({ posts, settings, bodyClass }: ProjectsPageProps) {
  const projectsPageClass = 'projects-page';

  return (
    <>
      <Layout {...{ settings, bodyClass: `${bodyClass} ${projectsPageClass}` }} header={<HeaderPage {...{ settings }} />}>
        <GradientBg />
        <div className="text-container">
          Bubbles
        </div>
        <div className="gradient-bg">
          <svg xmlns="http://www.w3.org/2000/svg">
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
        </div>

        <div>
          <Portfolio />
        </div>
      </Layout>
    </>
  );
};
