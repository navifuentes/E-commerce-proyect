import React, { createContext, useState } from "react";

export const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //LOGICA Q NO SE REPITA EL PRODUCTO

  const addToCart = (product) => {
    //LOGICA CHECKEAR SI HAY PRODUCTO; CHEQUEAR CON FIREBASE
    const productExist = cart.find((item) => item.product == product.product);

    if (productExist) {
      const updatedCart = cart.map((item) =>
        item.product == product.product
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
      setCart(updatedCart);
    }

    setCart([...cart, product]);
  };

  const cleanCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, cleanCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
