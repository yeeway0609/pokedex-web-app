import { useParams } from 'react-router-dom';
import PokemonData from '@/data/pokemon.json';
import TypeBadge from '@/components/TypeBadge';
import chevron from '@/img/icons/chevron.svg';
import liked from '@/img/icons/liked_1.svg';
import unliked from '@/img/icons/unliked_1.svg';

function PokemonInfo() {
  const { pokemonName } = useParams();
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
    <div className="page-scrolling z-0 h-full">
      <div className="absolute -ml-4 -mt-4 aspect-square w-full overflow-hidden">
        <div className={`aspect-square w-[150%] rounded-full ${bgColor[thisPokemon.type1]} -left-1/4 -top-[90%]`}></div>
      </div>
      <img src={chevron} className="absolute left-4 top-4" />
      <img src={unliked} className="absolute top-6 right-6" />
      <div className="absolute -ml-4 flex w-full justify-center">
        <img src={`src/img/icons/${thisPokemon.type1}_3.svg`} className="h-44"/>
      </div>
      <div className="flex h-60 w-full items-end justify-center">
        <img
          src={`src/img/pokemons/${thisPokemon.name}_1.gif`}
          className="-translate-y-1/2 scale-[200%]"
        />
      </div>
      <div className="mt-4">
        <p className="text-4xl font-bold">{thisPokemon.name}</p>
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
      <div className="mt-3">
        <p>WEIGHT: {`${thisPokemon.weight}`} kg</p>
        <p>HEIGHT: {`${thisPokemon.height}`} m</p>
        <p>SPECIES: {`${thisPokemon.species}`}</p>
        <p>ABILITY: {`${thisPokemon.ability}`}</p>
      </div>
      <div className="mt-3">
        <p>GENDER: {`${thisPokemon.gender}`}</p>
      </div>
      <div className="mt-5">
        <p className="text-xl font-bold">Weaknesses</p>
        <div>{`${thisPokemon.weaknesses}`}</div>
      </div>
      <div className="mt-5">
        <p className="text-xl font-bold">Evolution</p>
        <div>{`${thisPokemon.evolution}`}</div>
      </div>
      <img src={`src/img/pokemons/${thisPokemon.name}_1.gif`} className="" />
      <img src={`src/img/pokemons/${thisPokemon.name}_1.gif`} className="" />
      <img src={`src/img/pokemons/${thisPokemon.name}_1.gif`} className="" />
      <img src={`src/img/pokemons/${thisPokemon.name}_1.gif`} className="" />
      <img src={`src/img/pokemons/${thisPokemon.name}_1.gif`} className="" />
      <img src={`src/img/pokemons/${thisPokemon.name}_1.gif`} className="" />
    </div>
  );
}

export default PokemonInfo;
