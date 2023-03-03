export default function TypeListButton ({type, bgColor, textColor="text-[#000000]"}) {
  return (
    <div className={`flex h-11 w-full items-center justify-center rounded-[49px] ${textColor} ${bgColor}`}>
      <p className="text-sm">{type}</p>
    </div>
  );
};

{/* <TypeButton type="All types" bgColor="bg-gray-2" textColor="text-white" />
<TypeButton type="Water" bgColor="bg-Water-2" />
<TypeButton type="Dragon" bgColor="bg-Dragon-2" textColor="text-white" />
<TypeButton type="Electric" bgColor="bg-Electric-2" />
<TypeButton type="Fairy" bgColor="bg-Fairy-2" />
<TypeButton type="Ghost" bgColor="bg-Ghost-2" textColor="text-white" />
<TypeButton type="Fire" bgColor="bg-Fire-2" />
<TypeButton type="Ice" bgColor="bg-Ice-2" />
<TypeButton type="Grass" bgColor="bg-Grass-2" />
<TypeButton type="Bug" bgColor="bg-Bug-2" />
<TypeButton type="Fighting" bgColor="bg-Fighting-2" textColor="text-white" />
<TypeButton type="Normal" bgColor="bg-Normal-2" />
<TypeButton type="Dark" bgColor="bg-Dark-2" textColor="text-white" />
<TypeButton type="Steel" bgColor="bg-Steel-2" />
<TypeButton type="Rock" bgColor="bg-Rock-2" />
<TypeButton type="Psychic" bgColor="bg-Psychic-2" />
<TypeButton type="Ground" bgColor="bg-Ground-2" />
<TypeButton type="Poison" bgColor="bg-Poison-2" textColor="text-white/>
<TypeButton type="Flying" bgColor="bg-Flying-2" /> */}