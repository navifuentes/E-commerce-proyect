import React from "react";
import { NavLink } from "react-router-dom";

const Categoria = (props) => {
  return (
    <>
      <NavLink to={`/${props.redirect}`}>{props.categoryName}</NavLink>
    </>
  );
};

export default Categoria;
