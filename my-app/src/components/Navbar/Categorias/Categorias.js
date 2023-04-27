import React from "react";
import Categoria from "./Categoria.js";

const Categorias = () => {
  return (
    <div className="hidden sm:block px-4 ">
      <ul className="flex flex-row">
        <Categoria categoryName={"Productos"} />
        <Categoria categoryName={"Sobre Nosotros"} />
        <Categoria categoryName={"Contacto"} />
      </ul>
    </div>
  );
};

export default Categorias;
