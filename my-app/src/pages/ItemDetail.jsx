import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import useFirebase from "../hooks/useFirebase.jsx";
import products from "../mocks/products.json";
import ItemCardDetail from "../components/ItemCard/ItemCardDetail.jsx";

const ItemDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product._id === id);

  // const { producto, getProduct } = useFirebase();

  // useEffect(() => {
  //   getProduct({ id });
  // }, []);

  /* // Hardcoded array of products
  const products = [
    {
      id: "1",
      titulo: "Product 1",
      price: 10.99,
      description: "Description 1",
      img: "image1.jpg",
      marca: "Brand 1",
      stock: 5,
    },
    {
      id: "2",
      titulo: "Product 2",
      price: 15.99,
      description: "Description 2",
      img: "image2.jpg",
      marca: "Brand 2",
      stock: 10,
    },
    // Add more products as needed
  ];

  const producto = products.find((product) => product.id === id);
 */
  return (
    <>
      <ItemCardDetail key={product.id} {...product} />
    </>
  );
};

export default ItemDetail;
