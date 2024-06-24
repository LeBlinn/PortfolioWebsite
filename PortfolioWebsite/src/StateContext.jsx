import React, { createContext, useState } from 'react';

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [value, setValue] = useState('A');

  return (
    <StateContext.Provider value={{ value, setValue }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };