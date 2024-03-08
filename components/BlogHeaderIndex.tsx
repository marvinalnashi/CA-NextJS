import Image from 'next/image'
import Link from 'next/link'

import { SiteNav } from '@components/SiteNav'
import { HeaderBackground } from '@components/HeaderBackground'
import { getLang, get } from '@utils/use-lang'
import { GhostSettings, NextImage } from '@lib/ghost'

interface BlogHeaderIndexProps {
  settings: GhostSettings
}

export const BlogHeaderIndex = ({ settings }: BlogHeaderIndexProps) => {
  const text = get(getLang(settings.lang))
  const site = settings
  const siteLogo = site.logoImage
  const coverImg = site.cover_image || ''
  const title = text(`SITE_TITLE`, site.title)

  const { processEnv } = settings

  return (
    <div className="mt-20"></div>
  )
}
