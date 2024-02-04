import React from 'react'

export interface Item {
  id: number
  name: string
  imageSrc: string
  description: string
}

export interface PortfolioItemProps {
  id: string
  onClick: () => void
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({ id, onClick, children }) => (
  <div key={id} className="portfolio-item" onClick={onClick}>
    {children}
  </div>
)

export const categories: string[] = ['Category 1', 'Category 2', 'Category 3', 'Category 4']

export const items: Record<string, Item[]> = {
  'Category 1': [
    { id: 1, name: 'Item 1', imageSrc: '/portfolio/item1.png', description: 'Item 1 Description' },
    { id: 2, name: 'Item 2', imageSrc: '/portfolio/item2.png', description: 'Item 2 Description' },
    { id: 3, name: 'Item 3', imageSrc: '/portfolio/item3.png', description: 'Item 3 Description' },
    { id: 4, name: 'Item 4', imageSrc: '/portfolio/item4.png', description: 'Item 4 Description' },
    { id: 5, name: 'Item 5', imageSrc: '/portfolio/item5.png', description: 'Item 5 Description' },
    { id: 6, name: 'Item 6', imageSrc: '/portfolio/item6.png', description: 'Item 6 Description' },
    { id: 7, name: 'Item 7', imageSrc: '/portfolio/item7.png', description: 'Item 7 Description' },
    { id: 8, name: 'Item 8', imageSrc: '/portfolio/item8.png', description: 'Item 8 Description' },
  ],
  'Category 2': [
    { id: 9, name: 'Item 9', imageSrc: '/portfolio/item9.png', description: 'Item 9 Description' },
    { id: 10, name: 'Item 10', imageSrc: '/portfolio/item10.png', description: 'Item 10 Description' },
    { id: 11, name: 'Item 11', imageSrc: '/portfolio/item11.png', description: 'Item 11 Description' },
    { id: 12, name: 'Item 12', imageSrc: '/portfolio/item12.png', description: 'Item 12 Description' },
  ],
  'Category 3': [
    { id: 13, name: 'Item 13', imageSrc: '/portfolio/item13.png', description: 'Item 13 Description' },
    {
      id: 14,
      name: 'Item 14',
      imageSrc: '/portfolio/item14.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales tellus a ex efficitur, quis ornare eros venenatis. Nam quis dapibus magna. Aenean eu orci sit amet magna euismod ornare quis et magna. Proin ipsum orci, congue aliquam tincidunt at, semper eget lacus. Donec imperdiet, felis pretium placerat lacinia, ante mi finibus neque, id semper neque eros at nibh. Nullam tristique feugiat urna, eu malesuada eros euismod nec. Sed posuere vitae leo sed consequat. Praesent pellentesque at quam ac fringilla. Cras nibh nibh, interdum non enim eu, dignissim dictum dolor. Cras faucibus erat neque, feugiat euismod arcu lacinia faucibus. Phasellus a lorem libero. Suspendisse enim justo, finibus ac sem at, lobortis bibendum tortor. Fusce et finibus nulla. Nulla sed malesuada diam.',
    },
  ],
  'Category 4': [
    { id: 15, name: 'Item 15', imageSrc: '/portfolio/item15.png', description: 'Item 15 Description' },
    { id: 16, name: 'Item 16', imageSrc: '/portfolio/item16.png', description: 'Item 16 Description' },
    { id: 17, name: 'Item 17', imageSrc: '/portfolio/item17.png', description: 'Item 17 Description' },
    { id: 18, name: 'Item 18', imageSrc: '/portfolio/item18.png', description: 'Item 18 Description' },
  ],
}
