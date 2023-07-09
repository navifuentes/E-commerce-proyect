import React from "react";

// AGREGAR UN CONTENEDOR PARA DARLE ESTILOS
const CartCard = ({ item }) => {
  const { title, price, quantity, total } = item;

  return (
    <div className="flex gap-3 flex-row items-center text-center justify-between py-2 px-4">
      <div className="text-xl ">"{title}"</div>
      <div className="text-yellow-600">$ {price} c/u</div>
      <div>cantidad : {quantity}</div>
      <strong className="text-yellow-600">subtotal: $ {total}</strong>
    </div>
  );
};

export default CartCard;
