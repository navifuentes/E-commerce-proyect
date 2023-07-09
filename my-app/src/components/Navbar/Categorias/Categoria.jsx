import React from "react";
import { NavLink } from "react-router-dom";

const Categoria = (props) => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <>
      <NavLink  className="px-2" style={navLinkStyles} to={`/category/${props.redirect}`}>
        {props.categoryName}
      </NavLink>
    </>
  );
};

export default Categoria;
