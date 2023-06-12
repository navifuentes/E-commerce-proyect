import React, { useState, createContext } from "react";

export const GlobalContext = createContext("");

const GlobalProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <GlobalContext.Provider value={{ search, setSearch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
