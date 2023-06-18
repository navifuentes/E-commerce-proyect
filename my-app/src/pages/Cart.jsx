import React, { useContext } from "react";
import CartForm from "../components/Form/CartForm";
import { CartContext } from "../context/CartProvider";
import CartCard from "../components/Card/CartCard";



const Cart = () => {

  const { cart } = useContext(CartContext);
  return (
    <div className="my-4 flex flex-row justify-evenly items-center">
      {cart.map((product) => (
        <CartCard key={product} item={product}/>
      ))}
      <CartForm />
    </div>
  );
};

export default Cart;
