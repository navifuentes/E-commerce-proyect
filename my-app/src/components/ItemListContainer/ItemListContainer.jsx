import React, { useEffect, useState } from "react";
import useFirebase from "../../hooks/useFirebase";
import ItemCard from "../ItemCard/ItemCard";

const ItemListContainer = () => {
  const { productos, getProducts } = useFirebase();
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getProducts();
  }, [productos]);

  return (
    <div className="grid grid-cols-2 justify-around">
      {productos.map((product) => (
        <ItemCard key={product.id} {...product} />
      ))}
    </div>
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
