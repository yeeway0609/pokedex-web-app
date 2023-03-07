import { Routes, Route, Link } from 'react-router-dom';
import Pokedex from '@/page/Pokedex';
import Regions from '@/page/Regions';
import Favorites from '@/page/Favorites';
import Profile from '@/page/Profile';
import PokemonInfo from '@/page/PokemonInfo';
import NavBar from '@/components/NavBar';

function App() {
  return (
    <div className="h-screen w-96 bg-white">
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:pokemonName" element={<PokemonInfo />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
