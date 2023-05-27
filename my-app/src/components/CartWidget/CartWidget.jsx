import { React, useState } from "react";

const CartWidget = () => {
  const [numero, setNumero] = useState(0);

  const sumar = () => {
    setNumero(numero + 1);
  };
  const restar = () => {
    setNumero(numero - 1);
  };
  const reset = () => {
    setNumero(0);
  };

  return <div className="mr-4">&#128722;{numero} </div>; 
};

export default CartWidget;
