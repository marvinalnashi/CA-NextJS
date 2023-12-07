// components/Portfolio.tsx
import React, { useState } from 'react';
import ImagePopup from './ImagePopup'; // Create ImagePopup component separately

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
    { id: 1, imageSrc: '/images/item1.jpg', description: 'Item 1 Description' },
    // Add more items as needed
  ],
  'Category 2': [
    { id: 7, imageSrc: '/images/item7.jpg', description: 'Item 7 Description' },
    // Add more items as needed
  ],
  'Category 3': [
    { id: 13, imageSrc: '/images/item13.jpg', description: 'Item 13 Description' },
    // Add more items as needed
  ],
  'Category 4': [
    { id: 19, imageSrc: '/images/item19.jpg', description: 'Item 19 Description' },
    // Add more items as needed
  ],
};

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="items-container">
            {items[category].map((item) => (
              <PortfolioItem key={item.id} id={`item-${item.id}`} onClick={() => handleClick(item)}>
                <img src={item.imageSrc} alt={`Item ${item.id}`} />
              </PortfolioItem>
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
