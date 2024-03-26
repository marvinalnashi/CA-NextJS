import React, { useState } from 'react';
import Image from 'next/image';
import { categories, Item, items } from '@lib/portfolioData';

const Filters: React.FC<{ onFilterChange: (category: string) => void; activeFilters: string[] }> = ({ onFilterChange, activeFilters }) => (
  <div className="pfBarContainer">
    <div className="pfBar">
      <div
        className={`pfBarTag ${activeFilters.includes('All') ? 'pfFiltersLiSpanActive' : ''}`}
        onClick={() => onFilterChange('All')}>
        All
      </div>
      {categories.map((category) => (
        <div
          className={`pfBarTag ${activeFilters.includes(category) ? 'pfFiltersLiSpanActive' : ''}`}
          key={category}
          onClick={() => onFilterChange(category)}>
          {category}
        </div>
      ))}
    </div>
  </div>
);

const Cards: React.FC<{ imgs: Item[]; onClick: (item: Item) => void }> = ({ imgs, onClick }) => {
  return (
    <ul className="pfUl pfGallery">
      {imgs.map((img) => (
        <li className="pfGalleryItem" key={img.id} onClick={() => onClick(img)}>
          <div className="pfInside">
            <Image className="pfInsideImg" src={img.imageSrc} alt={img.name} layout="fill" objectFit="cover" />
            <div className="pfOverlay"></div>
            <div className="pfDetails">
              <h2 className="pfDetailsH2">{img.name}</h2>
              <p className="pfDetailsP">{img.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const Popup: React.FC<{ item: Item; onClose: () => void }> = ({ item, onClose }) => (
  <div className="popupContainer">
    <div className="popupContent">
      <div className="leftHalf">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
      <div className="rightHalf">
        <button onClick={onClose}>Close</button>
        <button>Learn More</button>
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
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

  let filteredItems = activeFilters.includes('All') ?
    items :
    items.filter((item: Item) => activeFilters.includes(item.category));

  return (
    <div className="pfMt">
      <Filters onFilterChange={handleFilterChange} activeFilters={activeFilters} />
      <Cards imgs={filteredItems} onClick={handleCardClick} />
      {selectedItem && <Popup item={selectedItem} onClose={handleClosePopup} />}
    </div>
  );
};

export default Portfolio;
