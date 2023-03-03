// import trashcan from 'src/img/icons/trashcan.svg';
// import unliked_1 from './unliked_1.svg';
import unliked_2 from './unliked_2.svg';
import TypeBadge from '../TypeBadge';

export default function PokemonCard({ pokemon }) {
  const bgColor1 = {
    Water: 'bg-Water-1',
    Dragon: 'bg-Dragon-1',
    Electric: 'bg-Electric-1',
    Fairy: 'bg-Fairy-1',
    Ghost: 'bg-Ghost-1',
    Fire: 'bg-Fire-1',
    Ice: 'bg-Ice-1',
    Grass: 'bg-Grass-1',
    Bug: 'bg-Bug-1',
    Fighting: 'bg-Fighting-1',
    Normal: 'bg-Normal-1',
    Dark: 'bg-Dark-1',
    Steel: 'bg-Steel-1',
    Rock: 'bg-Rock-1',
    Psychic: 'bg-Psychic-1',
    Ground: 'bg-Ground-1',
    Poison: 'bg-Poison-1',
    Flying: 'bg-Flying-1',
  };
  const bgColor2 = {
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
  const gradientColor = {
    Water: 'from-Water-2',
    Dragon: 'from-Dragon-2',
    Electric: 'from-Electric-2',
    Fairy: 'from-Fairy-2',
    Ghost: 'from-Ghost-2',
    Fire: 'from-Fire-2',
    Ice: 'from-Ice-2',
    Grass: 'from-Grass-2',
    Bug: 'from-Bug-2',
    Fighting: 'from-Fighting-2',
    Normal: 'from-Normal-2',
    Dark: 'from-Dark-2',
    Steel: 'from-Steel-2',
    Rock: 'from-Rock-2',
    Psychic: 'from-Psychic-2',
    Ground: 'from-Ground-2',
    Poison: 'from-Poison-2',
    Flying: 'from-Flying-2',
  };

  return (
    <div className={`mb-4 flex h-[100px] w-full items-center justify-between rounded-2xl ${bgColor1[pokemon.type1]}`}>
      <div className="py-3 pl-4">
        <p className="font-[Poppins-Semibold] text-[12px] leading-[18px] text-gray-3">
          No.{`${pokemon.id}`.padStart(3, '0')}
        </p>
        <p className="font-[Poppins-Semibold] text-[21px] leading-[32px]">
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
      <div className={`h-full w-32 rounded-2xl ${bgColor2[pokemon.type1]}`}>
        <img
          src={`src/img/icons/${pokemon.type1}_2.svg`}
          className="h-full w-full py-2"
        />
        <div className={`absolute top-0 flex h-full w-full justify-center rounded-2xl bg-gradient-to-tl ${gradientColor[pokemon.type1]}`}>
          <img
            src={`src/img/pokemons/${pokemon.name}_2.png`}
            className="h-full w-full object-contain py-2"
          />
        </div>
      </div>
      <div className="absolute right-2 top-2">
        <img src={unliked_2} />
      </div>
    </div>
  );
}
