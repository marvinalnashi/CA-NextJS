import React from 'react'
import GradientBg from '../utils/gradientbg'
import Portfolio from '@components/Portfolio'
import { HeaderPage } from '@components/HeaderPage'

import { getAllPosts, getAllSettings, GhostSettings, GhostPostsOrPages } from '@lib/ghost'
import { getLang, get } from '@utils/use-lang'
import { BodyClass } from '@helpers/BodyClass'
import { GetStaticProps } from 'next'
import { Layout } from '@components/Layout'
import Link from 'next/link'
import { PostCard } from '@components/PostCard'

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
  const projectsPageClass = 'projects-page'

  return (
    <>
      <Layout {...{ settings, bodyClass: `${bodyClass} ${projectsPageClass}` }} header={<HeaderPage {...{ settings }} />}>
        <div>
          <Portfolio />
        </div>
      </Layout>
    </>
  )
}
