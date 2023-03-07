export default function TypeBadge({ type }) {
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

  const textColor = {
    Water: 'text-black',
    Dragon: 'text-white',
    Electric: 'text-black',
    Fairy: 'text-black',
    Ghost: 'text-white',
    Fire: 'text-black',
    Ice: 'text-black',
    Grass: 'text-black',
    Bug: 'text-black',
    Fighting: 'text-white',
    Normal: 'text-black',
    Dark: 'text-white',
    Steel: 'text-black',
    Rock: 'text-black',
    Psychic: 'text-black',
    Ground: 'text-black',
    Poison: 'text-white',
    Flying: 'text-black',
  };

  return (
    <div className={`mr-1 flex h-fit w-fit items-center rounded-[25px] ${bgColor[type]} px-[6px]`}>
      <div className="my-1 flex h-[20px] w-[20px] items-center justify-center rounded-[50%] bg-white">
        <img src={`src/img/icons/${type}_1.svg`} className="h-[60%] w-[60%]" />
      </div>
      <p className={`ml-1 mr-1 align-middle text-xs ${textColor[type]}`}>
        {type}
      </p>
    </div>
  );
}
