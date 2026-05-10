import './App.css'
import NavBar from './components/NavBar';
import ArtistList from './components/ArtistList';
import SearchBar from './components/SearchBar';
import Hero from './components/Hero';

function App() {
  return (
    <div className='container'>
      <NavBar/>
      <Hero/>
      <ArtistList/>
      <SearchBar/>
   </div>
  );
}


export default App;