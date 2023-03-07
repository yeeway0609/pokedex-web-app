import SearchBar from "./SearchBar"
import TypeListButton from "./TypeListButton"
import OrderListButton from "./OrderListButton"
import PokemonCard from "@/components/PokemonCard"
import PokemonData from '@/data/pokemon.json'

export default function Pokedex () {
  return (
    <div className="h-full">
      <div className="page-title">
        <SearchBar />
      </div>
      <div className="page-scrolling pb-0">
        <div className="flex justify-between mb-4">
          <TypeListButton type="All types" bgColor="bg-gray-3" textColor="text-white" />
          <div className="w-4"></div>
          <OrderListButton order="A-Z" />
        </div>
        <div>
          {/* iterate object keys to show all pokemons */}
          {Object.keys(PokemonData).map((key, index) => {
            return <PokemonCard pokemon={PokemonData[key]} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}