export interface Item {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  category: string;
}

export const categories: string[] = ['Nature', 'Architecture', 'Art', 'Technology'];

export const items: Item[] = [
  {
    id: '1',
    name: 'Forest Path',
    imageSrc: 'https://source.unsplash.com/random/?forest',
    description: 'A serene path through an ancient forest.',
    category: 'Nature',
  },
  {
    id: '2',
    name: 'Mountain View',
    imageSrc: 'https://source.unsplash.com/random/?mountain',
    description: 'The breathtaking view of a mountain range.',
    category: 'Nature',
  },
  {
    id: '3',
    name: 'City Skyline',
    imageSrc: 'https://source.unsplash.com/random/?city',
    description: 'The bustling life of a city captured from afar.',
    category: 'Architecture',
  },
  {
    id: '4',
    name: 'Modern Building',
    imageSrc: 'https://source.unsplash.com/random/?building',
    description: 'Innovations in architecture showcased in modern design.',
    category: 'Architecture',
  },
  {
    id: '5',
    name: 'Sculpture Art',
    imageSrc: 'https://source.unsplash.com/random/?sculpture',
    description: 'A masterpiece sculpted from marble.',
    category: 'Art',
  },
  {
    id: '6',
    name: 'Abstract Painting',
    imageSrc: 'https://source.unsplash.com/random/?abstract,painting',
    description: 'Colors and shapes collide in this abstract work.',
    category: 'Art',
  },
  {
    id: '7',
    name: 'Digital Art',
    imageSrc: 'https://source.unsplash.com/random/?digital,art',
    description: 'The fusion of technology and creativity.',
    category: 'Art',
  },
  {
    id: '8',
    name: 'Tech Gadgets',
    imageSrc: 'https://source.unsplash.com/random/?gadgets',
    description: 'The latest in technology and innovation.',
    category: 'Technology',
  },
  {
    id: '9',
    name: 'Futuristic City',
    imageSrc: 'https://source.unsplash.com/random/?futuristic,city',
    description: 'A glimpse into the cities of the future.',
    category: 'Technology',
  },
  {
    id: '10',
    name: 'River Through Mountains',
    imageSrc: 'https://source.unsplash.com/random/?river,mountain',
    description: 'Nature\'s course through the landscape.',
    category: 'Nature',
  },
  {
    id: '11',
    name: 'Seascape',
    imageSrc: 'https://source.unsplash.com/random/?sea',
    description: 'The sea, in all its majestic beauty and might.',
    category: 'Nature',
  },
  {
    id: '12',
    name: 'Urban Exploration',
    imageSrc: 'https://source.unsplash.com/random/?urban',
    description: 'Discovering the hidden gems within a concrete jungle.',
    category: 'Architecture',
  },
  {
    id: '13',
    name: 'Classic Art',
    imageSrc: 'https://source.unsplash.com/random/?classic,art',
    description: 'A dive into the art of the past centuries.',
    category: 'Art',
  },
  {
    id: '14',
    name: 'Innovative Tech',
    imageSrc: 'https://source.unsplash.com/random/?innovation,technology',
    description: 'Pushing the boundaries of what\'s possible with technology.',
    category: 'Technology',
  },
  {
    id: '15',
    name: 'Robotic Automation',
    imageSrc: 'https://source.unsplash.com/random/?robot',
    description: 'The role of robots in the future of automation.',
    category: 'Technology',
  },
];
