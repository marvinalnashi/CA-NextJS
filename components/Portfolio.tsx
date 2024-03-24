import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { categories, Item, items } from '@lib/portfolioData'

// Filters Component
const Filters: React.FC<{ onFilterChange: (category: string) => void; activeCategories: string[] }> = ({ onFilterChange, activeCategories }) => (
  <div className="pfForm">
    <ul className="pfUl">
      <li className="pfLi" onClick={() => onFilterChange('All')} style={{ backgroundColor: activeCategories.includes('All') ? '#a8b4fc' : '#faa7b7' }}>
        <label className="pfLabel">All</label>
      </li>
      {categories.map((category) => (
        <li className="pfLi" key={category} onClick={() => onFilterChange(category)} style={{ backgroundColor: activeCategories.includes(category) ? '#a8b4fc' : '#faa7b7' }}>
          <label className="pfLabel">{category}</label>
        </li>
      ))}
    </ul>
  </div>
);

// Cards Component
const Cards: React.FC<{ imgs: Item[]; onClick: (item: Item) => void }> = ({ imgs, onClick }) => (
  <ul className="pfUl">
    {imgs.map((img) => (
      <li className="pfLi" key={img.id} onClick={() => onClick(img)}>
        <figure className="pfFigure">
          <img className="pfImg" src={img.imageSrc} alt={img.name} />
        </figure>
      </li>
    ))}
  </ul>
);

// Popup Component
const Popup: React.FC<{ item: Item; onClose: () => void }> = ({ item, onClose }) => (
  <div className="popupContainer">
    <div className="popupContent">
      <div className="leftHalf">
        <h2>{item.name}</h2>
      </div>
      <div className="rightHalf">
        <p>{item.description}</p>
        <button onClick={onClose}>Close</button>
        {/* Implement the Learn More button action */}
        <button>Learn More</button>
      </div>
    </div>
  </div>
);

// Portfolio Component
const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [activeCategories, setActiveCategories] = useState<string[]>(['All']);

  const handleCardClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  const handleFilterChange = (category: string) => {
    if (category === 'All') {
      setActiveCategories(['All']);
    } else {
      setActiveCategories(prev => {
        const newActiveCategories = prev.includes(category)
          ? prev.filter(cat => cat !== category && cat !== 'All')
          : [...prev.filter(cat => cat !== 'All'), category];
        return newActiveCategories.length ? newActiveCategories : ['All'];
      });
    }
  };

  // Filter items based on the active categories
  const filteredItems = activeCategories.includes('All')
    ? Object.values(items).flat()
    : Object.values(items).flat().filter(item => activeCategories.includes(categories.find(cat => items[cat].some(i => i.id === item.id)) || ''));

  return (
    <div>
      <Filters onFilterChange={handleFilterChange} activeCategories={activeCategories} />
      <Cards imgs={filteredItems} onClick={handleCardClick} />
      {selectedItem && <Popup item={selectedItem} onClose={handleClosePopup} />}
    </div>
  );
};

export default Portfolio;
