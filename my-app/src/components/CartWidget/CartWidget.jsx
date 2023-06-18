import { React, useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { NavLink, useParams } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const currentUrl = useParams();

  const numero = cart.length;

  return numero > 0 ? (
    <NavLink to={"/cart"} className="mr-4">
      &#128722;{numero}{" "}
    </NavLink>
  ) : (
    <div className="mr-4">&#128722;{numero} </div>
  );
};

export default CartWidget;
