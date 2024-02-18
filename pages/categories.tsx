import React from 'react'
import { HeaderPage } from '@components/HeaderPage'

import { getAllPosts, getAllSettings, GhostSettings, GhostPostsOrPages } from '@lib/ghost'
import { BodyClass } from '@helpers/BodyClass'
import { GetStaticProps } from 'next'
import { Layout } from '@components/Layout'
import Tags from '@components/Tags'

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

interface CategoriesPageProps {
  posts: GhostPostsOrPages
  settings: GhostSettings
  bodyClass: string
}

export default function ProjectsPage({ posts, settings, bodyClass }: CategoriesPageProps) {
  const categoriesPageClass = 'categories-page'

  return (
    <>
      <Layout {...{ settings, bodyClass: `${bodyClass} ${categoriesPageClass}` }} header={<HeaderPage {...{ settings }} />}>
        <div className="pt">
          <Tags />
        </div>
      </Layout>
    </>
  )
}
