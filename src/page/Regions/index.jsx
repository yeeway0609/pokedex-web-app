import Header from '@/components/header';
import RegionCard from './RegionCard';

export default function Regions() {
  return (
    <div className="h-full">
      <Header>
        Regions
      </Header>
      <div className="page-scrolling pb-0">
        <RegionCard region="Kanto" gen={1} pokemon1="Bulbasaur" pokemon2="Charmander" pokemon3="Squirtle" />
        <RegionCard region="Johto" gen={2} pokemon1="Chikorita" pokemon2="Cyndaquil" pokemon3="Totodile" />
        <RegionCard region="Hoenn" gen={3} pokemon1="Treecko" pokemon2="Torchic" pokemon3="Mudkip" />
        <RegionCard region="Sinnoh" gen={4} pokemon1="Turtwig" pokemon2="Chimchar" pokemon3="Piplup" />
        <RegionCard region="Unova" gen={5} pokemon1="Snivy" pokemon2="Tepig" pokemon3="Oshawott" />
        <RegionCard region="Kalos" gen={6} pokemon1="Chespin" pokemon2="Fennekin" pokemon3="Froakie" />
        <RegionCard region="Alola" gen={7} pokemon1="Rowlet" pokemon2="Litten" pokemon3="Popplio" />
        <RegionCard region="Galar" gen={8} pokemon1="Grookey" pokemon2="Scorbunny" pokemon3="Sobble" />
      </div>
    </div>
  );
}
