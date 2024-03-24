import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { categories, Item, items } from '@lib/portfolioData'

const Filters: React.FC<{ onFilterChange: (category: string) => void; activeFilters: string[] }> = ({ onFilterChange, activeFilters }) => (
  <div className="pfForm">
    <ul className="pfUl">
      {/* Ensure "All" button functionality */}
      <li
        className={`filterButton ${activeFilters.includes('All') ? 'active' : ''}`}
        onClick={() => onFilterChange('All')}>
        All
      </li>
      {categories.map((category) => (
        <li
          className={`filterButton ${activeFilters.includes(category) ? 'active' : ''}`}
          key={category}
          onClick={() => onFilterChange(category)}>
          {category}
        </li>
      ))}
    </ul>
  </div>
);

// Cards Component for displaying portfolio cards
const Cards: React.FC<{ imgs: Item[]; onClick: (item: Item) => void }> = ({ imgs, onClick }) => (
  <ul className="cardsContainer"> {/* Changed className to maintain responsiveness */}
    {imgs.map((img) => (
      <li className="cardItem" key={img.id} onClick={() => onClick(img)}> {/* Changed className for cards */}
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
  // Initially, all categories are active including "All"
  const [activeFilters, setActiveFilters] = useState<string[]>(['All']);

  const handleCardClick = (item: Item) => setSelectedItem(item);
  const handleClosePopup = () => setSelectedItem(null);

  const handleFilterChange = (category: string) => {
    if (category === 'All') {
      setActiveFilters(['All']);
    } else {
      const newFilters = activeFilters.includes(category) ?
        activeFilters.filter(c => c !== category && c !== 'All') :
        [...activeFilters.filter(c => c !== 'All'), category];
      setActiveFilters(newFilters.length > 0 ? newFilters : ['All']);
    }
  };

  // Dynamically filter items based on active filters
  let filteredItems = activeFilters.includes('All') ?
    Object.values(items).flat() :
    Object.entries(items).reduce((acc: Item[], [key, value]) => {
      if (activeFilters.includes(key)) {
        return [...acc, ...value];
      }
      return acc;
    }, []);

  return (
    <div className="pfMt">
      <Filters onFilterChange={handleFilterChange} activeFilters={activeFilters} />
      <Cards imgs={filteredItems} onClick={handleCardClick} />
      {selectedItem && <Popup item={selectedItem} onClose={handleClosePopup} />}
    </div>
  );
};

export default Portfolio;
