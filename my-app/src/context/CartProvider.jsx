import React, { createContext, useRef, useState } from "react";

export const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const purchaseOrder = useRef(undefined);

  function addToCart(product) {
    const productExist = cart.find((item) => item.id === product.id);
    const { price, quantity } = product;
    let newOrderTotal = price * quantity;

    if (!productExist) {
      setCart([...cart, { ...product, total: newOrderTotal }]);
    } else {
      const updateCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: quantity + item.quantity,
              total: item.total + newOrderTotal,
            }
          : item
      );
      setCart(updateCart);
    }
    return cart;
  }
  function cleanCart() {
    setCart([]);
    return cart;
  }
  function getCartTotal() {
    if (cart.length > 0) {
      const checkTotal = cart.map((item) => {
        return item.total;
      });
      const sumTotal = checkTotal.reduce((prev, acum) => prev + acum);

      setCartTotal(sumTotal);
      return cartTotal;
    }
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cleanCart,
        cartTotal,
        setCartTotal,
        getCartTotal,
        purchaseOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
