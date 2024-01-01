import React from 'react';

interface Item {
  id: number;
  imageSrc: string;
  description: string;
}

interface ImagePopupProps {
  item: Item;
  onClose: () => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ item, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <img src={item.imageSrc} alt={`Item ${item.id}`} />
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default ImagePopup;
