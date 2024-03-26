import React, { useState } from 'react';
import Image from 'next/image';
import { categories, Item, items } from '@lib/portfolioData';
import { AnimatePresence, motion } from 'framer-motion';

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
      <AnimatePresence>
        {imgs.map((img) => (
          <motion.li
            key={img.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            layout
            className="pfGalleryItem"
            onClick={() => onClick(img)}
          >
            <div className="pfInside">
              <img src={img.imageSrc} alt={img.name} className="pfInsideImg" />
              <div className="pfOverlay"></div>
              <div className="pfDetails">
                <h2 className="pfDetailsH2">{img.name}</h2>
                <p className="pfDetailsP">{img.description}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

const Popup: React.FC<{ item: Item; onClose: () => void }> = ({ item, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="popupContainer"
      onClick={onClose}
    >
      <div className="popupContent" onClick={(e) => e.stopPropagation()}>
        <div className="leftHalf">
          <Image src={item.secondaryImageSrc} alt={item.name} width={500} height={500} />
          <h2>{item.name}</h2>
        </div>
        <div className="rightHalf">
          <p>{item.description}</p>
          <button onClick={onClose}>Close</button>
          <a href={item.learnMoreUrl} target="_blank" rel="noopener noreferrer"><button>Learn More</button></a>
        </div>
      </div>
    </motion.div>
  );
};

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
      <AnimatePresence>
        {selectedItem && <Popup item={selectedItem} onClose={() => setSelectedItem(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
