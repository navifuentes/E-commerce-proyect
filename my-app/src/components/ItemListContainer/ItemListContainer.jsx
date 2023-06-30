import React from "react";
import ItemCard from "../ItemCard/ItemCard";


const ItemListContainer = ({ products }) => {

  return (
    <main className="items-center">
      <ul className="grid grid-cols-3">
        {products.map((product) => (
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
