import React from "react";
import Categoria from "./Categoria.jsx";

const Categorias = () => {
  


  return (
    <div className="hidden sm:block px-4 ">
      <ul className="flex flex-row">
        <Categoria redirect={"shampoos"} categoryName={"Shampoos"} />
        <Categoria redirect={"acondicionadores"} categoryName={"Acondicionadores"} />
        <Categoria redirect={"jabones"} categoryName={"Jabones"} />
      </ul>
    </div>
  );
};

export default Categorias;
