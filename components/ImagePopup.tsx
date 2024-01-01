import React, { useEffect } from 'react';

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
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('popup')) {
        onClose();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [onClose]);

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
