import Header from '@/components/header';
import SearchBar from './SearchBar';
import TypeFilterButton from './TypeFilterButton';
import SortingButton from './SortingButton';
import PokemonCard from '@/components/PokemonCard';
import { useState, useContext } from 'react';
import { PokemonContext } from '@/context/PokemonContext';
import { GenFilterContext } from "@/context/GenFilterContext";


export default function Pokedex() {
  const { PokemonData } = useContext(PokemonContext);
  const { genFilter, setGenFilter, region, setRegion } = useContext(GenFilterContext);
  const types = ['All types', 'Water', 'Dragon', 'Electric', 'Fairy', 'Ghost', 'Fire', 'Ice', 'Grass', 'Bug', 'Fighting', 'Normal', 'Dark', 'Steel', 'Rock', 'Psychic', 'Ground', 'Poison', 'Flying'];
  const [typeFilter, setTypeFilter] = useState('All types');
  const [isTypeFilterOpen, setIsTypeFilterOpen] = useState(false);
  const orders = ['Ascending', 'Descending', 'A-Z', 'Z-A'];
  const [sortOrder, setSortOrder] = useState('Ascending');
  const [isSortingOpen, setIsSortingOpen] = useState(false);

  const showPokemons = () => {
    const filteredData = PokemonData.filter(pokemon => {
      if (typeFilter !== 'All types' && pokemon.type1 !== typeFilter) {
        return false;
      }
      if (genFilter !== null && pokemon.gen !== genFilter) {
        return false;
      }
      return true;
    });

    filteredData.sort((a, b) => {
      if (sortOrder === "Ascending") {
        return a.id - b.id;
      } else if (sortOrder === "Descending") {
        return b.id - a.id;
      } else if (sortOrder === "A-Z") {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === "Z-A") {
        return b.name.localeCompare(a.name);
      }
    });

    return filteredData.map(pokemon => {
      return <PokemonCard thisPokemon={pokemon} key={pokemon.id} />
    });
  }

  return (
    <div className="h-full">
      {isTypeFilterOpen ? (
        <div
          className="absolute z-10 h-full w-full bg-black bg-opacity-50"
          onClick={() => setIsTypeFilterOpen(false)}
        >
          <div className="no-scrollbar absolute bottom-0 h-96 w-full overflow-y-auto rounded-t-3xl bg-white p-3">
            <p className="py-4 text-center font-Bold">Select the type</p>
            {types.map((type) => {
              return (
                <>
                  <TypeFilterButton
                    type={type}
                    onClick={() => {
                      setTypeFilter(type);
                      setIsTypeFilterOpen(false);
                    }}
                  />
                  <div className="h-4"></div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
      {isSortingOpen ? (
        <div
          className="absolute z-10 h-full w-full bg-black bg-opacity-50"
          onClick={() => setIsSortingOpen(false)}
        >
          <div className="no-scrollbar absolute bottom-0 h-96 w-full overflow-y-auto rounded-t-3xl bg-white p-3">
            <p className="py-4 text-center font-Bold">Select the order</p>
            {orders.map((order) => {
              return (
                <>
                  <SortingButton
                    order={order}
                    onClick={() => {
                      setSortOrder(order);
                      setIsSortingOpen(false);
                    }}
                  />
                  <div className="h-4"></div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
      <Header>
        <SearchBar />
      </Header>
      <div className="page-scrolling pb-0">
        {(region !== null) ? (
          <p className="mb-4 font-Bold">
            <span className="mr-3 font-Bold cursor-pointer text-2xl align-middle"
              onClick={() => {
                setRegion(null);
                setGenFilter(null);
              }}
            >&times;</span>
            {region}
          </p>
        ): (
          <></>
        )}
        <div className="mb-4 flex justify-between">
          <TypeFilterButton
            type={typeFilter}
            onClick={() => setIsTypeFilterOpen(true)}
          />
          <div className="w-4"></div>
          <SortingButton
            order={sortOrder}
            onClick={() => setIsSortingOpen(true)}
          />
        </div>
        <div>{showPokemons()}</div>
      </div>
    </div>
  );
}
