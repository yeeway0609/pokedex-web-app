import Pokedex from './page/Pokedex';
import Regions from './page/Regions';
import Favorites from './page/Favorites';
import Profile from './page/Profile';

import TypeButton from './components/Button';
import NavBar from './components/NavBar';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="relative w-96 h-screen bg-white">
      <Routes>
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
