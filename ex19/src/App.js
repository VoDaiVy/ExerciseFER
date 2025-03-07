import React from 'react';
import AnimalCard from './components/AnimalCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const animals = [
  {
    name: 'Lion',
    scientificName: 'Panthero leo',
    size: '140 kg',
    diet: 'meat',
    image: 'https://cdn.prod.website-files.com/655cbee32f7e5cfd123ab592/65758b7a7f832e848a4a438d_Lion-Panthera-leo.jpg',
  },
  {
    name: 'Gorilla',
    scientificName: 'Gorilla beringei',
    size: '205 kg',
    diet: 'plants, insects',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3njef6vllWuz3IeIBaLxRvNyrai4ItcPdDA&s',
  },
  {
    name: 'Zebra',
    scientificName: 'Equus quagga',
    size: '322 kg',
    diet: 'plants',
    image: 'https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2024/01/Untitled-683-x-1024-px-65-1.jpg',
  },
];

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        padding: '40px',
        minHeight: '100vh',
        background: ' #fad0c4',
      }}
    >
      {animals.map((animal, index) => (
        <AnimalCard key={index} animal={animal} />
      ))}
    </div>
  );
};

export default App;
