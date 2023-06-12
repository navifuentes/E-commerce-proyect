import React from "react";
import { useNavigate } from "react-router-dom";

const ItemCard = (props) => {
  const { id, titulo, price, description, img, marca, stock } = props;
  const navigate = useNavigate();

  return (
    <div className="w-5/6 sm:w-2/3 flex flex-col items-center justify-between py-4 my-4 border-4 border-white text-center">
      <img
        className="h-2/3
      "
        src={img}
        alt={description}
      />
      <h1>{titulo}</h1>
      <p>$ {price}</p>
      <span>{description}</span>
      <button
        className="rounded-full bg-blue-800 px-2 hover:bg-blue-950"
        onClick={() => navigate(`/products/${id}`)}
      >
        Ver más
      </button>
      <button className="rounded-full bg-blue-800 mt-2 px-2 hover:bg-blue-950">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCard;
