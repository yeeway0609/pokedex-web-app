import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonContext } from '@/context/PokemonContext';
import { TypeColor } from '@/utils/TypeColor';

function EvolutionCard({ pokemonName }) {
  const { PokemonData } = useContext(PokemonContext);
  const thisPokemon = PokemonData.find((pokemon) => {
    return pokemon.name === pokemonName;
  });
  const pokemonImg = new URL(`../../img/pokemons/${thisPokemon.name}_3.png`, import.meta.url).href
  const typeIcon = new URL(`../../img/type/${thisPokemon.type1}_3.svg`, import.meta.url).href
  const typeIconWhite1 = new URL(`../../img/type/${thisPokemon.type1}_2.svg`, import.meta.url).href
  const typeIconWhite2 = new URL(`../../img/type/${thisPokemon.type2}_2.svg`, import.meta.url).href

  return (
    <Link to={`/${thisPokemon.name}`}className="flex h-24 rounded-[90px] border-2 border-gray-1">
      <div className={`w-28 ${TypeColor[thisPokemon.type1][1]} rounded-[90px] flex justify-center items-center`}>
        <img src={typeIcon} className="absolute w-[90%] h-[80%]"/>
        <img src={pokemonImg} className="absolute"/>
      </div>
      <div className="ml-3 my-2">
        <p className="text-lg font-bold">{thisPokemon.name}</p>
        <p className="text-sm text-gray-2 font-bold">No.{`${thisPokemon.id}`.padStart(3, '0')}</p>
        <div className="flex mt-1">
          <div className={`${TypeColor[thisPokemon.type1][1]} h-5 w-20 rounded-xl flex justify-center items-center mr-1`}>
            <img src={typeIconWhite1} />
          </div>
          {thisPokemon.type2 === null ? (
            <></>
          ) : (
            <div className={`${TypeColor[thisPokemon.type2][1]} h-5 w-20 rounded-xl flex justify-center items-center`}>
              <img src={typeIconWhite2} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default EvolutionCard;
