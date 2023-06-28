import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const ProductDetailCounter = ({ title, id, price }) => {
  const [number, setNumber] = useState(0);
  const { cart, addToCart } = useContext(CartContext);

  const item = {
    title: title,
    id: id,
    price: price,
    quantity: number,
  };

  const sumar = () => {
    setNumber(number + 1);
  };
  const restar = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  console.log("cart", cart);

  return (
    <div>
      <button
        className="rounded-lg bg-blue-800 hover:bg-blue-950 mx-2 px-2"
        onClick={sumar}
      >
        +
      </button>
      <button className="bg-white text-black hover:cursor-default px-2">
        {number}
      </button>
      <button
        className="rounded-lg bg-blue-800 hover:bg-blue-950 mx-2 px-2"
        onClick={restar}
      >
        -
      </button>
      <button
        onClick={() => {
          if (number > 0) addToCart(item);
        }}
        className="rounded-full bg-blue-800 hover:bg-blue-950 p-2"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductDetailCounter;
