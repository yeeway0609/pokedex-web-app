import SearchBar from "./SearchBar"
import TypeListButton from "./TypeListButton"
import OrderListButton from "./OrderListButton"
import PokemonCard from "../../components/PokemonCard"
// import Pokemons from 'src/data/pokemon.json'
const res = await fetch('src/data/pokemon.json')
const pokemons = await res.json()

export default function Pokedex () {
  return (
    <div>
      <SearchBar />
      <div className="mx-4 mt-4 flex justify-between">
        <TypeListButton type="All types" bgColor="bg-gray-3" textColor="text-white" />
        <div className="w-4"></div>
        <OrderListButton order="A-Z" />
      </div>
      <div className="h-[600px] p-4 flex flex-col overflow-auto no-scrollbar">{/* 高度要扣掉Header跟NavBarh才能用overflow-auto */}
        {/* iterate object keys to show all pokemons */}
        {Object.keys(pokemons).map((key, index) => {
          return <PokemonCard pokemon={pokemons[key]} key={index} />
        })}
      </div>
    </div>
  )
}