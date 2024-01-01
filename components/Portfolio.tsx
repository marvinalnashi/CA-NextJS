import React, { useState, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import ImagePopup from './ImagePopup';

interface Item {
  id: number;
  imageSrc: string;
  description: string;
}

interface PortfolioItemProps {
  id: string;
  onClick: () => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ id, onClick, children }) => (
  <div key={id} className="portfolio-item" onClick={onClick}>
    {children}
  </div>
);

const categories: string[] = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

const items: Record<string, Item[]> = {
  'Category 1': [
    { id: 1, imageSrc: '/images/item1.png', description: 'Item 1 Description' },
    { id: 2, imageSrc: '/images/item2.png', description: 'Item 2 Description' },
    { id: 3, imageSrc: '/images/item3.png', description: 'Item 3 Description' },
    { id: 4, imageSrc: '/images/item4.png', description: 'Item 4 Description' },
    { id: 5, imageSrc: '/images/item5.png', description: 'Item 5 Description' },
    { id: 6, imageSrc: '/images/item6.png', description: 'Item 6 Description' },
    { id: 7, imageSrc: '/images/item7.png', description: 'Item 7 Description' },
    { id: 8, imageSrc: '/images/item8.png', description: 'Item 8 Description' },
  ],
  'Category 2': [
    { id: 9, imageSrc: '/images/item9.png', description: 'Item 9 Description' },
    { id: 10, imageSrc: '/images/item10.png', description: 'Item 10 Description' },
    { id: 11, imageSrc: '/images/item11.png', description: 'Item 11 Description' },
    { id: 12, imageSrc: '/images/item12.png', description: 'Item 12 Description' },
  ],
  'Category 3': [
    { id: 13, imageSrc: '/images/item13.png', description: 'Item 13 Description' },
    { id: 14, imageSrc: '/images/item14.png', description: 'Item 14 Description' },
  ],
  'Category 4': [
    { id: 15, imageSrc: '/images/item15.png', description: 'Item 15 Description' },
    { id: 16, imageSrc: '/images/item16.png', description: 'Item 16 Description' },
    { id: 17, imageSrc: '/images/item17.png', description: 'Item 17 Description' },
    { id: 18, imageSrc: '/images/item18.png', description: 'Item 18 Description' },
  ],
};

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  useEffect(() => {
    const tiltNodes = Array.from(document.querySelectorAll(".project-card")) as HTMLElement[];

    VanillaTilt.init(tiltNodes, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });

    // Clean up on component unmount
    return () => {
      tiltNodes.forEach((element) => {
        // @ts-ignore
        element.vanillaTilt.destroy();
      });
    };
  }, []);

  const handleClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="portfolio-container">
      <h1 className="text-align">Projects</h1>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-align">{category}</h2>
          <div className="items-container">
            {items[category].map((item) => (
              <div key={item.id} className="project-card-container">
                <div className="project-card">
                  <div className="project-content">
              <PortfolioItem key={item.id} id={`item-${item.id}`} onClick={() => handleClick(item)}>
                <img src={item.imageSrc} alt={`Item ${item.id}`} />
              </PortfolioItem>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {selectedItem && <ImagePopup item={selectedItem} onClose={handleClose} />}
    </div>
  );
};

// @ts-ignore
export default Portfolio;
