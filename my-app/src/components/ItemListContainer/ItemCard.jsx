import React from "react";
import { useNavigate } from "react-router-dom";

const ItemCard = (props) => {
  const { id, titulo, price, description } = props;
  const navigate = useNavigate;

  return (
    <div>
      <h1>{titulo}</h1>
      <p>$ {price}</p>
      <span>{description}</span>
      <button onClick={() => navigate(`/products/${id}`)}>Ver más</button>
    </div>
  );
};

export default ItemCard;
