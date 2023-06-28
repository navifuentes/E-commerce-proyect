import React, { createContext, useState } from "react";

export const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productExist = cart.find((item) => item.id === product.id);
    const { price, quantity } = product;
    product.total = price * quantity;

    if (!productExist) {
      setCart([...cart, product]);
    } else {
      const updateCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
      setCart(updateCart);
    }
  };

  const cleanCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, cleanCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
