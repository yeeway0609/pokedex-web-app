import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonContext } from '@/context/PokemonContext';
import TypeBadge from '@/components/TypeBadge';
import EvolutionCard from './EvolutionCard';
import chevron from '@/img/icons/chevron.svg';
import liked from '@/img/icons/liked_1.svg';
import unliked from '@/img/icons/unliked_1.svg';
import weight from '@/img/icons/weight.svg';
import height from '@/img/icons/height.svg';
import species from '@/img/icons/species.svg';
import ability from '@/img/icons/ability.svg';
import male from '@/img/icons/male.svg';
import female from '@/img/icons/female.svg';
import blue_arrow from '@/img/icons/blue_arrow.svg';

export default function PokemonInfo() {
  const { PokemonData, setPokemonData } = useContext(PokemonContext);
  const { pokemonName } = useParams();
  // Bug-------------------------------------------------------------
  const thisPokemon = PokemonData[pokemonName];
  const handleFavorite = () => {
    setPokemonData(
      Object.keys(PokemonData).map((key, index) => {
        if (PokemonData[key] == thisPokemon) {
          return { ...PokemonData[key], favorited: !thisPokemon.favorited };
        } else {
          return PokemonData[key];
        }
      })
    );
  };
  console.log(thisPokemon)
  // 不管是在這個頁面按下收藏還是在主頁按下收藏，可以從console發現thisPokemon從一隻寶可夢的object變成undifined
   // Bug-------------------------------------------------------------
  const maleRatio = (thisPokemon.gender[2] / 8) * 100;
  const maleRatioWidth = `w-[${maleRatio}%]`;
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
    <div className="page-scrolling z-10 h-full bg-white">
      <div className="absolute -ml-4 -mt-4 aspect-square w-full overflow-hidden">
        <div
          className={`aspect-square w-[150%] rounded-full ${
            bgColor[thisPokemon.type1]
          } -left-1/4 -top-[90%]`}
        ></div>
      </div>
      <div className="absolute -ml-4 mt-4 flex w-full justify-center">
        <img src={`src/img/type/${thisPokemon.type1}_3.svg`} className="h-44" />
      </div>
      <div className="flex h-12 items-center justify-between">
        <Link to="/pokedex" className="h-full">
          <img src={chevron} className="h-full" />
        </Link>
        <div className="pr-2" onClick={() => handleFavorite()}>
          {thisPokemon.favorited ? <img src={liked} /> : <img src={unliked} />}
        </div>
      </div>
      <div className="flex h-48 w-full items-end justify-center">
        <img
          src={`src/img/pokemons/${thisPokemon.name}_1.gif`}
          className="-translate-y-1/2 scale-[200%]"
        />
      </div>
      <div className="mt-4">
        <p className="mb-2 text-4xl font-bold">{thisPokemon.name}</p>
        <p>No.{`${thisPokemon.id}`.padStart(3, '0')}</p>
      </div>
      <div className="mt-3 flex">
        <TypeBadge type={`${thisPokemon.type1}`} />
        {thisPokemon.type2 === null ? (
          <></>
        ) : (
          <TypeBadge type={`${thisPokemon.type2}`} />
        )}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
        <div>
          <img src={weight} className="mr-1 inline" />
          <span className="text-sm text-gray-2">WEIGHT</span>
          <div className="rounded-xl border-2 border-gray-1 text-center text-lg">
            {`${thisPokemon.weight}`} kg
          </div>
        </div>
        <div>
          <img src={height} className="mr-1 inline" />
          <span className="text-sm text-gray-2">HEIGHT</span>
          <div className="rounded-xl border-2 border-gray-1 text-center text-lg">
            {`${thisPokemon.height}`} m
          </div>
        </div>
        <div>
          <img src={species} className="mr-1 inline" />
          <span className="text-sm text-gray-2">SPECIES</span>
          <div className="rounded-xl border-2 border-gray-1 text-center text-lg">
            {`${thisPokemon.species}`}
          </div>
        </div>
        <div>
          <img src={ability} className="mr-1 inline" />
          <span className="text-sm text-gray-2">ABILITY</span>
          <div className="rounded-xl border-2 border-gray-1 text-center text-lg">
            {thisPokemon.ability.map((value) => (
              <p>{value}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-center">GENDER</p>
        {thisPokemon.gender === 'genderless' ? (
          <>
            <div className="h-2 w-full rounded-md bg-gray-1"></div>
            <p className="text-center text-sm text-gray-2">Unknown</p>
          </>
        ) : (
          <>
            <div className="h-2 w-full rounded-md bg-[#FF7596]">
              <div
                className={`${maleRatioWidth} h-2 rounded-l-md bg-[#2551C3]`}
              ></div>
            </div>
            <div className="flex justify-between">
              <p>
                <img src={male} className="mb-1 inline" />
                {maleRatio}%
              </p>
              <p>
                <img src={female} className="mb-1 inline" />
                {100 - maleRatio}%
              </p>
            </div>
          </>
        )}
      </div>
      <div className="mt-5">
        <p className="text-xl font-bold">Weaknesses</p>
        <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3">
          {thisPokemon.weaknesses.map((value) => {
            return <TypeBadge type={value} fullWidth="true" />;
          })}
        </div>
      </div>
      <div className="mt-5">
        <p className="text-xl font-bold">Evolution</p>
        <div className="mt-2 rounded-xl border-2 border-gray-1 px-4 py-6">
          {thisPokemon.evolution[0] === 'This Pokémon does not evolve.' ? (
            <>
              <p className="mb-4">This Pokémon does not evolve.</p>
              <EvolutionCard pokemonName={thisPokemon.name} />
            </>
          ) : (
            <>
              {thisPokemon.evolution.map((value, index) => {
                if (index % 2 == 0) {
                  return <EvolutionCard pokemonName={value} />;
                } else if (index % 2 == 1) {
                  return (
                    <div className="my-2 flex justify-center">
                      <img src={blue_arrow} />
                      <p className="ml-3">{value}</p>
                    </div>
                  );
                }
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
