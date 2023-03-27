import React from 'react';
import { useState } from 'react';

export const GenFilterContext = React.createContext();

export const GenFilterProvider = ({ children }) => {
  const [genFilter, setGenFilter] = useState(null);
  const [region, setRegion] = useState(null);

  return (
    <GenFilterContext.Provider value={{genFilter, setGenFilter, region, setRegion}}>
      {children}
    </GenFilterContext.Provider>
  );
};

