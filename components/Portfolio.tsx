import React, { useEffect } from 'react';
import Image from 'next/image';

const imgs = [
  { author: "The Lazy Artist Gallery", tag: "People", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/1.jpg?raw=true" },
  { author: "Daria Shevtsova", tag: "Food", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/2.jpg?raw=true" },
  { author: "Kasuma", tag: "Animals", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/3.jpg?raw=true" },
  { author: "Dominika Roseclay", tag: "Plants", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true" },
  { author: "Scott Webb", tag: "Plants", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true" },
  { author: "Jeffrey Czum", tag: "People", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/6.jpg?raw=true" },
  { author: "Dominika Roseclay", tag: "Food", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/7.jpg?raw=true" },
  { author: "Valeria Boltneva", tag: "Animals", src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true" }
];

type Filter = {
  name: string;
  status: boolean;
};

const filters: Filter[] = [
  { name: "People", status: false },
  { name: "Animals", status: false },
  { name: "Plants", status: false },
  { name: "Food", status: false }
];

const Filters: React.FC<{ onClickAll: () => void; all: boolean; onClick: (index: number) => void; filters: Filter[] }> = ({ onClickAll, all, onClick, filters }) => (
  <div className="pfMt">
  <div className="pfForm">
    <ul className="pfUl">
      <li className="pfLi" onClick={onClickAll} style={{ backgroundColor: all ? '#a8b4fc' : '#faa7b7' }}>
        <label className="pfLabel">All</label>
      </li>
      {filters.map((filter, i) => (
        <li className="pfLi" key={i} onClick={() => onClick(i)} style={{ backgroundColor: filter.status ? '#a8b4fc' : '#faa7b7' }}>
          <label className="pfLabel">{filter.name}</label>
        </li>
      ))}
    </ul>
  </div>
  </div>
);

const Cards: React.FC<{ imgs: typeof imgs }> = ({ imgs }) => (
  <ul className="pfUl">
    {imgs.map((img, i) => (
      <li className="pfLi" key={i}>
        <figure className="pfFigure">
          <img className="pfImg" src={img.src} alt={img.author} />
          <figcaption className="pfFigcaption">
            <div>{img.author}</div>
            <span className="pfSpan">{img.tag}</span>
          </figcaption>
        </figure>
      </li>
    ))}
  </ul>
);

const Portfolio: React.FC = () => {
  const [all, setAll] = React.useState(true);
  const [selectedFilters, setSelectedFilters] = React.useState<Filter[]>(filters);

  useEffect(() => {
    // Initialization or cleanup code if necessary
  }, []);

  const handleClick = (index: number) => {
    const newFilters = selectedFilters.map((filter, i) => {
      return i === index ? { ...filter, status: !filter.status } : filter;
    });
    setSelectedFilters(newFilters);

    updateAllStatus(newFilters);
  };

  const handleAllClick = () => {
    setSelectedFilters(filters.map(filter => ({ ...filter, status: false })));
    setAll(true);
  };

  const updateAllStatus = (newFilters: Filter[]) => {
    const allFalse = newFilters.every(filter => !filter.status);
    setAll(allFalse || newFilters.every(filter => filter.status));
  };

  let filteredImgs = imgs;
  if (!all) {
    filteredImgs = imgs.filter(img => selectedFilters.some(filter => filter.status && filter.name === img.tag));
  }

  return (
    <div>
      <Filters onClickAll={handleAllClick} all={all} onClick={handleClick} filters={selectedFilters} />
      <Cards imgs={filteredImgs} />
    </div>
  );
};

export default Portfolio;
