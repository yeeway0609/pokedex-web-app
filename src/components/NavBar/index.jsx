import pokedex_1 from './pokedex_1.svg';
import pokedex_2 from './pokedex_2.svg';
import regions_1 from './regions_1.svg';
import regions_2 from './regions_2.svg';
import favorites_1 from './favorites_1.svg';
import favorites_2 from './favorites_2.svg';
import profile_1 from './profile_1.svg';
import profile_2 from './profile_2.svg';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function NavBar () {
  const [currentPage, setCurrentPage] = useState("pokedex");

  return (
    <div className="border-t-2 bottom-0 absolute h-[72px] w-full border-t-gray-1 z-0 flex justify-around">
      <div
        className="flex justify-center items-center"
        onClick={() => setCurrentPage("pokedex")}
      >
        <Link to="/pokedex">
          {currentPage === 'pokedex' ? <img src={pokedex_1} /> : <img src={pokedex_2} />}
        </Link>
      </div>
      <div
        className="flex justify-center items-center"
        onClick={() => setCurrentPage("regions")}
      >
        <Link to="/regions">
          {currentPage === 'regions' ? <img src={regions_1} /> : <img src={regions_2} />}
        </Link>
      </div>
      <div
        className="flex justify-center items-center"
        onClick={() => setCurrentPage("favorites")}
      >
        <Link to="/favorites">
          {currentPage === 'favorites' ? <img src={favorites_1} /> : <img src={favorites_2} />}
        </Link>
      </div>
      <div
        className="flex justify-center items-center"
        onClick={() => setCurrentPage("profile")}
      >
        <Link to="/profile">
          {currentPage === 'profile' ? <img src={profile_1} /> : <img src={profile_2} />}
        </Link>
      </div>
    </div>
  );
}
