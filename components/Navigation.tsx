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
  const [isHovering, setIsHovering] = useState(false);

  const items: ReactFragment[] = [];

  data?.map((navItem, i) => {
    // Dynamically add dropdown for Blog nav item
    if (navItem.label === 'Blog') {
      items.push(
        <li key={i} className={`nav-${navItem.label.toLowerCase()}`} role="menuitem"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(true)}>
          <div className={navClass}>
            <Link href={navItem.url}>{navItem.label}</Link>
            {isHovering && (
              <div className="categories-dropdown">
                <div className="categories-pane">
                  {categoriesData.map((category, index) => (
                    <div key={index} className="category">
                      {category.name}
                    </div>
                  ))}
                </div>
                <div className="subcategories-pane">
                  {categoriesData.map((category) =>
                    category.subcategories.map((sub, subIndex) => (
                      <div key={subIndex} className="subcategory">
                        {sub.name}
                      </div>
                    )),
                  )}
                </div>
              </div>
            )}
          </div>
        </li>,
      );
    } else if (navItem.url.match(/^\s?http(s?)/gi)) {
      items.push(
        <li key={i} className={`nav-${navItem.label.toLowerCase()}`} role="menuitem">
          <a className={navClass} href={navItem.url} target="_blank" rel="noopener noreferrer">
            {navItem.label}
          </a>
        </li>,
      );
    } else {
      items.push(
        <li key={i} className={`nav-${navItem.label.toLowerCase()}`} role="menuitem">
          <div className={navClass}>
            <Link href={navItem.url}>{navItem.label}</Link>
          </div>
        </li>,
      );
    }
  });

  return (
    <ul className="nav" role="menu">
      {items}
    </ul>
  );
};
