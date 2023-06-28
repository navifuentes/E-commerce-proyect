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
      <button className="rounded-full py-1 px-2 bg-red-700 text-white text-xl">
        QUITAR
      </button>
    </div>
  );
};

export default CartCard;
