import PokemonData from '@/data/pokemon.json';

function EvolutionCard({ evolutionForm }) {
  const thisPokemon = PokemonData[evolutionForm];
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
    <div className="rounded-xl border-2 border-gray-1">
      <div>{thisPokemon.name}</div>
      <div>{thisPokemon.id}</div>
    </div>
  );
}

export default EvolutionCard;
