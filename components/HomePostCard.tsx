import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import { readingTime as readingTimeHelper } from '@lib/readingTime'
import { resolveUrl } from '@utils/routing'
import { getLang, get } from '@utils/use-lang'
import { AuthorList } from '@components/AuthorList'
import { PostClass } from '@helpers/PostClass'
import { collections } from '@lib/collections'
import { GhostPostOrPage, GhostSettings } from '@lib/ghost'

interface HomePostCardProps {
  settings: GhostSettings
  post: GhostPostOrPage
  num?: number
  isHome?: boolean
  aosDelay: string // Add this line to accept aosDelay
}

export const HomePostCard = ({ settings, post, num, isHome, aosDelay }: HomePostCardProps) => {
  const { nextImages } = settings.processEnv
  const text = get(getLang(settings.lang))
  const cmsUrl = settings.url
  const collectionPath = collections.getCollectionByNode(post)
  const url = resolveUrl({ cmsUrl, collectionPath, slug: post.slug, url: post.url })
  const featImg = post.featureImage
  const readingTime = readingTimeHelper(post).replace(`min read`, text(`MIN_READ`))
  const postClass = PostClass({ tags: post.tags, isFeatured: post.featured, isImage: !!featImg })
  const large = (featImg && isHome && num !== undefined && 0 === num % 6 && `post-card-large`) || ``
  const authors = post?.authors?.filter((_, i) => (i < 2 ? true : false))

  return (
    <article
      className={`post-card ${postClass} ${large} bg-neutral-100 rounded-[10px] px-[20px] xl:px-[30px] 2xl:px-[40px] py-[40px] md:py-[50px] text-center`}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      data-aos-duration="600"
      data-aos-once="false">
      {featImg && (
        <Link legacyBehavior href={url}>
          <a className="post-card-image-link" aria-label={post.title}>
            {nextImages.feature ? (
              <div className="post-card-image">
                <Image src={featImg.url} alt={''} sizes="(max-width: 640px) 320px, (max-width: 1000px) 500px, 680px"
                       layout="fill" objectFit="cover" quality={nextImages.quality}/>
              </div>
            ) : (
              post.feature_image && <Image className="post-card-image" src={post.feature_image} alt={''}/>
            )}
          </a>
        </Link>
      )}

      <div className="post-card-content">
        <Link legacyBehavior href={url}>
          <a className="post-card-content-link">
            <header className="post-card-header">
              {post.primary_tag && <div className="post-card-primary-tag">{post.primary_tag.name}</div>}
              <h2 className="post-card-title">{post.title}</h2>
            </header>
            <section className="post-card-excerpt">
              {/* post.excerpt *is* an excerpt and does not need to be truncated any further */}
              <p>{post.excerpt}</p>
            </section>
          </a>
        </Link>

        <footer className="post-card-meta">
          <AuthorList {...{settings, authors: post.authors}} />
          <div className="post-card-byline-content">
            {post.authors && post.authors.length > 2 && <span>{text(`MULTIPLE_AUTHORS`)}</span>}
            {post.authors && post.authors.length < 3 && (
              <span>
                {authors?.map((author, i) => (
                  <div key={i}>
                    {i > 0 ? `, ` : ``}
                    <Link
                      href={resolveUrl({cmsUrl, slug: author.slug, url: author.url || undefined})}>{author.name}</Link>
                  </div>
                ))}
              </span>
            )}
            <span className="post-card-byline-date">
              <time
                dateTime={post.published_at || ''}>{dayjs(post.published_at || '').format('D MMM YYYY')}&nbsp;</time>
              <span className="bull">&bull; </span> {readingTime}
            </span>
          </div>
        </footer>
      </div>
    </article>
  )
}
