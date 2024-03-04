import React, { useState, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import ImagePopup from './ImagePopup'
import Image from 'next/image'
import { categories, Item, items, PortfolioItem } from '@lib/portfolioData'

declare global {
  interface HTMLElement {
    vanillaTilt?: VanillaTilt
  }
}

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  useEffect(() => {
    const tiltNodes = Array.from(document.querySelectorAll('.project-card')) as HTMLElement[]
    VanillaTilt.init(tiltNodes, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1,
    })

    return () => {
      tiltNodes.forEach((element) => {
        element.vanillaTilt?.destroy()
      })
    }
  }, [])

  const handleClick = (item: Item) => {
    setSelectedItem(item)
  }

  const handleClose = () => {
    setSelectedItem(null)
  }

  return (
    <div className="portfolio-container">
      <h1 className="title-top text-align">Projects</h1>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-align">{category}</h2>
          <div className="items-container">
            {items[category].map((item) => (
              <div key={item.id} className="project-card-container" onClick={() => handleClick(item)}>
                <div className="project-card">
                  <div className="project-content">
                    <p>{item.name}</p>
                    <Image src={item.imageSrc} width={100} height={100} alt={item.name} />
                    {/*<img src={item.imageSrc} alt={`Item ${item.id}`}/>*/}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {selectedItem && <ImagePopup item={selectedItem} onClose={handleClose} />}
    </div>
  )
}

export default Portfolio
