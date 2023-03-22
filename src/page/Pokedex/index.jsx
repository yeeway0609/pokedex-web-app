import Header from '@/layout/header';
import SearchBar from "./SearchBar"
import TypeListButton from "./TypeListButton"
import OrderListButton from "./OrderListButton"
import PokemonCard from "@/components/PokemonCard"
import { useContext } from "react";
import { PokemonContext } from "@/context/PokemonContext";

export default function Pokedex () {
  const {PokemonData} = useContext(PokemonContext);

  return (
    <div className="h-full">
      <Header>
        <SearchBar />
      </Header>
      <div className="page-scrolling pb-0">
        <div className="flex justify-between mb-4">
          <TypeListButton type="All types" bgColor="bg-gray-3" textColor="text-white" />
          <div className="w-4"></div>
          <OrderListButton order="A-Z" />
        </div>
        <div>
          {Object.keys(PokemonData).map((key, index) => {
            return <PokemonCard thisPokemon={PokemonData[key]} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}