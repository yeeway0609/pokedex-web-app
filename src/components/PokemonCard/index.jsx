import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonContext } from '@/context/PokemonContext';
import { TypeColor } from '../../utils/TypeColor';
import TypeBadge from '@/components/TypeBadge';
import liked_2 from '@/img/icons/liked_2.svg';
import unliked_2 from '@/img/icons/unliked_2.svg';

export default function PokemonCard({ thisPokemon }) {
  const { PokemonData, setPokemonData } = useContext(PokemonContext);
  const pokemonImg = new URL(`../../img/pokemons/${thisPokemon.name}_2.png`, import.meta.url).href
  const typeIcon = new URL(`../../img/type/${thisPokemon.type1}_3.svg`, import.meta.url).href
  const handleFavorite = () => {
    setPokemonData(
      PokemonData.map((pokemon) => {
        if (pokemon == thisPokemon) {
          return { ...pokemon, favorited: !thisPokemon.favorited };
        } else {
          return pokemon;
        }
      })
    );
  };

  return (
    <div>
      <Link
        to={`/${thisPokemon.name}`}
        className={`mb-4 flex h-[100px] w-full items-center justify-between rounded-2xl ${TypeColor[thisPokemon.type1][0]}`}
      >
        <div className="py-3 pl-4">
          <p className="font-Bold text-[12px] leading-[18px] text-gray-3">
            No.{`${thisPokemon.id}`.padStart(3, '0')}
          </p>
          <p className="font-Bold text-[21px] leading-[32px]">
            {`${thisPokemon.name}`}
          </p>
          <div className="flex">
            <TypeBadge type={`${thisPokemon.type1}`} />
            {thisPokemon.type2 === null ? (
              <></>
            ) : (
              <TypeBadge type={`${thisPokemon.type2}`} />
            )}
          </div>
        </div>
        <div className={`h-full w-32 rounded-2xl ${TypeColor[thisPokemon.type1][1]}`}>
          <img
            src={typeIcon}
            className="h-full w-full py-2"
          />
          <div className={"absolute top-0 flex h-full w-full justify-center rounded-2xl"}>
            <img
              src={pokemonImg}
              className="h-full w-full object-contain py-2"
            />
          </div>
        </div>
      </Link>
      <div className="absolute right-2 top-2" onClick={() => handleFavorite()}>
        {thisPokemon.favorited ? (
          <img src={liked_2} />
        ) : (
          <img src={unliked_2} />
        )}
      </div>
    </div>
  );
}
