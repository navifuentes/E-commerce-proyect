import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useFirebase from "../hooks/useFirebase.jsx";
import ItemCardDetail from "../components/ItemCard/ItemCardDetail.jsx";

const ItemDetail = () => {
  const { id } = useParams();
  const { producto, getProduct } = useFirebase();

  useEffect(() => {
    getProduct({ id });
  }, [producto]);

  return (
    <>
      <ItemCardDetail key={producto.id} {...producto} />
    </>
  );
};

export default ItemDetail;
