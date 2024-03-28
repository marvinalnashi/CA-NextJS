import Link from 'next/link'
import { ReactFragment, useState } from 'react'
import { NavItem } from '@lib/ghost'
import { categoriesData } from '@lib/categoriesData'

/**
 * Navigation component
 *
 * The Navigation component takes an array of your Ghost
 * navigation property that is fetched from the settings.
 * It differentiates between absolute (external) and relative link (internal).
 * You can pass it a custom class for your own styles, but it will always fall back
 * to a `site-nav-item` class.
 *
 */

interface NavigationProps {
  data?: NavItem[]
  navClass?: string
}

export const Navigation = ({ data, navClass }: NavigationProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <ul className="nav" role="menu">
      {data?.map((navItem, i) => {
        if (navItem.label === 'Blog') {
          return (
            <li key={i} className={`nav-${navItem.label.toLowerCase()}`} role="menuitem" onMouseLeave={() => setActiveCategory(null)}>
              <div className={navClass}>
                <Link href={navItem.url}>{navItem.label}</Link>
                {/* Dropdown menu */}
                <div className="dropdown">
                  <div className="nav-subcategory-colour categories-pane">
                    {categoriesData.map((category) => (
                      <div
                        key={category.name}
                        onMouseEnter={() => setActiveCategory(category.name)}
                      >
                        {category.name}
                      </div>
                    ))}
                  </div>
                  <div className="nav-subcategory-colour subcategories-pane">
                    {categoriesData.find((cat) => cat.name === activeCategory)?.subcategories.map((sub) => (
                      <Link legacyBehavior key={sub.name} href={sub.url} passHref>
                        <div>{sub.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        }

        return (
          <li key={i} className={`nav-${navItem.label.toLowerCase()}`} role="menuitem">
            <Link legacyBehavior href={navItem.url}><a className={navClass}>{navItem.label}</a></Link>
          </li>
        );
      })}
    </ul>
  );
};
