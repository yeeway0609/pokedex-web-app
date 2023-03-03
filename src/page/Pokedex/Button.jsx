export default function TypeButton ({type, bgColor, textColor="text-[#000000]"}) {
  return (
    <div className={`flex h-11 w-36 items-center justify-center rounded-[49px] ${textColor} ${bgColor}`}>
      <p className="text-sm">{type}</p>
    </div>
  );
};

{/* <TypeButton type="All types" bgColor="bg-gray-2" textColor="text-white" />
<TypeButton type="Water" bgColor="bg-water-2" />
<TypeButton type="Dragon" bgColor="bg-dragon-2" textColor="text-white" />
<TypeButton type="Electric" bgColor="bg-electric-2" />
<TypeButton type="Fairy" bgColor="bg-fairy-2" />
<TypeButton type="Ghost" bgColor="bg-ghost-2" textColor="text-white" />
<TypeButton type="Fire" bgColor="bg-fire-2" />
<TypeButton type="Ice" bgColor="bg-ice-2" />
<TypeButton type="Grass" bgColor="bg-grass-2" />
<TypeButton type="Bug" bgColor="bg-bug-2" />
<TypeButton type="Fighting" bgColor="bg-fighting-2" textColor="text-white" />
<TypeButton type="Normal" bgColor="bg-normal-2" />
<TypeButton type="Dark" bgColor="bg-dark-2" textColor="text-white" />
<TypeButton type="Steel" bgColor="bg-steel-2" />
<TypeButton type="Rock" bgColor="bg-rock-2" />
<TypeButton type="Psychic" bgColor="bg-psychic-2" />
<TypeButton type="Ground" bgColor="bg-ground-2" />
<TypeButton type="Poison" bgColor="bg-poison-2" />
<TypeButton type="Flying" bgColor="bg-flying-2" /> */}