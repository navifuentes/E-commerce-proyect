import React, { useState, createContext } from "react";
import productsMock from "../mocks/products.json";

export const GlobalContext = createContext("");

const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState(productsMock);
  const [product, setProduct] = useState({});
  const [filter, setFilter] = useState("all");

  return (
    <GlobalContext.Provider
      value={{
        product,
        products,
        setProducts,
        setProduct,
        filter,
        setFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
