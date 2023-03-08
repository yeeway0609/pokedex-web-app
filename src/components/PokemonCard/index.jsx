import { Link } from "react-router-dom";
import TypeBadge from '@/components/TypeBadge';
import liked_2 from '@/img/icons/liked_2.svg';
import unliked_2 from '@/img/icons/unliked_2.svg';

export default function PokemonCard({ pokemon }) {
  const bgColor = {
    Water: ['bg-Water-1', 'bg-Water-2', 'from-Water-2'],
    Dragon: ['bg-Dragon-1', 'bg-Dragon-2', 'from-Dragon-2'],
    Electric: ['bg-Electric-1', 'bg-Electric-2', 'from-Electric-2'],
    Fairy: ['bg-Fairy-1', 'bg-Fairy-2', 'from-Fairy-2'],
    Ghost: ['bg-Ghost-1', 'bg-Ghost-2', 'from-Ghost-2'],
    Fire: ['bg-Fire-1', 'bg-Fire-2', 'from-Fire-2'],
    Ice: ['bg-Ice-1', 'bg-Ice-2', 'from-Ice-2'],
    Grass: ['bg-Grass-1', 'bg-Grass-2', 'from-Grass-2'],
    Bug: ['bg-Bug-1', 'bg-Bug-2', 'from-Bug-2'],
    Fighting: ['bg-Fighting-1', 'bg-Fighting-2', 'from-Fighting-2'],
    Normal: ['bg-Normal-1', 'bg-Normal-2', 'from-Normal-2'],
    Dark: ['bg-Dark-1', 'bg-Dark-2', 'from-Dark-2'],
    Steel: ['bg-Steel-1', 'bg-Steel-2', 'from-Steel-2'],
    Rock: ['bg-Rock-1', 'bg-Rock-2', 'from-Rock-2'],
    Psychic: ['bg-Psychic-1', 'bg-Psychic-2', 'from-Psychic-2'],
    Ground: ['bg-Ground-1', 'bg-Ground-2', 'from-Ground-2'],
    Poison: ['bg-Poison-1', 'bg-Poison-2', 'from-Poison-2'],
    Flying: ['bg-Flying-1', 'bg-Flying-2', 'from-Flying-2'],
  };

  return (
    <Link to={`/${pokemon.name}`} className={`mb-4 flex h-[100px] w-full items-center justify-between rounded-2xl ${bgColor[pokemon.type1][0]}`}>
      <div className="py-3 pl-4">
        <p className="font-Bold text-[12px] leading-[18px] text-gray-3">
          No.{`${pokemon.id}`.padStart(3, '0')}
        </p>
        <p className="font-Bold text-[21px] leading-[32px]">
          {`${pokemon.name}`}
        </p>
        <div className="flex">
          <TypeBadge type={`${pokemon.type1}`} />
          {pokemon.type2 === null ? (
            <></>
          ) : (
            <TypeBadge type={`${pokemon.type2}`} />
          )}
        </div>
      </div>
      <div className={`h-full w-32 rounded-2xl ${bgColor[pokemon.type1][1]}`}>
        <img
          src={`src/img/type/${pokemon.type1}_2.svg`}
          className="h-full w-full py-2"
        />
        <div className={`absolute top-0 flex h-full w-full justify-center rounded-2xl bg-gradient-to-tl ${bgColor[pokemon.type1][2]}`}>
          <img
            src={`src/img/pokemons/${pokemon.name}_2.png`}
            className="h-full w-full object-contain py-2"
          />
        </div>
      </div>
      <div className="absolute right-2 top-2">
        <img src={unliked_2} />
      </div>
    </Link>
  );
}
