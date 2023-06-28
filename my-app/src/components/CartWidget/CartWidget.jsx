import { React, useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  //const currentUrl = useParams();

  const number = cart.length;

  return number > 0 ? (
    <NavLink to={"/cart"} className="mr-4">
      &#128722;{number}{" "}
    </NavLink>
  ) : (
    <div className="mr-4">&#128722;{number} </div>
  );
};

export default CartWidget;
