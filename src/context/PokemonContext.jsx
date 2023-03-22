import React from 'react';
import { useState } from 'react';
import data from '@/data/pokemon.json'

export const PokemonContext = React.createContext();

export const PokemonProvider = ({ children }) => {
  const [PokemonData, setPokemonData] = useState(data);

  return (
    <PokemonContext.Provider value={{PokemonData, setPokemonData}}>
      {children}
    </PokemonContext.Provider>
  );
};

