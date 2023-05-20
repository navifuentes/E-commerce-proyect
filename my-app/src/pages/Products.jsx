import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const items = [
    {
      id: 1,
      titulo: "Item 1",
      price: 300,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    },
    {
      id: 2,
      titulo: "Item 2",
      price: 300,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    },
  ];

  useEffect(() => {
    const filter = items.find((item) => item.id === id);
    setItem(filter);
    setLoading(false);
  }, []);

  return (
    <Fragment>
      {!item && loading && <h1>Cargando...</h1>}
      {item && !loading && (
        <div>
          <h1>{item.titulo}</h1>
          <p>{item.price}</p>
          <span>{item.description}</span>
        </div>
      )}
    </Fragment>
  );
};

export default Products;
