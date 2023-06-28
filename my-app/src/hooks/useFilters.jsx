import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function useFilters() {
  const { filter, setFilter } = useContext(GlobalContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return product.category === filter;
    });
  };
  return { filter, setFilter, filterProducts };
}
