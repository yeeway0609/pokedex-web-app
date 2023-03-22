import Header from '@/layout/header';
import RegionCard from './RegionCard';

export default function Regions() {
  return (
    <div className="h-full">
      <Header>
        Regions
      </Header>
      <div className="page-scrolling pb-0">
        <RegionCard region="Kanto" gen="1" pokemon1="Bulbasaur" pokemon2="Charmander" pokemon3="Squirtle" bgImage="bg-[url('src/img/regions/Kanto.png')]" />
        <RegionCard region="Johto" gen="2" pokemon1="Chikorita" pokemon2="Cyndaquil" pokemon3="Totodile" bgImage="bg-[url('src/img/regions/Johto.png')]" />
        <RegionCard region="Hoenn" gen="3" pokemon1="Treecko" pokemon2="Torchic" pokemon3="Mudkip" bgImage="bg-[url('src/img/regions/Hoenn.png')]" />
        <RegionCard region="Sinnoh" gen="4" pokemon1="Turtwig" pokemon2="Chimchar" pokemon3="Piplup" bgImage="bg-[url('src/img/regions/Sinnoh.png')]" />
        <RegionCard region="Unova" gen="5" pokemon1="Snivy" pokemon2="Tepig" pokemon3="Oshawott" bgImage="bg-[url('src/img/regions/Unova.png')]" />
        <RegionCard region="Kalos" gen="6" pokemon1="Chespin" pokemon2="Fennekin" pokemon3="Froakie" bgImage="bg-[url('src/img/regions/Kalos.png')]" />
        <RegionCard region="Alola" gen="7" pokemon1="Rowlet" pokemon2="Litten" pokemon3="Popplio" bgImage="bg-[url('src/img/regions/Alola.png')]" />
        <RegionCard region="Galar" gen="8" pokemon1="Grookey" pokemon2="Scorbunny" pokemon3="Sobble" bgImage="bg-[url('src/img/regions/Galar.png')]" />
      </div>
    </div>
  );
}
