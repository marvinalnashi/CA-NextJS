import { SiteNav } from '@components/SiteNav'
import { HomeHeaderBackground } from '@components/HomeHeaderBackground'
import { GhostSettings } from '@lib/ghost'

interface HomeHeaderIndexProps {
  settings: GhostSettings
}

export const HomeHeaderIndex = ({ settings }: HomeHeaderIndexProps) => {
  const { processEnv } = settings
  const { siteUrl } = processEnv
  return (
    <header className="site-home-header">
      <HomeHeaderBackground>
        <div className="inner">
          <SiteNav className="site-nav" {...{ siteUrl, settings }} />
        </div>
      </HomeHeaderBackground>
    </header>
  )
}
