import { useState, useEffect, useContext } from 'react';
import { PokemonContext } from '@/context/PokemonContext';
import PokemonCard from '@/components/PokemonCard';
import Magikarp_Jump from '@/img/others/Magikarp_Jump.png';

export default function Fav_LoggedIn() {
  const { PokemonData } = useContext(PokemonContext);
  const [showFavorite, setShowFavorite] = useState(false);
  useEffect(() => {
    let FavNumber = 0;
    for (let key in PokemonData) {
      if (PokemonData[key].favorited === true) {
        FavNumber++;
      }
    }
    if (FavNumber > 0) {
      setShowFavorite(true);
    } else {
      setShowFavorite(false);
    }
  }, [PokemonData]);

  return (
    <div className="page-scrolling">
      {showFavorite ? (
        <div>
          {Object.keys(PokemonData).map((key, index) => {
            if (PokemonData[key].favorited === true)
              return <PokemonCard thisPokemon={PokemonData[key]} key={index} />;
          })}
        </div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center">
          <img className="mb-4" src={Magikarp_Jump} />
          <p className="mb-4 px-12 text-center font-Bold text-xl text-gray-3">
            You haven't favorited any Pokémon :(
          </p>
          <p className="mb-4 text-center text-gray-2">
            Click on the heart icon of your favor ite Pokémons and they will
            appear here.
          </p>
        </div>
      )}
    </div>
  );
}
