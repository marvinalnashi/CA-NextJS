import Image from 'next/image'
import React, { useEffect } from 'react'

interface Item {
  id: number
  imageSrc: string
  description: string
}

interface ImagePopupProps {
  item: Item
  onClose: () => void
}

const ImagePopup: React.FC<ImagePopupProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (target.classList.contains('popup-pf')) {
        onClose()
      }
    }
    window.addEventListener('click', handleOutsideClick)
    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [onClose])
  return (
    <div className="popup-pf">
      <div className="popup-content-pf">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <Image src={item.imageSrc} width={25} height={25} alt={''} />
        {/*<img className="portfolio-card" src={item.imageSrc} alt={`Item ${item.id}`}/>*/}
        <p className="popup-text-pf">{item.description}</p>
      </div>
    </div>
  )
}

export default ImagePopup
