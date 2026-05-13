import './App.css'
import NavBar from './components/NavBar';
import ArtistList from './components/ArtistList';
import SearchBar from './components/SearchBar';
import Hero from './components/Hero';
import { useState } from 'react';

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Kurt Cobain Tribute",
      client: "Nirvana Estate",
      category: "Music",
      year: "2023",
      description: "A memorial website celebrating the life and music of Kurt Cobain"
    },
    {
      id: 2,
      name: "Soul Revival Campaign",
      client: "Amy Winehouse Foundation",
      category: "Marketing",
      year: "2022",
      description: "A global marketing campaign to celebrate the soulful music of Amy Winehouse"
    },
    {
      id: 3,
      name: "Experience Hendrix Expo",
      client: "Jimi Hendrix Estate",
      category: "Event Design",
      year: "2021",
      description: "An immersive exhibition showcasing the innovative guitar techniques of Jimi Hendrix"
    }
  ]);

  return (
    <div>
      <NavBar/>
      <Hero/>
      <ArtistList/>
      <SearchBar/>
    </div>
  );
}


export default App;