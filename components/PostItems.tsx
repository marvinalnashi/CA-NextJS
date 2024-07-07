import { PostCard } from '@components/PostCard';
import { GhostPostsOrPages, GhostSettings, GhostPostOrPage } from '@lib/ghost';
import styles from './PostItems.module.css';

interface PostItemsProps {
  settings: GhostSettings;
  posts: GhostPostsOrPages;
  isHome?: boolean;
}

const tagLimits: { [key: string]: number } = {
  "Parent Tag 2": 5,
  "Parent Tag 14": 3,
  "Parent Tag 5": 4,
};

export const PostItems = ({ settings, posts, isHome }: PostItemsProps) => {
  const tagsToGroupBy = ["Parent Tag 2", "Parent Tag 14", "Parent Tag 5"];

  const categorizedPosts = tagsToGroupBy.map((tag) => ({
    tag,
    posts: posts
      .filter((post: GhostPostOrPage) =>
        post.tags?.some((postTag) => postTag.name === tag)
      )
      .slice(0, tagLimits[tag]),
  }));

  const renderMasonrySection = (posts: GhostPostOrPage[], layout: string) => (
    <div className={styles[layout]}>
      {posts.map((post, i) => (
        <PostCard key={i} {...{ settings, post, isHome, num: i }} />
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      {isHome && categorizedPosts.map((category, index) => (
        <div key={index}>
          {category.posts.length > 0 ? (
            renderMasonrySection(category.posts, 'masonryLayout')
          ) : (
            <p>No posts available for this tag.</p>
          )}
        </div>
      ))}
      <div>
        {renderMasonrySection(posts as GhostPostOrPage[], 'masonryLayout')}
      </div>
    </div>
  );
};
