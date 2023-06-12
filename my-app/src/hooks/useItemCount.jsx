import React, { useState } from "react";

const useItemCount = (stock) => {
  const [cantidad, setCantidad] = useState(1);

  const sumarCantidad = () => {
    if (stock - 1 > cantidad) {
      setCantidad(cantidad + 1);
    }
  };
  const restarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return { cantidad, sumarCantidad, restarCantidad };
};
export default useItemCount;
