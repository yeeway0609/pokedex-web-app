import { Link } from 'react-router-dom';
import { useContext } from "react";
import { GenFilterContext } from "@/context/GenFilterContext";

export default function RegionCard({region, gen, pokemon1, pokemon2, pokemon3}) {
  const { setGenFilter, setRegion } = useContext(GenFilterContext);
  const pokemonImg1 = new URL(`../../img/pokemons/${pokemon1}_3.png`, import.meta.url).href
  const pokemonImg2 = new URL(`../../img/pokemons/${pokemon2}_3.png`, import.meta.url).href
  const pokemonImg3 = new URL(`../../img/pokemons/${pokemon3}_3.png`, import.meta.url).href
  const regionImg = new URL(`../../img/regions/${region}.png`, import.meta.url).href

  return (
    <Link
      to="/pokedex"
      className={"mb-3 flex h-[100px] items-center justify-between rounded-2xl"}
      onClick={() => {
        setGenFilter(gen);
        setRegion(region);
      }}
    >
      <img src={regionImg} className="absolute h-full w-full rounded-2xl object-cover" />
      <div class="absolute h-full w-full rounded-2xl bg-gradient-to-r from-[rgba(0,0,0,0.8)]"></div>
      <div className="z-0 flex h-full flex-col justify-center px-6 ">
        <div className="font-Bold text-white">{region}</div>
        <div className="text-xs text-gray-300">{gen}º Generation</div>
      </div>
      <div className="z-0 flex h-[100px] items-center px-6">
        <div className="h-[50px] w-[50px]">
          <img
            src={pokemonImg1}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[50px] w-[50px]">
          <img
            src={pokemonImg2}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[50px] w-[50px]">
          <img
            src={pokemonImg3}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
}
