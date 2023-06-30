import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import useFirebase from "../hooks/useFirebase";
import { useFilters } from "../hooks/useFilters";
import { useParams } from "react-router-dom";

const Home = () => {
  const { filterProducts, setFilter } = useFilters();
  const { products } = useFirebase();
  const { category } = useParams();
  setFilter(category);

  return (
    <>
      {category ? (
        <ItemListContainer products={filterProducts(products)} />
      ) : (
        <ItemListContainer products={products} />
      )}
    </>
  );
};

export default Home;
