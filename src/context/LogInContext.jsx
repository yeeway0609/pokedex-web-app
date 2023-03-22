import React from 'react';
import { useState } from 'react';

export const LogInContext = React.createContext();

export const LogInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LogInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </LogInContext.Provider>
  );
};
