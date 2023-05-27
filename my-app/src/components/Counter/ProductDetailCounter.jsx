import React, { useState } from "react";

const ProductDetailCounter = () => {
  const [number, setNumber] = useState(0);
  const sumar = () => {
    setNumber(number + 1);
  };
  const restar = () => {
    setNumber(number - 1);
  };
  // const reset = () => {
  //   setNumber(0);
  // };

  return (
    <div>
      <button className="rounded-lg bg-blue-800 hover:bg-blue-950 mx-2 px-2" onClick={sumar}>
        +
      </button>
      <button className="bg-white text-black hover:cursor-default px-2">{number}</button>
      <button className="rounded-lg bg-blue-800 hover:bg-blue-950 mx-2 px-2" onClick={restar}>
        -
      </button>
      <button className="rounded-full bg-blue-800 hover:bg-blue-950 p-2">Agregar al carrito</button>
    </div>
  );
};

export default ProductDetailCounter;
