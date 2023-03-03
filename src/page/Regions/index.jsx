import RegionCard from './RegionCard';

export default function Regions() {
  return (
    <div className="h-full">
      <div className="page-tile">
        Regions
      </div>
      <div className="h-[calc(100%-75px-72px)] px-4 pt-4 flex flex-col overflow-auto no-scrollbar"> {/* 高度要扣掉Header跟NavBarh才能用overflow-auto */}
        <RegionCard region="Kanto" gen="1" pokemon1="Bulbasaur" pokemon2="Charmander" pokemon3="Squirtle" bgImage="bg-[url('page/Regions/img/Kanto.png')]" />
        <RegionCard region="Johto" gen="2" pokemon1="Chikorita" pokemon2="Cyndaquil" pokemon3="Totodile" bgImage="bg-[url('page/Regions/img/Johto.png')]" />
        <RegionCard region="Hoenn" gen="3" pokemon1="Treecko" pokemon2="Torchic" pokemon3="Mudkip" bgImage="bg-[url('page/Regions/img/Hoenn.png')]" />
        <RegionCard region="Sinnoh" gen="4" pokemon1="Turtwig" pokemon2="Chimchar" pokemon3="Piplup" bgImage="bg-[url('page/Regions/img/Sinnoh.png')]" />
        <RegionCard region="Unova" gen="5" pokemon1="Snivy" pokemon2="Tepig" pokemon3="Oshawott" bgImage="bg-[url('page/Regions/img/Unova.png')]" />
        <RegionCard region="Kalos" gen="6" pokemon1="Chespin" pokemon2="Fennekin" pokemon3="Froakie" bgImage="bg-[url('page/Regions/img/Kalos.png')]" />
        <RegionCard region="Alola" gen="7" pokemon1="Rowlet" pokemon2="Litten" pokemon3="Popplio" bgImage="bg-[url('page/Regions/img/Alola.png')]" />
        <RegionCard region="Galar" gen="8" pokemon1="Grookey" pokemon2="Scorbunny" pokemon3="Sobble" bgImage="bg-[url('page/Regions/img/Galar.png')]" />
      </div>
    </div>
  );
}
