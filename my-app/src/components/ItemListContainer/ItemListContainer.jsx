import React from "react";
import useFirebase from "../../hooks/useFirebase";
import ItemCard from "../ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import { useFilters } from "../../hooks/useFilters";
import productsMock from "../../mocks/products.json";

const ItemListContainer = () => {
  const { category } = useParams();
  const { filterProducts, setFilter } = useFilters();

  //deberia ir en un useeffect (?)
  const prodRender = category
    ? (setFilter(category), filterProducts(productsMock))
    : productsMock;

  // const { productos, getProducts } = useFirebase();

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <main className="items-center">
      <ul className="grid grid-cols-3">
        {prodRender.map((product) => (
          <ItemCard key={product._id} {...product} />
        ))}
      </ul>
    </main>
  );
};

export default ItemListContainer;

/* 

const ItemListContainer = ({ filter }) => {
  const { products } = useContext(ProductContext);
  // const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 justify-around">
      <>
        {products.map((product) => (
          <ItemCard key={product.id} {...product} />
        ))}
      </>
    </div>
  );
};

export default ItemListContainer;
 */
