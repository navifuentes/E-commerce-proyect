import React from "react";
import { NavLink } from "react-router-dom";
import Checkout from "../../../pages/Checkout";

const Categoria = (props) => {
  return (
    <>
      <NavLink to="/checkout">{props.categoryName}</NavLink>
    </>
  );
  /* <li className="hover:opacity-50">{props.categoryName}</li>; */
};

export default Categoria;
