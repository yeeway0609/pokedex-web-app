import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonContext } from '@/context/PokemonContext';

function EvolutionCard({ pokemonName }) {
  const { PokemonData } = useContext(PokemonContext);
  const thisPokemon = PokemonData[pokemonName];
  const bgColor = {
    Water: 'bg-Water-2',
    Dragon: 'bg-Dragon-2',
    Electric: 'bg-Electric-2',
    Fairy: 'bg-Fairy-2',
    Ghost: 'bg-Ghost-2',
    Fire: 'bg-Fire-2',
    Ice: 'bg-Ice-2',
    Grass: 'bg-Grass-2',
    Bug: 'bg-Bug-2',
    Fighting: 'bg-Fighting-2',
    Normal: 'bg-Normal-2',
    Dark: 'bg-Dark-2',
    Steel: 'bg-Steel-2',
    Rock: 'bg-Rock-2',
    Psychic: 'bg-Psychic-2',
    Ground: 'bg-Ground-2',
    Poison: 'bg-Poison-2',
    Flying: 'bg-Flying-2',
  };

  return (
    <Link to={`/${thisPokemon.name}`}className="flex h-24 rounded-[90px] border-2 border-gray-1">
      <div className={`w-28 ${bgColor[thisPokemon.type1]} rounded-[90px] flex justify-center items-center`}>
        <img src={`src/img/type/${thisPokemon.type1}_3.svg`} className="absolute w-[90%] h-[80%]"/>
        <img src={`src/img/pokemons/${thisPokemon.name}_3.png`} className="absolute"/>
      </div>
      <div className="ml-3 my-2">
        <p className="text-lg font-bold">{thisPokemon.name}</p>
        <p className="text-sm text-gray-2 font-bold">No.{`${thisPokemon.id}`.padStart(3, '0')}</p>
        <div className="flex mt-1">
          <div className={`${bgColor[thisPokemon.type1]} h-5 w-20 rounded-xl flex justify-center items-center mr-1`}>
            <img src={`src/img/type/${thisPokemon.type1}_2.svg`} />
          </div>
          {thisPokemon.type2 === null ? (
            <></>
          ) : (
            <div className={`${bgColor[thisPokemon.type2]} h-5 w-20 rounded-xl flex justify-center items-center`}>
              <img src={`src/img/type/${thisPokemon.type2}_2.svg`} />
            </div>
          )
          }
        </div>
      </div>
    </Link>
  );
}

export default EvolutionCard;
