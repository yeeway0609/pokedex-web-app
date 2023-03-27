export default function TypeFilterButton({ type, onClick }) {
  const color = {
    'All types': ['bg-gray-3', 'text-white'],
    Water: ['bg-Water-2', 'text-black'],
    Dragon: ['bg-Dragon-2', 'text-white'],
    Electric: ['bg-Electric-2', 'text-black'],
    Fairy: ['bg-Fairy-2', 'text-black'],
    Ghost: ['bg-Ghost-2', 'text-white'],
    Fire: ['bg-Fire-2', 'text-black'],
    Ice: ['bg-Ice-2', 'text-black'],
    Grass: ['bg-Grass-2', 'text-black'],
    Bug: ['bg-Bug-2', 'text-black'],
    Fighting: ['bg-Fighting-2', 'text-white'],
    Normal: ['bg-Normal-2', 'text-black'],
    Dark: ['bg-Dark-2', 'text-white'],
    Steel: ['bg-Steel-2', 'text-black'],
    Rock: ['bg-Rock-2', 'text-black'],
    Psychic: ['bg-Psychic-2', 'text-black'],
    Ground: ['bg-Ground-2', 'text-black'],
    Poison: ['bg-Poison-2', 'text-white'],
    Flying: ['bg-Flying-2', 'text-black'],
  };

  return (
    <div
      className={`flex h-11 w-full items-center justify-center rounded-[50px] ${color[type][0]} ${color[type][1]}`}
      onClick={onClick}
    >
      <p className="font-Bold text-sm">{type}</p>
    </div>
  );
}
