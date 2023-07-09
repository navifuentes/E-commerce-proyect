import React, { useContext } from "react";
import CartForm from "../components/Form/CartForm";
import { CartContext } from "../context/CartProvider";
import CartCard from "../components/Card/CartCard";

const Cart = () => {
  const { cart, getCartTotal } = useContext(CartContext);

  return (
    <div className="my-4 flex flex-row justify-evenly items-center">
      <div className=" flex flex-col">
        <h2 className="text-center text-3xl">Now on cart :</h2>
        {cart.map((product) => (
          <CartCard key={product} item={product} />
        ))}
        <p className="text-center text-yellow-500">
          total : $ {getCartTotal()}{" "}
        </p>
      </div>
      <CartForm />
    </div>
  );
};

export default Cart;
