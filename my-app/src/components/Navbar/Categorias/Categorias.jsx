import React from "react";
import Categoria from "./Categoria.jsx";

const Categorias = () => {
  return (
    <div className="hidden sm:block px-4 ">
      <ul className="flex flex-row">
        <Categoria redirect={"products"} categoryName={"Productos"} />
        <Categoria redirect={"checkout"} categoryName={"Sobre Nosotros"} />
        <Categoria redirect={"checkout"} categoryName={"Contacto"} />
      </ul>
    </div>
  );
};

export default Categorias;
