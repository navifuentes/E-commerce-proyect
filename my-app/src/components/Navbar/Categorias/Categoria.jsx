import React from "react";
import { NavLink } from "react-router-dom";

const Categoria = (props) => {
  return (
    <>
      <NavLink className="px-2" to={`/category/${props.redirect}`}>{props.categoryName}</NavLink>
    </>
  );
};

export default Categoria;
