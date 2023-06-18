import React from "react";

// AGREGAR UN CONTENEDOR PARA DARLE ESTILOS
const CartCard = ({ item }) => {
  const { product, price, quantity } = item;

  return <div>{quantity}</div>;
};

export default CartCard;
